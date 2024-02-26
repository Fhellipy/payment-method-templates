import { RAFFLES } from '@/shared/mock';
import { QuotaCardList } from '@modules/home';

export default function Home(): JSX.Element {
	return (
		<main className="mx-auto max-w-[85rem] sm:px-6 lg:px-8">
			<QuotaCardList items={RAFFLES} />
		</main>
	);
}
