export const isNumericValue = value => /^\d+$/.test(value);

export const convertToNumber = (values = []) => values.map(Number);