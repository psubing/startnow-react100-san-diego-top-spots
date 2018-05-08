import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }
  componentWillMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div>
        <head>
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' />
        </head>
        <div className='App'>
          <div className='text-center jumbotron'>
            <h1>San Diego Top Spots</h1>
            <h3>A list of the top 30 places to see in San Diego, California.</h3>
          </div>
          { this.state.topspots.map(topspot => (
            <TopSpot
              key={ topspot.id }
              name={ topspot.name }
              description={ topspot.description }
              location={ topspot.location } 
              />
            ))
          }
          <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre>
        </div>
      </div>
    );
  }
}

export default App;
