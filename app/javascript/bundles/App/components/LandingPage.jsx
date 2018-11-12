import React, { Component } from 'react'
import ReactOnRails from 'react-on-rails'

export default class LandingPage extends Component {
  state = {
    skip: 1
  }

  skipLandingPage = () => {
    const { skip } = this.state
    this.setState({
      skip: skip + 1
    })
  }

  render() {
    const { skip } = this.state

    switch (skip) {
      case 1:
        return (
          <div>
            <img src="/images/Welcome_Screen_1.png" alt="welcome screen 1" />
              <button>
                <a href="/users/sign_in">Skip</a>
              </button>
            <button onClick={this.skipLandingPage}>Next</button>
          </div>
        )
      case 2:
        return (
          <div>
            <img src="/images/Welcome_Screen_2.png" alt="welcome screen 2" />
              <button>
                <a href="/users/sign_in">Skip</a>
              </button>
            <button onClick={this.skipLandingPage}> Next</button>
          </div>
        )
      case 3:
        return (
          <div>
            <img src="/images/Welcome_Screen_3.png" alt="welcome screen 3" />
            <button>
              <a href="/users/sign_in">Login</a>
            </button>
          </div>
        )
    }
  }
}
