import { ListPayments, OrderSummary } from '@modules/payment';

export default function PaymentPage(): JSX.Element {
	return (
		<main className="mx-auto flex min-h-[51rem] w-full max-w-[90rem] flex-col items-center gap-4 px-2 py-4 sm:px-6 lg:px-10">
			<div className="flex w-full flex-col gap-4 sm:flex-row">
				<ListPayments />

				<OrderSummary value={25} qtd={100} />
			</div>
		</main>
	);
}
