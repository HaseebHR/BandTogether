import React, { Component } from 'react'
import Concert from './Concert'
import Search from './Search'
import axios from 'axios'

const token = document.querySelector('meta[name="csrf-token"]')
  .getAttribute('content');

const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': token
}

export default class Concerts extends Component {
  state = {
    term: '',
    events: [],
    choices: []
  }

  fetchConcerts = (term = "") => {
    axios.get(`/profiles.json?term=${term}`)
      .then((response) => {
        const { events } = response.data
        this.setState({ events })
      })
  }

  fetchChoices = () => {
    axios.get(`/users/${this.props.user.id}/user_choices.json`)
      .then((response) => {
        this.setState({ choices: response.data })
      })
  }

  chooseConcert = (concertId) => {
    const params = { user_choice: { concert_id: concertId } }
    console.log(params)
    axios.post(`/users/${this.props.user.id}/user_choices.json`,
      params,
      { headers }
    ).then((response) => {
      let { choices } = this.state
      choices.push(response.data.concert_id)
      this.setState({ choices })
    })
  }

  handleSearch = event => {
    const term = event.target.value
    this.setState({ term })
    this.fetchConcerts(term)
  }

  componentDidMount() {
    this.fetchConcerts()
    this.fetchChoices()
  }

  render() {
    const { term, events } = this.state

    return (
      <div id="concert-page">
        <h3>Concerts You May Like!</h3>
        <div className="container-fluid">
          <Search
            invalid={term.length > 0 && events.length == 0}
            term={term}
            handleSearch={this.handleSearch}
          />
        </div>
        {
          this.state.events.map((concert, i) => {
            console.log(concert.id)
            return (
              <Concert
                chosen={this.state.choices.includes(concert.id)}
                chooseConcert={this.chooseConcert}
                name={concert.name}
                date={concert.date}
                location={concert.location}
                url={concert.url}
                imgUrl={concert.imgurl}
                id={concert.id}
                key={i}
              />
            )
          })
        }
        <hr />
        <a
          href="/"
          id="login-button-spotify"
          className="btn btn-primary float-right mt-3"
        >
          Get Matches!
        </a>
      </div>
    )
  }
}
