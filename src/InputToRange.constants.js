// Matches: 100
// On reading this data: no need for splitting
export const patten1 = RegExp(/^[0-9]+$/);

// Matches: 1-100
// On reading this data: split after '-'
export const patten2 = RegExp(/^[0-9]+[-][0-9]+$/);

// Matches: (-10)
// On reading this data: no need for splitting
export const patten3 = RegExp(/^(\(-)[0-9]+(\))$/);

// Matches: (-10)-200
// On reading this data: split after ')-'
export const patten4 = RegExp(/^(\(-)[0-9]+(\))[-][0-9]+$/);

// Matches: (-10)-(-3)
// On reading this data: split after ')-('
export const patten5 = RegExp(/^(\(-)[0-9]+(\))[-](\(-)[0-9]+(\))$/);

// Matches: 10-(-200)
// On reading this data: split after ')-'
export const patten6 = RegExp(/^[0-9]+[-](\(-)[0-9]+(\))$/);

// all of the above combined so we can validate the input
export const finalPattern = /^[0-9]+$|^[0-9]+[-][0-9]+$|^(\(-)[0-9]+(\))[-][0-9]+$|^(\(-)[0-9]+(\))$|^(\(-)[0-9]+(\))[-](\(-)[0-9]+(\))$|^[0-9]+[-](\(-)[0-9]+(\))$/;

// keys that trigger input validation
export const defaultKeys = [32, 13];

// error message that is displayed if the provided data is incorrect
export const errorMessage =
	'Incorrect pattern, follow: 100, -100, (-100), 50-100, (-100)-100, 100-(-100), (-100)-(-50)';
