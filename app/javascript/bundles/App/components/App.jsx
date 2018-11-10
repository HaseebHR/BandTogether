import React from 'react';
import LandingPage from './LandingPage'

export default class App extends React.Component {
  render(){
    return (
      <div>
        <h3>
          <p>Hello from app component</p>
        </h3>
        <div>
         <LandingPage/>
        </div>
      </div>
    );
  }
}
