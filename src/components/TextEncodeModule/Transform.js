import React, { Component } from 'react';
import styled from 'styled-components';
import TextArea from '../TextArea';
import SubmitButton from '../SubmitButton';
import * as encodeUtils from '../../utils';

const InputTextBox = styled(TextArea)`
padding: 5px;

min-height: 150px;
width: 100%;
margin = auto 0;
`;
const OutputText = styled.p`
width: 100%;
margin = auto 0;
height:auto;
display:flex;
`;
const Command = styled.input`

width: 100%;
margin = auto 0;
`;

class EncodeModule extends Component {
    constructor(props) {
        super(props);
        this.state = { encodedText: '', inputText: '', command: '' };
        this.handleChange = this.handleChange.bind(this);
        this.readCommand = this.readCommand.bind(this);
        this.encodeText = this.encodeText.bind(this);
    }
    handleChange(e) {
        this.setState({ inputText: e.target.value });
    }

    readCommand(e) {
        this.setState({ command: e.target.value });
    }
    encodeText() {
        var outputText = this.state.inputText.toString().toLowerCase().split(',').join("");
        const command = this.state.command.toString().toUpperCase().replace(/\s/g, "").split(",");
        for (var i = 0; i < command.length; i++) {
            if (command[i] === "H") {
                outputText = encodeUtils.horizontalFlip(outputText);
            } else if (command[i] === "V") {
                outputText = encodeUtils.verticalFlip(outputText);
            } else {
                var shiftValue = parseInt(command[i]); //Convert linear shift value to number
                if (shiftValue)
                    outputText = encodeUtils.shiftBy(outputText, shiftValue);
            }
        }
        this.setState({ encodedText: outputText });
    }

    render() {


        return (
            <div className="container">
                <form className="form-group">
                    <div className="form-group">
                        <h2>Input Text</h2>
                        <InputTextBox type="text" onChange={this.handleChange} className="form-control" placeholder="Enter text here" />
                    </div>
                    <div className="form-group">
                        <h2>Transformation Command</h2>
                        <p>
                            H = horizontal, V = vertical, 6 = Right-Shift by 5, -5 = Left-Shift by 6
                            <br></br>
                            eg. H, V, 6
                        </p>
                        <Command type="text" onChange={this.readCommand} className="form-control" placeholder="Enter transformation keys" />
                    </div>
                    <div className="form-group">
                        <h2>Output</h2>
                        <OutputText className="form-control" placeholder="Encoded text" >{this.state.encodedText.toString().split(',').join("")}</OutputText>
                    </div>
                    <div className="form-group">
                        <SubmitButton className="btn btn-dark" encodeText={() => { this.encodeText() }}>
                        </SubmitButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default EncodeModule;