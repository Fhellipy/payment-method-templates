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
		<div className="flex w-full flex-col items-center gap-4">
			<Header />

			<h1>Home</h1>

			<nav className="flex gap-4 rounded border bg-background p-2 text-foreground">
				<Link href="/root/1">Tema 1</Link>
				<Link href="/root/2">Tema 2</Link>
				<Link href="/root/3">Tema 3</Link>
			</nav>
		</div>
	);
}
