import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  onSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    if (!error) {
      event.target.elements.option.value = '';
    }
  };

  render() {
    return (
      <div>
        {this.state.error && (<p color="red">{this.state.error}</p>)}
        <form onSubmit={this.onSubmit}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}