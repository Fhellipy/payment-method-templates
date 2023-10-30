import { Cards } from '@/components/ui';

const raffles = [
	{
		id: 1,
		name: 'Show de prêmios 2023',
		date: '10/11/2023',
		price: 0.25,
		img: 'https://rastreketec.com.br/wp-content/uploads/2021/09/f0e083d3d680bb95dbf8d68f4bcea8ed042960bcf1a1e78e7bf729772ea1c9c3.png',
	},
	{
		id: 2,
		name: 'Show de prêmios 2023',
		date: '10/11/2023',
		price: 0.25,
		img: 'https://rastreketec.com.br/wp-content/uploads/2021/09/f0e083d3d680bb95dbf8d68f4bcea8ed042960bcf1a1e78e7bf729772ea1c9c3.png',
	},
	{
		id: 3,
		name: 'Show de prêmios 2023',
		date: '10/11/2023',
		price: 0.25,
		img: 'https://rastreketec.com.br/wp-content/uploads/2021/09/f0e083d3d680bb95dbf8d68f4bcea8ed042960bcf1a1e78e7bf729772ea1c9c3.png',
	},
	{
		id: 4,
		name: 'Show de prêmios 2023',
		date: '10/11/2023',
		price: 0.25,
		img: 'https://rastreketec.com.br/wp-content/uploads/2021/09/f0e083d3d680bb95dbf8d68f4bcea8ed042960bcf1a1e78e7bf729772ea1c9c3.png',
	},
	{
		id: 5,
		name: 'Show de prêmios 2023',
		date: '10/11/2023',
		price: 0.25,
		img: 'https://rastreketec.com.br/wp-content/uploads/2021/09/f0e083d3d680bb95dbf8d68f4bcea8ed042960bcf1a1e78e7bf729772ea1c9c3.png',
	},
	{
		id: 6,
		name: 'Show de prêmios 2023',
		date: '10/11/2023',
		price: 0.25,
		img: 'https://rastreketec.com.br/wp-content/uploads/2021/09/f0e083d3d680bb95dbf8d68f4bcea8ed042960bcf1a1e78e7bf729772ea1c9c3.png',
	},
];

export default function Home(): JSX.Element {
	return (
		<div className="flex h-fit w-fit max-w-[85rem] flex-col items-center gap-4 rounded-xl border bg-secondary p-6 sm:w-full">
			<Cards items={raffles} />

			<div id="scrollspy">
				<div id="winners">Ganhadores</div>
				<div id="sweepstakes">Sorteios</div>
			</div>
		</div>
	);
}
