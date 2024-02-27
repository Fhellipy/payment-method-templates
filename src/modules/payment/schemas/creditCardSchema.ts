import { creditCardFormatValidateLuhn } from '@modules/payment';
import { onlyNumberRegex } from '@shared/lib';
import { z } from 'zod';

export const creditCardSchema = z.object({
	cardNumber: z
		.string({
			required_error: 'Número do cartão é obrigatório',
		})
		.refine((value) => value.length > 0, {
			message: 'Número do cartão é obrigatório',
		})
		.refine(
			(value) => {
				const number = value.replace(onlyNumberRegex, '');

				if (number.length < 13 || number.length > 19) return false;

				if (!creditCardFormatValidateLuhn(number)) return false;

				return true;
			},
			{
				message: 'Número do cartão inválido',
			},
		),
	holderName: z
		.string({
			required_error: 'Nome do titular é obrigatório',
		})
		.refine((value) => value.length > 0, {
			message: 'Nome do titular é obrigatório',
		})
		.refine((value) => value.split(' ').filter((v) => v).length >= 2, {
			message: 'Nome do titular inválido',
		}),
	cardExpiration: z
		.string({
			required_error: 'Data de expiração é obrigatória',
		})
		.refine((value) => value.length > 0, {
			message: 'Data de expiração é obrigatória',
		})
		.refine((value) => value.length === 5, {
			message: 'Data de expiração inválida',
		})
		.refine(
			(value) => {
				if (!value.includes('/')) return false;

				const [month, year] = value.split('/');

				if (month.length !== 2 || year.length !== 2) {
					return false;
				}

				if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
					return false;
				}

				const expirationDate = new Date(`20${year}-${month}-01`);

				if (expirationDate < new Date()) return false;

				return true;
			},
			{
				message: 'Data de expiração inválida',
			},
		),

	cardSecurityCode: z
		.string({
			required_error: 'O código de segurança é obrigatório',
		})
		.refine((value) => value.length > 0, {
			message: 'O código de segurança é obrigatório',
		}),
});

export type CreditCardFormValues = z.infer<typeof creditCardSchema>;
