'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import {
	creditCardSchema,
	maskCardExpiration,
	maskCreditCardHolder,
	maskCreditCardNumber,
	maskCreditCardSecurityCode,
	type CreditCardFormValues,
} from '@modules/payment';
import { Button, Form, InputForm } from '@shared/components';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { AcceptedCards } from './accepted-cards';

export function CreditCardTemplate() {
	const form = useForm<CreditCardFormValues>({
		resolver: zodResolver(creditCardSchema),
	});

	const onSubmit: SubmitHandler<CreditCardFormValues> = (data) => {
		console.log(data);

		alert('Pedido finalizado com sucesso!');
	};

	return (
		<div>
			<Form {...form}>
				<form
					method="POST"
					onSubmit={form.handleSubmit(onSubmit)}
					className="flex flex-col gap-3 p-2"
				>
					<InputForm
						name="cardNumber"
						label="Número do cartão"
						placeholder="0000 0000 0000 0000"
						control={form.control}
						onChange={maskCreditCardNumber}
						uppercase
						min={16}
						max={23}
					/>

					<InputForm
						name="holderName"
						label="Nome do titular"
						placeholder="Digite o nome como está no cartão..."
						control={form.control}
						onChange={maskCreditCardHolder}
						uppercase
					/>

					<div className="flex flex-col gap-2 sm:flex-row">
						<InputForm
							name="cardExpiration"
							label="Data de expiração"
							placeholder="MM/AA"
							autoComplete="off"
							control={form.control}
							onChange={maskCardExpiration}
							uppercase
							max={5}
						/>

						<InputForm
							name="cardSecurityCode"
							label="CVV"
							placeholder="123"
							autoComplete="off"
							control={form.control}
							onChange={maskCreditCardSecurityCode}
							isInputPassword
							uppercase
							min={3}
						/>
					</div>

					<Button
						className="bg-black text-white hover:bg-black/85"
						type="submit"
					>
						Finalizar Compra
					</Button>
				</form>
			</Form>

			<AcceptedCards />
		</div>
	);
}
