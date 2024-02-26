'use client';

import { toBRL } from '@/shared/utils';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Nav,
} from '@shared/components';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export function MyPurchasesList(): JSX.Element {
	const params = useParams<{ businessID: string }>();
	const businessID = params.businessID;

	const generateArrayOfRandomNumbers = (qtd: number) => {
		const numbers = [];

		for (let i = 0; i < qtd; i++) {
			numbers.push(Math.floor(Math.random() * 1000001)); // Gera números aleatórios entre 0 e 1000000
		}

		return numbers;
	};

	const raffleShares = Array.from({ length: 10 }, (_, index) => ({
		id: index + 1,
		name: 'Show de Prêmios',
		price: 123,
		purchaseDate: '11/10/2023',
		drawDate: '11/10/2023',
		status: 'Aguardando Sorteio',
		winner: null,
		shares: generateArrayOfRandomNumbers(10),
	}));

	return (
		<div className="flex w-full flex-col items-center">
			<Accordion type="single" collapsible className="w-full rounded">
				{raffleShares.map((raffle) => (
					<AccordionItem
						key={raffle.id}
						value={raffle.id.toString()}
						className="w-full border px-2 py-1 shadow"
					>
						<AccordionTrigger className="truncate">
							<Link
								href={`/root/${businessID}/${raffle.id}`}
								className="truncate px-2 font-semibold uppercase text-primary hover:underline"
							>
								{raffle.name}
							</Link>

							<ChevronDownIcon className="shrink-0 transition-transform duration-200" />
						</AccordionTrigger>

						<AccordionContent className="border-t shadow">
							<div className="flex flex-col flex-wrap justify-between gap-2 border-b px-2 py-4 sm:flex-row sm:items-center">
								<span className="flex items-center gap-1">
									<label className="whitespace-nowrap font-semibold uppercase text-primary">
										Status:
									</label>
									<p className="whitespace-nowrap">{raffle.status}</p>
								</span>

								<span className="flex items-center gap-1">
									<label className="whitespace-nowrap font-semibold uppercase text-primary">
										Data da Compra:
									</label>
									<p className="whitespace-nowrap">{raffle.purchaseDate}</p>
								</span>

								<span className="flex items-center gap-1">
									<label className="whitespace-nowrap font-semibold uppercase text-primary">
										Data do Sorteio:
									</label>
									<p className="whitespace-nowrap">{raffle.drawDate}</p>
								</span>

								<span className="flex items-center gap-1">
									<label className="whitespace-nowrap font-semibold uppercase text-primary">
										Valor Pago:
									</label>
									<p className="whitespace-nowrap">{toBRL(raffle.price)}</p>
								</span>

								<span className="flex items-center gap-1">
									<label className="whitespace-nowrap font-semibold uppercase text-primary">
										Ganhador:
									</label>
									<p className="whitespace-nowrap">{raffle.winner || '--'}</p>
								</span>
							</div>

							<div className="mt-2 flex max-h-52 flex-wrap gap-2 overflow-y-auto overscroll-contain px-4 py-2">
								{raffle.shares.map((share, index) => (
									<span
										key={index}
										className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-foreground"
									>
										{share}
									</span>
								))}
							</div>
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>

			<Nav
				totalPages={10}
				actualPage={10}
				url={`/root/${businessID}/minhas-compras`}
			/>
		</div>
	);
}
