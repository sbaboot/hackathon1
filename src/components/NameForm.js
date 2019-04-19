import React from 'react';
import { Link } from "react-router-dom";

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style={{ color: 'black' }}>
          Entre ton pseudo:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Link to="/Quiz">
          <input type="submit" value="C'est parti" className="bg-warning" style={{ borderRadius: '5px' }} />
        </Link>
      </form>
    );
  }
}

export default NameForm;
