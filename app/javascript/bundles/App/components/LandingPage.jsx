import React, { Component } from 'react'

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
          <div className="skip-main-div">
            <div className="skip-images-div">
             <img src="/images/welcome_1.png" alt="welcome screen 1" />
            </div>
            <div className="skip-explain-div">
              <p>No move flying</p>
              <p>solo at concerts</p>
            </div>
            <div className="skip-link-div">
             <a href="/users/sign_in">SKIP</a>
             <a onClick={this.skipLandingPage}>NEXT</a>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="skip-main-div">
            <div className="skip-images-div">
             <img src="/images/welcome_2.png" alt="welcome screen 2" />
            </div>
           <div className="skip-explain-div">
            <p>Select concerts</p>
            <p>you want to attend</p>
           </div>
            <div className="skip-link-div">
              <a href="/users/sign_in">SKIP</a>
              <a onClick={this.skipLandingPage}>NEXT</a>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="skip-main-div">
           <div className="skip-images-div">
             <img className="img-responsive" src="/images/welcome_3.png" alt="welcome screen 3" />
           </div>
           <div className="skip-explain-div">
             <p>Get matches that</p>
             <p>are attending</p>
             <p>the same show</p>
           </div>
           <div>
             <a id="login-button" className="btn btn-success" href="/users/sign_in">LOGIN WITH SPOTIFY</a>
           </div>
          </div>
        )
    }
  }
}
