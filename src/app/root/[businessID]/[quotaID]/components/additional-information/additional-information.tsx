import { CircleDollarSignIcon, TrophyIcon, UserIcon } from 'lucide-react';

export function AdditionalInformation() {
	const buyers = [
		{
			name: 'Fhellipy Conceição',
			raffle: '#Cota50',
			position: 1,
		},
		{
			name: 'Pierre Torres',
			raffle: '#Cota51',
			position: 2,
		},
		{
			name: 'Matheus Guilherme',
			raffle: '#Cota52',
			position: 3,
		},
	];

	const winner = {
		name: 'Fhellipy Conceição',
		raffle: '#Cota50',
	};

	return (
		<div className="flex w-full justify-center gap-2 border p-4 shadow">
			<div className="flex w-full max-w-[40rem] flex-col gap-2 p-2">
				<span className="flex items-center gap-2 font-semibold text-gray-500">
					<CircleDollarSignIcon size={20} className="flex-shrink-0 " />

					<p>Top 3 Compradores</p>
				</span>

				<div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
					{buyers.map((buyer, index) => (
						<div
							key={index}
							className="flex w-full items-center justify-between rounded border bg-primary p-2 text-primary-foreground"
						>
							<p className="text-xl font-bold">{buyer.position}°</p>

							<span className="ml-2 flex w-full flex-wrap items-center justify-between gap-0.5 px-1 sm:flex-col sm:items-start sm:gap-0">
								<p className="truncate font-bold sm:w-32">{buyer.name}</p>
								<p className="text-sm">{buyer.raffle}</p>
							</span>
						</div>
					))}
				</div>

				<span className="mt-4 flex items-center gap-2 font-semibold text-gray-500">
					<TrophyIcon size={20} className="flex-shrink-0 " />

					<p>Ganhador</p>
				</span>

				<div className="flex w-full flex-wrap items-center justify-between rounded border bg-primary p-2 text-primary-foreground">
					<span className="flex gap-2 font-bold">
						<p className="text-xl">
							<UserIcon />
						</p>

						<p>{winner.name}</p>
					</span>

					<p className="pl-8 text-sm">{winner.raffle}</p>
				</div>
			</div>
		</div>
	);
}
