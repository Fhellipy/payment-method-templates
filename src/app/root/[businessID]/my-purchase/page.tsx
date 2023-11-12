import { Loading } from '@/components';
import { toBRL } from '@/utils';
import { ChevronDownIcon } from 'lucide-react';
import { Table } from './components';

interface Params {
	params: { businessID: string };
}

export default function MyPurchasePage({ params }: Params): JSX.Element {
	const businessID = params.businessID;

	console.log(businessID);

	const myPurchases = [
		{
			raffle: 'Show de Prêmios',
			date: '11/10/2023',
			price: 25,
		},
		{
			raffle: 'Show de Prêmios',
			date: '11/10/2023',
			price: 25,
		},
	];

	return (
		<main className="flex min-h-screen flex-col items-center gap-4 px-2 py-4 sm:px-6 lg:px-8">
			<article className="flex w-full max-w-[85rem] flex-col gap-4">
				<h1 className="mt-2 text-center text-2xl uppercase">Minhas Compras</h1>

				<section className="mt-1 flex w-full flex-col gap-2 border-t py-4">
					{myPurchases.map((purchase, index) => (
						<details className="group rounded border p-4" key={index}>
							<summary className="flex cursor-pointer flex-col flex-wrap justify-between font-bold text-gray-500 group-open:mb-2 group-open:border-b group-open:pb-4 sm:flex-row">
								<span className="flex items-center justify-center gap-1 text-center">
									<ChevronDownIcon
										size={22}
										className="flex-shrink-0 transition-all duration-300 group-open:rotate-180"
									/>
									{purchase.raffle} - {purchase.date}
								</span>

								<span className="ml-6 flex items-center justify-center">
									{toBRL(purchase.price)}
								</span>
							</summary>

							<Loading size="sm" className="min-h-fit rounded p-2" />

							<Table />
						</details>
					))}
				</section>
			</article>
		</main>
	);
}
