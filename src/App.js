import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './components/Form';
import Results from './components/Results';

class App extends Component {
  static propTypes = {
    value: PropTypes.string,
  };

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    error: '',
  };

  handleInput = (event) => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = (event) => {
    this.setState({
      value: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <h1>Check the weather:</h1>
        <Form
          value={this.state.value}
          change={this.handleInput}
          submit={this.handleSubmit}
        />
        <Results />
      </div>
    );
  }

}

export default App;
