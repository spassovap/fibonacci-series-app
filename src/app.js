import React from 'react';
import { FibonacciSeriesChecker } from './components/fibonacciSeriesChecker';
import { isValidFibonacciSequence } from './utils/fibonacciSeriesUtils';

export default () => (
    <FibonacciSeriesChecker
        isValidSequence={isValidFibonacciSequence}
    />
);