import React, { Component } from 'react'

export default class LandingPage extends Component {
  state = {
    skip: 1
  }

  skipLandingPage = () => {
    this.setState({
      skip: 4
    })
  }
  nextStep = () => {
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
          <div className="skip-main-div">
              <img onClick={this.nextStep} src="/images/welcome_0.png" alt="band together logo" />
          </div>
        )
      case 2:
        return (
          <div className="skip-main-div">
            <div className="skip-images-div">
              <img src="/images/welcome_1_318x328 .gif" alt="welcome screen 1" />
            </div>
            <div className="skip-explain-div">
              <p>No more flying</p>
              <p>solo at concerts</p>
            </div>
            <div className="skip-link-div">
              <a onClick={this.skipLandingPage}>SKIP</a>
              <a onClick={this.nextStep} >NEXT</a>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="skip-main-div">
            <div className="skip-images-div">
              <img src="/images/welcome_2_318x243.gif" alt="welcome screen 2" />
            </div>
            <div className="skip-explain-div">
              <p>Select concerts</p>
              <p>you want to attend</p>
            </div>
            <div className="skip-link-div">
              <a onClick={this.skipLandingPage}>SKIP</a>
              <a onClick={this.nextStep} >NEXT</a>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="skip-main-div">
           <div className="skip-images-div">
             <img src="/images/welcome_3_318x256.gif" alt="welcome screen 3" />
           </div>
           <div className="skip-explain-div">
             <p>Get matches that</p>
             <p>are attending</p>
             <p>the same show</p>
           </div>
           <div>
             <a id="login-button-spotify" className="btn btn-success" href="/users/auth/spotify">LOGIN WITH SPOTIFY</a>
           </div>
          </div>
        )
    }
  }
}
