import { ListPayments } from '@modules/payment';

export default function HomePage(): JSX.Element {
	return (
		<main className="mx-auto flex min-h-[51rem] w-full max-w-[90rem] flex-col items-center gap-4 px-2 py-4 sm:px-6 lg:px-10">
			<ListPayments />
		</main>
	);
}
