import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.keepPseudo(this.state.value)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label style={{ color: 'black' }}>
          Entre ton pseudo:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="C'est parti" className="bg-warning" style={{ borderRadius: '5px' }} />
      </form>
    );
  }
}

export default NameForm;
