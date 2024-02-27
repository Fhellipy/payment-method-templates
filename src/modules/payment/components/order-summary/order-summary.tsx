'use client';

import { useSelectPaymentMethodStore } from '@modules/payment';
import { toBRL } from '@shared/utils';

type OrderSummaryProps = {
	value: number;
	qtd: number;
};

export function OrderSummary(props: OrderSummaryProps) {
	const { value, qtd } = props;

	return (
		<div className="flex w-full flex-col justify-between rounded border sm:w-2/4">
			<h2 className="border-b p-2 font-semibold">Resumo do pedido</h2>

			<div className="px-3 py-2">
				<p className="flex w-full flex-wrap items-center justify-between gap-1 whitespace-normal text-justify">
					<strong>Quantidade:</strong>
					<span className="whitespace-nowrap text-sm">{qtd} rifa(s)</span>
				</p>

				<p className="flex w-full flex-wrap items-center justify-between gap-1 whitespace-normal text-justify">
					<strong>Total:</strong>
					<TotalValue value={value} />
				</p>
			</div>
		</div>
	);
}

function TotalValue({ value }: { value: number }) {
	const paymentMethod = useSelectPaymentMethodStore((state) => state.method);

	if (paymentMethod === 'pix') {
		return (
			<span className="whitespace-nowrap text-sm">
				{toBRL(value)} à vista no Pix
			</span>
		);
	}

	if (paymentMethod === 'creditCard') {
		return (
			<span className="whitespace-nowrap text-sm">
				1x de {toBRL(value)} no cartão de crédito
			</span>
		);
	}

	return (
		<span className="whitespace-nowrap text-sm">
			{toBRL(value)} no boleto bancário
		</span>
	);
}
