import React from 'react';
import { FibonacciSeriesChecker } from './components/fibonacciSeriesChecker';
import { isValidFibonacciSequence } from './utils/fibonacciSeriesUtils';
import { isValidInput } from './utils/inputUtils';

export default () => (
    <FibonacciSeriesChecker
        isValidInput={isValidInput}
        isValidSequence={isValidFibonacciSequence}
    />
);