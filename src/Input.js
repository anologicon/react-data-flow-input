import React, { Component } from 'react';

class Input extends Component {
  
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  
  render() {
    return (
      <div>
          <p>
            {this.state.value}
          </p>
        <input type="text" placeholder="Digite Aqui" onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Input;
