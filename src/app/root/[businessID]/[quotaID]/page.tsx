import {
	AdditionalInformation,
	CardImage,
	Description,
	SelectQuantityQuota,
} from '@modules/quota';
import { QUOTA } from '@shared/mock';

type Params = {
	params: { quotaID: string };
};

export default function QuotaPage({ params }: Params): JSX.Element {
	console.log(params);

	return (
		<main className="flex flex-col items-center gap-4 px-2 py-4 sm:px-6 lg:px-8">
			<article className="flex w-full max-w-[85rem] flex-col gap-4">
				<CardImage
					title={QUOTA.title}
					location={QUOTA.location}
					date={QUOTA.date}
					img={QUOTA.img}
				/>

				<Description description={QUOTA.description} />

				<SelectQuantityQuota />

				<div className="rounded border p-4 text-center font-bold text-primary shadow">
					<h2>A venda dessa cota acabou! Aguardando sorteio.</h2>
				</div>

				<AdditionalInformation />
			</article>
		</main>
	);
}
