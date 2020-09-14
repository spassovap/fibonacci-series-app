import { convertToNumber } from "./commonUtils";
import { extractValues } from "./inputUtils";

export const isPerfectSquare = number => number != null && Math.sqrt(number) % 1 === 0;

const isFibonacciNumber = number =>
    isPerfectSquare(5 * number * number + 4) || isPerfectSquare(5 * number * number - 4);


export const isValidFibonacciSequence = inputValue => {
    let valid = true;

    const numbers = convertToNumber(extractValues(inputValue));

    for (let index = 0; index < numbers.length; index++) {
        const previousNumber = numbers[index - 1];
        const currentNumber = numbers[index];

        if (index === 0) {
            valid = isFibonacciNumber(currentNumber);
        } else if (index === 1) {
            const nextNumberIsFibonacci = isFibonacciNumber(previousNumber + currentNumber);
            const isSecondNumberInFibonacciSequence = previousNumber === currentNumber && nextNumberIsFibonacci;

            valid = isFibonacciNumber(currentNumber) &&
                (
                    previousNumber < currentNumber ||
                    isSecondNumberInFibonacciSequence
                ) &&
                (
                    previousNumber === 0 ||
                    currentNumber - previousNumber < previousNumber
                )
        } else {
            valid = numbers[index - 2] + previousNumber === currentNumber;
        }

        if (!valid) {
            break;
        }
    }

    return valid;
};