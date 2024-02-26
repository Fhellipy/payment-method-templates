import { BannersCarousel, ListQuotaCardsByCompany } from '@modules/business';
import { BANNERS, RAFFLES } from '@shared/mock';

type Params = {
	params: { businessID: string };
};

export default function BusinessPage({ params }: Params): JSX.Element {
	const businessID = params.businessID;

	return (
		<main className="flex flex-col items-center gap-4 px-2 py-4 sm:px-6 lg:px-8">
			<BannersCarousel banners={BANNERS} />

			<ListQuotaCardsByCompany items={RAFFLES} businessID={businessID} />
		</main>
	);
}
