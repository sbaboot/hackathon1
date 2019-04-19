import React, { Component } from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isOn: false,
    };
    this.tick = this.tick.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
  }

  tick() {
    this.setState((prevState) => ({
      isOn: true,
      seconds: prevState.seconds + 1,
    }));
  }

  stopTimer() {
    this.setState({ isOn: false })
    clearInterval(this.interval)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <React.Fragment>
        <span>Tu as commencé il y a déjà : </span>
        <div>{this.state.seconds} secondes !</div>
        <button onClick={this.stopTimer}>Stop</button>
      </React.Fragment>
    );
  }
}

export default Timer;
