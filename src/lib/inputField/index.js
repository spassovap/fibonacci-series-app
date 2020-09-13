import React from 'react';
import { string, func } from 'prop-types';
import './styles.css';

export const InputField = ({
    placeholder,
    onInputChange
}) => (
        <input
            className='input-field'
            placeholder={placeholder}
            onChange={onInputChange}
        />
    );

InputField.propTypes = {
    placeholder: string,
    onInputChange: func.isRequired
};