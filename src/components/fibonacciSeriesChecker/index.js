import React, { Component } from 'react';
import './styles.css'
import { HEADER_TEXT, BUTTON_LABEL, INPUT_PLACEHOLDER } from './constants';
import { ButtonCheck } from '../../lib/button';
import { Header } from '../../lib/header';
import { InputField } from '../../lib/inputField';

export class FibonacciSeriesChecker extends Component {
    constructor() {
        super();

        this.state = {
            containerClassName: ''
        }

        this.setBackgroundColor = this.setBackgroundColor.bind(this);
    }

    setBackgroundColor(correct) {
        this.setState({
            containerClassName: correct
                ? 'background-green'
                : 'background-red'
        });
    }

    render() {
        const {
            containerClassName
        } = this.state;

        return (
            <div className={`input-container ${containerClassName}`}>
                <Header
                    text={HEADER_TEXT}
                />
                <div>
                    <InputField
                        placeholder={INPUT_PLACEHOLDER}
                    />
                    <ButtonCheck
                        icon='&#10003;'
                        label={BUTTON_LABEL}
                        onClick={this.setBackgroundColor}
                    />
                </div>
            </div>
        )
    }
};