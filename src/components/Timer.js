import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isOn: false,
    };
    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState((prevState) => ({
      isOn: true,
      seconds: prevState.seconds + 1,
    }), () => this.props.setSeconds(this.state.seconds)
    );
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
      </React.Fragment>
    );
  }
}

export default Timer;
