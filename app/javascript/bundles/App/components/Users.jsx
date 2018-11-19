import React, { Component } from 'react'
import User from './User'
import axios from 'axios'
import MatchModal from './MatchModal'
const token = document.querySelector('meta[name="csrf-token"]')
  .getAttribute('content');
const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': token
}


export default class Users extends Component {
  state = {
    users: [],
    concerts: [],
    image: [],
    like: false
  }
  toggleModal = () => {
    this.setState({ like: !this.state.like })
  }
  fetchUsers = () => {
    axios.get('/likes.json')
      .then((response) => {
        const users = response.data.users
        const concerts = response.data.concerts
        const image = response.data.images
        this.setState({ users, image, concerts })
      })
  }
  handleLike = (userId) => {
    const params = { likes: { id: userId } }
    axios.post(`/likes`,
      params,
      { headers }
    ).then((response) => {
      const like = response.data
      this.setState({ like })
      if (!this.state.like) {
        this.handleDislike()
      }
    })
  }
  handleDislike = () => {
    let users = this.state.users
    users.shift()
    this.setState({ users })
  }
  componentDidMount() {
    this.fetchUsers()
  }

  render() {
    const user = this.state.users[0]
    if (user != undefined) {
      return (
        <div>
          <User
            image={this.state.image[0]}
            user={user}
            handleLike={this.handleLike}
            handleDislike={this.handleDislike}
          />
          <MatchModal
            user={user}
            toggleModal={this.toggleModal}
            handleDislike={this.handleDislike}
            open={this.state.like}
          />
        </div>
      )
    } else {
      return (
        <div>
          <h2>Out of Matches For Today, Try Again Tomorrow!</h2>
        </div>
      )
    }
  }
}
