import React from 'react';
import { string } from 'prop-types';
import './styles.css';

export const Header = ({
    text
}) => (
        <header className='app-header'>
            <p>
                {text}
            </p>
        </header>
    );

Header.propTypes = {
    text: string.isRequired
};