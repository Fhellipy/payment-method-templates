import { raffles } from '@/mock/raffles';
import { Cards } from './components';

export default function Home(): JSX.Element {
	return (
		<main className="mx-auto max-w-[85rem] sm:px-6 lg:px-8">
			<Cards items={raffles} />

			<div id="scrollspy" className="p-2 sm:px-6 lg:px-8">
				<div id="winners">Ganhadores</div>
				<div id="sweepstakes">Sorteios</div>
			</div>
		</main>
	);
}
