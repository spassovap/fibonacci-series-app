import { isValidInput } from '../../src/utils/inputUtils';
import { invalidInputs, validInputs } from './fibonacciSeriesTestData';

describe('isValidInput tests', () => {
    test('should return false if passed string is empty', () => {
        expect(isValidInput('')).toBe(false);
    });

    test('should return false if passed parameter is null or undefined', () => {
        expect(isValidInput(null)).toBe(false);
        expect(isValidInput()).toBe(false);
    });

    invalidInputs.forEach(value =>
        test(`should return false if '${value}' is invalid input`, () =>
            expect(isValidInput(value)).toBe(false)
        )
    );

    validInputs.forEach(value =>
        test(`should return true if '${value}' is valid input`, () =>
            expect(isValidInput(value)).toBe(true)
        )
    );
});