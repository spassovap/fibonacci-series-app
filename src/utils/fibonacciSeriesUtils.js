const isNumericValue = value => /^\d+$/.test(value);

export const isValidInput = input => {
    const inputValue = input || '';
    const values = inputValue.split(',');

    return !values.some(value => !value || !isNumericValue(value));
};

export const isValidFibonacciSequence = (inputValue) => isValidInput(inputValue);