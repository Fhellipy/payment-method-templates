import { onlyNumberRegex } from '@/lib';
import { type FormEvent } from 'react';

export function maskPhone(onChange: FormEvent<HTMLInputElement>) {
	onChange.currentTarget.maxLength = 15;

	let { value } = onChange.currentTarget;

	value = value.replace(onlyNumberRegex, '');

	if (value.length === 10) {
		value = value.replace(/(\d{2})(\d{4})(\d{4})/g, '$1 $2-$3');
	} else if (value.length === 11) {
		value = value.replace(/(\d{2})(\d{5})(\d{4})/g, '$1 $2-$3');
	} else if (value.length === 13) {
		value = value.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/g, '$1 $2 $3-$4');
	}

	onChange.currentTarget.value = value;

	return onChange;
}

export function formatPhone(phone?: string) {
	if (typeof phone !== 'string') return 'Não informado';

	if (phone.length > 13) {
		return;
	}

	if (phone.length === 10) {
		phone = phone.replace(/(\d{2})(\d{4})(\d{4})/g, '$1 $2-$3');
	} else if (phone.length === 11) {
		phone = phone.replace(/(\d{2})(\d{5})(\d{4})/g, '$1 $2-$3');
	} else {
		const phoneRegex = /(\d{2})(\d{2})(\d{5})(\d{4})/;
		phone = phone.replace(phoneRegex, '(+$1) $2 $3-$4');
	}

	return phone;
}
