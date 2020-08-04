import React, { Component } from 'react';

class SubmitButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { encodeText } = this.props;
    return (
      <button type="button" name="submitButton" className="btn-dark btn-md" onClick={encodeText}>Encode</button>
    );
  }
}

SubmitButton.defaultProps = {};

export default SubmitButton;
