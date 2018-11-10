import React, { Component } from 'react'
import ReactOnRails from 'react-on-rails';

export default class LandingPage extends Component {
  state = {
    skip: 1
  }
  skipLandingPage = () => {
    const { skip } = this.state
    this.setState({
      skip: skip + 1
      login:
    })
  }
  render() {
    const { skip } = this.state

    switch (skip) {
      case 1:
        return (
          <div>
            <img src="/images/Welcome_Screen_1.png" alt="welcome screen" />
            <button onClick={this.skipLandingPage}>Next</button>
          </div>
        )
      case 2:
        return (
          <div>
            <p>pic2</p>
            <button onClick={this.skipLandingPage}> Next</button>
          </div>
        )
      case 3:
        return (
          <div>
            <p>loggin</p>
            <button onClick={}><a>Let's Get Started!</a></button>
          </div>
        )
    }
  }
}
