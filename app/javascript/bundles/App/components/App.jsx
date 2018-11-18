import React from 'react';
import Concerts from './Concerts'
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Concerts user={this.props.user} />
      </div>
    );
  }
}
