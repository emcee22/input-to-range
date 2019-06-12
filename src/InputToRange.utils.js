import {
	patten1,
	patten2,
	patten3,
	patten4,
	patten5,
	patten6
} from './InputToRange.constants.js';

export const splitTextBasedOnPattern = text => {
	let inputItems;

	// check thpe of input so we can update the multiple range
	if (patten1.test(text) || patten3.test(text)) {
		inputItems = [text, text];
	} else if (patten2.test(text)) {
		inputItems = text.split('-');
	} else if (patten4.test(text)) {
		inputItems = text.split(')-');
	} else if (patten5.test(text)) {
		inputItems = text.split(')-(');
	} else if (patten6.test(text)) {
		inputItems = text.split('-(');
	} else {
		return false;
	}
	const first = Number.parseInt(
		inputItems[0].replace('(', '').replace(')', '')
	);
	const second = Number.parseInt(
		inputItems[1].replace('(', '').replace(')', '')
	);
	return { first, second };
};

export const generateRangeBetweenTwoNumber = (first, second) => {
	// difference between the numbers
	const difference = Math.abs(first - second);
	return new Array(difference + 1).fill(undefined).map((val, index) => {
		if (first < second) {
			return first + index;
		}
		return first - index;
	});
};

// generate an array of number based upon the inputState and the pattern used
export const createRangeFromInputValue = inputState => {
	const { first, second } = splitTextBasedOnPattern(inputState);

	// generate range array
	return generateRangeBetweenTwoNumber(first, second);
};

export const createMultipleRangesFromArrayOfValues = texts => {
	let rangeArrays = [];
	texts.forEach(value => {
		const newRange = createRangeFromInputValue(value.toString());
		rangeArrays = [...rangeArrays, newRange];
	});
	return rangeArrays;
};
