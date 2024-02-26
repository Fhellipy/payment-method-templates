import { MyPurchasesList } from '@modules/my-purchase';

export default function MyPurchasesPage(): JSX.Element {
	return (
		<main className="flex min-h-screen flex-col items-center gap-4 px-2 py-4 sm:px-6 lg:px-8">
			<article className="flex w-full max-w-[85rem] flex-col gap-4">
				<h1 className="mt-2 text-center text-2xl uppercase">Minhas Compras</h1>

				<MyPurchasesList />
			</article>
		</main>
	);
}
