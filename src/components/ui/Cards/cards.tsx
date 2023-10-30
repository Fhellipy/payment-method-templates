import Link from 'next/link';

type CardType = {
	id: number;
	img: string;
	name: string;
	date: string;
};

type CardProps = {
	items: CardType[];
};

export function Cards({ items }: CardProps): JSX.Element {
	const firstItem = items[0];
	const otherItems = items.slice(1);

	return (
		<div className="flex h-fit w-full flex-col items-center gap-4">
			<Link href={`/root/${firstItem.id}`}>
				<div
					key={firstItem.id}
					className="flex-col rounded-xl border bg-background shadow-sm"
				>
					<img
						src={firstItem.img}
						className="flex h-60 min-w-[300px] flex-shrink-0 flex-col items-center justify-center rounded-t-xl bg-primary"
					/>

					<div className="p-4 md:p-6">
						<h3 className="text-xl font-semibold uppercase text-foreground">
							{firstItem.name}
						</h3>

						<span className="mb-1 block text-xs font-semibold uppercase text-primary">
							{firstItem.date}
						</span>

						<p className="mt-3 text-gray-500">Participe por apenas R$ </p>
					</div>
				</div>
			</Link>

			{otherItems.map((item) => (
				<Link
					key={item.id}
					className="group flex w-full min-w-[300px] max-w-[36.5rem] flex-col rounded-xl border bg-background shadow-sm transition hover:shadow-md"
					href={`/root/${item.id}`}
				>
					<div className="flex p-4 md:p-5">
						<img
							src={item.img}
							className="flex min-h-[100px] max-w-[100px] flex-shrink-0 flex-col items-center justify-center rounded-xl bg-primary"
						/>

						<div className="ml-5 grow">
							<h3 className="text-xl font-semibold uppercase text-foreground">
								{item.name}
							</h3>

							<span className="mb-1 block text-xs font-semibold uppercase text-primary">
								{item.date}
							</span>

							<p className="mt-3 text-gray-500">Participe por apenas R$ </p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
