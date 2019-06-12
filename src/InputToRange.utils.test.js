import {
	splitTextBasedOnPattern,
	generateRangeBetweenTwoNumber,
	createRangeFromInputValue,
	createMultipleRangesFromArrayOfValues
} from './InputToRange.utils.js';

it('cheks if splitTextBasedOnPattern() returns ok', () => {
	const numbersPattern1 = splitTextBasedOnPattern('123');

	expect(numbersPattern1.first).toEqual(123);
	expect(numbersPattern1.second).toEqual(123);

	const numbersPattern3 = splitTextBasedOnPattern('(-123)');

	expect(numbersPattern3.first).toEqual(-123);
	expect(numbersPattern3.second).toEqual(-123);

	const numbersPattern2 = splitTextBasedOnPattern('1-100');

	expect(numbersPattern2.first).toEqual(1);
	expect(numbersPattern2.second).toEqual(100);

	const numbersPattern4 = splitTextBasedOnPattern('(-10)-200');

	expect(numbersPattern4.first).toEqual(-10);
	expect(numbersPattern4.second).toEqual(200);

	const numbersPattern5 = splitTextBasedOnPattern('(-10)-(-3)');

	expect(numbersPattern5.first).toEqual(-10);
	expect(numbersPattern5.second).toEqual(-3);

	const numbersPattern6 = splitTextBasedOnPattern('10-(-3)');

	expect(numbersPattern6.first).toEqual(10);
	expect(numbersPattern6.second).toEqual(-3);
});

it('cheks if splitTextBasedOnPattern() returns false when provided value is invalid', () => {
	const check1 = splitTextBasedOnPattern('123.00');
	expect(check1).toBeFalsy();

	const check2 = splitTextBasedOnPattern('abc');
	expect(check2).toBeFalsy();

	const check3 = splitTextBasedOnPattern('-100-50');
	expect(check3).toBeFalsy();

	const check4 = splitTextBasedOnPattern('(-100)--50');
	expect(check4).toBeFalsy();
});

it('cheks if generateRangeBetweenTwoNumber() returns ok', () => {
	const { first, second } = splitTextBasedOnPattern('(-50)-50');
	const generateRange = generateRangeBetweenTwoNumber(first, second);

	expect(generateRange[0]).toEqual(-50);
	expect(generateRange[generateRange.length - 1]).toEqual(50);
});

it('cheks if createRangeFromInputValue() returns ok', () => {
	const generateRange = createRangeFromInputValue('(-50)-50');

	expect(generateRange[0]).toEqual(-50);
	expect(generateRange[generateRange.length - 1]).toEqual(50);
});

it('cheks if createMultipleRangesFromArrayOfValues() returns ok', () => {
	const generateRange = createMultipleRangesFromArrayOfValues([
		'(-50)-50',
		'10-30',
		'0-2'
	]);

	expect(generateRange[0][0]).toEqual(-50);
	expect(generateRange[0][generateRange[0].length - 1]).toEqual(50);

	expect(generateRange[1][0]).toEqual(10);
	expect(generateRange[1][generateRange[1].length - 1]).toEqual(30);

	expect(generateRange[2][0]).toEqual(0);
	expect(generateRange[2][generateRange[2].length - 1]).toEqual(2);
});
