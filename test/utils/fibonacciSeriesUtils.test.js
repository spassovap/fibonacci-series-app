import { isPerfectSquare, isValidFibonacciSequence } from '../../src/utils/fibonacciSeriesUtils';
import { invalidFibonacciSequences, perfectSquares, validFibonacciSequences } from './fibonacciSeriesTestData';

describe('isPerfectSquare tests', () => {
    test('should return false if passed parameter is null or undefined', () => {
        expect(isPerfectSquare(null)).toBe(false);
        expect(isPerfectSquare()).toBe(false);
    });

    test('should return false if passed number is not a perfect square', () =>
        expect(isPerfectSquare(-1)).toBe(false)
    );

    perfectSquares.forEach(value =>
        test(`should return true if ${value} is a perfect square`, () =>
            expect(isPerfectSquare(value)).toBe(true)
        )
    );
});

describe('isValidFibonacciSequence', () => {
    invalidFibonacciSequences.forEach(numbers =>
        test(`should return false if '${numbers}' is not a valid Fibonacci sequence`, () =>
            expect(isValidFibonacciSequence(numbers)).toBe(false)
        )
    );

    validFibonacciSequences.forEach(numbers =>
        test(`should return true if '${numbers}' is a valid Fibonacci sequence`, () =>
            expect(isValidFibonacciSequence(numbers)).toBe(true)
        )
    );
});