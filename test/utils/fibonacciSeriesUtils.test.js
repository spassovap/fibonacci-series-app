import { isValidInput } from '../../src/utils/fibonacciSeriesUtils';

const validFibonacciSequences = [
    '2,3,5,8,13'
];

const validInputs = [
    ...validFibonacciSequences,
    '0',
    '1,2',
    '0,1,2,345,92045'
];

const invalidInputs = [
    '   ',
    ',',
    '...,1',
    '   1,2',
    '#0,1,2',
    '2,3.,4',
    '2,3,',
    'letters,test,1,2'
];

describe('isValidInput test', () => {
    test('should return false if passed string is empty', () => {
        expect(isValidInput('')).toBe(false);
    });

    test('should return false if passed parameter is null or undefined', () => {
        expect(isValidInput(null)).toBe(false);
        expect(isValidInput()).toBe(false);
    });

    invalidInputs.map(value =>
        test('should return false if passed string is invalid', () => {
            expect(isValidInput(value)).toBe(false);
        })
    );

    validInputs.map(value =>
        test('should return false if passed string is valid', () => {
            expect(isValidInput(value)).toBe(true);
        })
    );
});