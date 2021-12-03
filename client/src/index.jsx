import * as React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  render() {
    return (
      <div><h1>Hi! My name's Doowell</h1></div>
    )
  }
}

ReactDOM.render(< App />, document.getElementById('app'));