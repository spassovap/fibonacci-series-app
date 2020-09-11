import React from 'react';
import { string } from 'prop-types';
import './styles.css';

export const InputField = ({
    placeholder
}) => (
        <input
            className='input-field'
            placeholder={placeholder}
        />
    );

InputField.propTypes = {
    placeholder: string
};