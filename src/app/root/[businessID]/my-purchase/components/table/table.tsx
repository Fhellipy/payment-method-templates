'use client';

import Link from 'next/link';

export function Table(): JSX.Element {
	const raffleShares = [
		{
			number: 123,
			purchaseDate: '11/10/2023',
			drawDate: '11/10/2023',
			status: 'Aguardando Sorteio',
			winner: null,
		},
		{
			number: 123,
			purchaseDate: '11/10/2023',
			drawDate: '11/10/2023',
			status: 'Concluído',
			winner: 'João',
		},
		{
			number: 123,
			purchaseDate: '11/10/2023',
			drawDate: '11/10/2023',
			status: 'Concluído',
			winner: 'João',
		},
	];

	return (
		<table className="w-full table-fixed border-collapse border-none border-gray-300 sm:border">
			<caption className="m-2 text-xl font-bold">Cotas Compradas</caption>
			<caption className="mb-2 text-sm font-bold">
				<Link href="" className="text-primary">
					Ver Detalhes da Rifa
				</Link>
			</caption>

			<thead className="absolute h-1 w-1 overflow-hidden border-none bg-gray-200 text-sm uppercase tracking-wider sm:relative sm:h-auto sm:w-fit">
				<tr>
					<th
						scope="col"
						className="border border-gray-300 p-2 text-center uppercase"
					>
						Número
					</th>
					<th
						scope="col"
						className="border border-gray-300 p-2 text-center uppercase"
					>
						Data da Compra
					</th>
					<th
						scope="col"
						className="border border-gray-300 p-2 text-center uppercase"
					>
						Data do Sorteio
					</th>
					<th
						scope="col"
						className="border border-gray-300 p-2 text-center uppercase"
					>
						Status
					</th>
					<th
						scope="col"
						className="border border-gray-300 p-2 text-center uppercase"
					>
						Ganhador
					</th>
				</tr>
			</thead>

			<tbody className="text-sm sm:bg-gray-50">
				{raffleShares.map((share, index) => (
					<tr
						key={index}
						className="mb-4 flex flex-col rounded border bg-gray-50 sm:mb-0 sm:table-row sm:flex-row sm:border-none sm:bg-transparent"
					>
						<td
							data-label="Número"
							className="block border-b border-gray-300 p-2 text-right before:float-left before:font-bold before:content-[attr(data-label)] sm:table-cell sm:border sm:text-center sm:before:content-none"
						>
							{share.number}
						</td>

						<td
							data-label="Data da Compra"
							className="block border-b border-gray-300 p-2 text-right before:float-left before:font-bold before:content-[attr(data-label)] sm:table-cell sm:border sm:text-center sm:before:content-none"
						>
							{share.purchaseDate}
						</td>

						<td
							data-label="Data do Sorteio"
							className="block border-b border-gray-300 p-2 text-right before:float-left before:font-bold before:content-[attr(data-label)] sm:table-cell sm:border sm:text-center sm:before:content-none"
						>
							{share.drawDate}
						</td>

						<td
							data-label="Status"
							className="block border-b border-gray-300 p-2 text-right before:float-left before:font-bold before:content-[attr(data-label)] sm:table-cell sm:border sm:text-center sm:before:content-none"
						>
							{share.status}
						</td>

						<td
							data-label="Ganhador"
							className="block border-b border-gray-300 p-2 text-right before:float-left before:font-bold before:content-[attr(data-label)] sm:table-cell sm:border sm:text-center sm:before:content-none"
						>
							{share.winner || '--'}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
