import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    return <textarea required className="form-control" type="text" id="text-to-encode" {...this.props}></textarea>;
  }
}

TextArea.defaultProps = {};

export default TextArea;
