import React, { Component } from 'react'
import Concert from './Concert'
import Search from './Search'
import axios from 'axios'

export default class Concerts extends Component {
  state = {
    term: '',
    events: []
  }

  fetchConcerts = (term = "") => {
    axios.get(`/profiles.json?term="${term}"`)
      .then((response) => {
        const { events } = response.data
        this.setState({ events })
      })
  }

  handleSearch = event => {
    const term = event.target.value
    this.setState({ term })
    this.fetchConcerts(term)
  }

  componentDidMount() {
    this.fetchConcerts()
  }

  render() {
    const { term, events } = this.state

    return (
      <div id="concert-page">
        <h2>Concerts You May Like!</h2>
      <div>
        <Search
          invalid={term.length > 0 && events.length == 0}
          term={term}
          handleSearch={this.handleSearch}
        />
        {
          this.state.events.map((concert, i) => {
            return (
              <Concert
                name={concert.name}
                date={concert.date}
                location={concert.location}
                url={concert.url}
                imgUrl={concert.imgurl}
                key={i}
                />
            )
          })
        }
      </div>
    )
  }
}
