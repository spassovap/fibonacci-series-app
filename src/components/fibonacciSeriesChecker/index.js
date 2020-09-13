import React, { Component } from 'react';
import { string, func } from 'prop-types';
import './styles.css'
import { HEADER_TEXT, BUTTON_LABEL, INPUT_PLACEHOLDER } from './constants';
import { ButtonCheck } from '../../lib/button';
import { Header } from '../../lib/header';
import { InputField } from '../../lib/inputField';

export class FibonacciSeriesChecker extends Component {
    constructor() {
        super();

        this.state = {
            containerClassName: '',
            inputValue: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonCheckClick = this.handleButtonCheckClick.bind(this);
    }

    handleInputChange({ target: { value } }) {
        this.setState({
            inputValue: value
        })
    }

    handleButtonCheckClick() {
        const isValidSequence = this.props.isValidSequence(this.state.inputValue);

        this.setState({
            containerClassName: isValidSequence
                ? 'background-green'
                : 'background-red'
        });
    }

    render() {
        const {
            headerText = HEADER_TEXT,
            inputPlaceholder = INPUT_PLACEHOLDER,
            buttonCheckLabel = BUTTON_LABEL
        } = this.props;

        const {
            containerClassName
        } = this.state;

        return (
            <div className={`input-container ${containerClassName}`}>
                <Header
                    text={headerText}
                />
                <div>
                    <InputField
                        placeholder={inputPlaceholder}
                        onInputChange={this.handleInputChange}
                    />
                    <ButtonCheck
                        icon='&#10003;'
                        label={buttonCheckLabel}
                        onClick={this.handleButtonCheckClick}
                    />
                </div>
            </div>
        )
    }
};

FibonacciSeriesChecker.propTypes = {
    headerText: string,
    inputPlaceholder: string,
    buttonCheckLabel: string,
    isValidSequence: func.isRequired
};