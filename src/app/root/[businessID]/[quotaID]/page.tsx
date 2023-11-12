import {
	AdditionalInformation,
	CardImage,
	Description,
	SelectQuantityQuota,
} from './components';

interface Params {
	params: { quotaID: string };
}

const quotaMock = {
	title: 'Show de Prêmios',
	date: '2023/10/11',
	description:
		'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
	location: 'Loteria Federal 🍀',
	img: {
		url: 'https://rastreketec.com.br/wp-content/uploads/2021/09/f0e083d3d680bb95dbf8d68f4bcea8ed042960bcf1a1e78e7bf729772ea1c9c3.png',
		alt: 'Show de Prêmios',
	},
};

export default function QuotaPage({ params }: Params): JSX.Element {
	console.log(params);

	return (
		<main className="flex flex-col items-center gap-4 px-2 py-4 sm:px-6 lg:px-8">
			<article className="flex w-full max-w-[85rem] flex-col gap-4">
				<CardImage
					title={quotaMock.title}
					location={quotaMock.location}
					date={quotaMock.date}
					img={quotaMock.img}
				/>

				<Description description={quotaMock.description} />

				<SelectQuantityQuota />

				<div className="rounded border p-4 text-center font-bold text-primary shadow">
					<h2>A venda dessa cota acabou! Aguardando sorteio.</h2>
				</div>

				<AdditionalInformation />
			</article>
		</main>
	);
}
