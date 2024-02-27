import { onlyNumberRegex, onlyWordsRegex } from '@shared/lib';

/**
 * Função que verifica se um número de cartão de crédito é válido
 * @param str
 * @returns
 */
export function creditCardFormatValidateLuhn(str: string) {
	const numberString = str.replace(/\D/g, '');

	if (typeof numberString !== 'string') {
		throw new TypeError('Expected string input');
	}

	if (!numberString) return false;

	const lookupTable = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

	let bit = 1;

	let sum = 0;

	const numbers = numberString.split('').map((number) => parseInt(number, 10));

	numbers.reverse().forEach((value) => {
		bit ^= 1;
		sum += bit ? lookupTable[value] : value;
	});

	return sum % 10 === 0;
}

export function maskCreditCardNumber(
	event: React.ChangeEvent<HTMLInputElement>,
) {
	event.currentTarget.maxLength = 23;

	let { value } = event.currentTarget;

	value = value.replace(onlyNumberRegex, '');

	value = value.split('').reduce((acc, char, index) => {
		if (index % 4 === 0 && index !== 0) {
			acc += ' ';
		}

		acc += char;

		return acc;
	}, '');

	event.currentTarget.value = value;

	return event;
}

export function maskCreditCardHolder(
	event: React.ChangeEvent<HTMLInputElement>,
) {
	event.currentTarget.maxLength = 50;

	let { value } = event.currentTarget;

	// Remove os números e caracteres especiais
	value = value.replace(onlyWordsRegex, '');

	// Remove os acentos
	value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

	event.currentTarget.value = value;

	return event;
}

export function maskCardExpiration(event: React.ChangeEvent<HTMLInputElement>) {
	event.currentTarget.maxLength = 5;

	let { value } = event.currentTarget;

	value = value.replace(onlyNumberRegex, '');

	if (value.length > 1) {
		value = value.replace(/^(\d{2})(\d)/, '$1/$2');
	}

	event.currentTarget.value = value;

	return event;
}

export function maskCreditCardSecurityCode(
	event: React.ChangeEvent<HTMLInputElement>,
) {
	event.currentTarget.maxLength = 6;

	let { value } = event.currentTarget;
	value = value.replace(onlyNumberRegex, '');

	if (value.length > 6) {
		value = value.slice(0, 6);
	}

	event.currentTarget.value = value;

	return event;
}
