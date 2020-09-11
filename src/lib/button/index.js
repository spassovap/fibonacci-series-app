import React from 'react';
import { any, string, func } from 'prop-types';
import './styles.css';

export const ButtonCheck = ({
    icon,
    label,
    onClick
}) => (
        <div
            className='button-check no-select'
            onClick={onClick}
        >
            {icon} {label}
        </div>
    );

ButtonCheck.propTypes = {
    icon: any,
    label: string.isRequired,
    onClick: func.isRequired
};