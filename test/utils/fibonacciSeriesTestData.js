export const validFibonacciSequences = [
    '1,1,2',
    '2,3,5,8,13',
    '55',
    '0,1,1,2,3,5,8,13,21,34,55,89,144,233,377',
    '144,233,377'
];

export const invalidFibonacciSequences = [
    '1,2,3,7',
    '2,5,8,13',
    '2,144,233,377',
    '0,1,2',
    '3,3'
];

export const validInputs = [
    ...validFibonacciSequences,
    '0',
    '1,2',
    '0,1,2,345,92045'
];

export const invalidInputs = [
    '   ',
    ',',
    '...,1',
    '   1,2',
    '#0,1,2',
    '2,3.,4',
    '2,3,',
    '-2,3',
    'letters,test,1,2'
];

export const perfectSquares = [
    0,
    1,
    9
];