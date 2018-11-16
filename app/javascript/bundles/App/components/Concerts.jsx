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
      <div>
        <h1>Concerts You May Like!</h1>
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
