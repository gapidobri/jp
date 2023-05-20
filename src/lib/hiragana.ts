export const letters = [
	'a',
	'ka',
	'sa',
	'ta',
	'na',
	'ha',
	'ma',
	'ya',
	'i',
	'ki',
	'shi',
	'chi',
	'ni',
	'hi',
	'mi',
	'ri',
	'u',
	'ku',
	'su',
	'tsu',
	'nu',
	'hu-fu',
	'mu',
	'ru',
	'yu',
	'e',
	'ke',
	'se',
	'te',
	'ne',
	'he',
	'me',
	're',
	'o',
	'ko',
	'so',
	'to',
	'no',
	'ho',
	'mo',
	'ro',
	'yo',
	'wa',
	'wo',
	'n',
];

export function getLetter(letter: string): string {
	return new URL(`./assets/hiragana/letters/${letter}.png`, import.meta.url).href;
}

export function getAnswer(letter: string): string {
	return new URL(`./assets/hiragana/answers/${letter}.png`, import.meta.url).href;
}

export function check(letter: string, answer: string): boolean {
	for (const l of letter.split('-')) {
		if (l === answer) return true;
	}
	return false;
}
