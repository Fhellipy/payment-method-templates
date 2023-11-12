type CardImageProps = {
	title: string;
	location: string;
	date: string;
	img: {
		url: string;
		alt: string;
	};
};

export function CardImage(props: CardImageProps): JSX.Element {
	const { title, location, date, img } = props;
	const newDate = new Date(date).toLocaleDateString();

	return (
		<section className="w-full border-b bg-background pb-2 shadow">
			<img
				src={img.url}
				alt={img.alt}
				className="max-h-[35rem] min-h-[20rem] w-full rounded border bg-primary object-scale-down"
			/>

			<div className="mt-2 flex flex-col items-center justify-between px-4 py-2 sm:flex-row">
				<h2 className="text-2xl font-bold text-foreground">{title}</h2>

				<span className="mt-2 sm:mt-0">
					<p className="text-base">
						<strong className=" text-gray-500">Sorteio:</strong> {newDate}
					</p>
					<p className="text-md text-foreground">{location}</p>
				</span>
			</div>
		</section>
	);
}
