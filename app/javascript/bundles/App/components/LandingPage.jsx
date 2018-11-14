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
          <div class="text-justify">
            <div>
             <img src="/images/welcome_1.png" alt="welcome screen 1" />
            </div>
            <div>
              <p>No move flying solo at concerts</p>
            </div>
            <div class="clearfix">
             <a class="float-left" href="/users/sign_in">Skip</a>
             <a class="btn btn-link float-right" onClick={this.skipLandingPage}>Next</a>
            </div>
          </div>
        )
      case 2:
        return (
          <div>
            <div>
             <img class="img-responsive" src="/images/welcome_2.png" alt="welcome screen 2" />
            </div>
           <div>
            <p class="text-center">Select concerts you want to attend</p>
           </div>
            <div>
              <a href="/users/sign_in">Skip</a>
              <a class="btn btn-link" onClick={this.skipLandingPage}> Next</a>
            </div>
          </div>
        )
      case 3:
        return (
          <div>
           <div>
             <img class="img-responsive" src="/images/welcome_3.png" alt="welcome screen 3" />
           </div>
           <div>
             <p class="text-center">Get matches that are attending the same show</p>
           </div>
           <div>
             <a class="btn btn-success" href="/users/sign_in">Login</a>
           </div>
          </div>
        )
    }
  }
}
