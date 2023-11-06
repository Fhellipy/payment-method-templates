import { raffles } from '@/mock/raffles';
import { Cards, ImageCarousel } from './components';

interface Params {
	params: { businessID: string };
}

export default function BusinessPage({ params }: Params): JSX.Element {
	console.log(params);

	return (
		<main className="flex flex-col items-center gap-4 px-2 py-4 sm:px-6 lg:px-8">
			<ImageCarousel />

			<Cards items={raffles} />
		</main>
	);
}
