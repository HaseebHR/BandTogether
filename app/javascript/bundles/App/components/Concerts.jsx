import React, { Component } from 'react'
import Concert from './Concert'
import axios from 'axios'

export default class Concerts extends Component {
  state = {
    events: []
  }

  fetchConcerts = () => {
    axios.get('/profiles.json')
      .then((response) => {
        const { events } = response.data
        this.setState({ events })
      })
  }
  componentDidMount() {
    this.fetchConcerts()
  }
  render() {
    return (
      <div id="concert-page">
        <h2>Concerts You May Like!</h2>
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
