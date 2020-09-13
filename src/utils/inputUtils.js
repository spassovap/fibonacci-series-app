import { isNumericValue } from "./commonUtils";

export const extractValues = input => {
    const inputValue = input || '';

    return inputValue.split(',');
};

export const isValidInput = inputValue => {
    const values = extractValues(inputValue);

    return !values.some(value => !value || !isNumericValue(value));
};