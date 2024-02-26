import { type CardType } from '@modules/home';
import { toBRL } from '@shared/utils';
import Link from 'next/link';

type CardProps = {
	items: CardType[];
};

export function QuotaCardList({ items }: CardProps): JSX.Element {
	return (
		<div className="mb-10 grid w-full gap-6 p-4 sm:grid-cols-2 sm:px-0 lg:mb-14 lg:grid-cols-3">
			{items.map((item) => (
				<Link key={item.id} href={`/root/${item.id}`}>
					<div
						key={item.id}
						className="flex-col rounded-xl border bg-background shadow-sm"
					>
						<img
							src={item.img}
							className="flex h-60 w-full min-w-[250px] flex-shrink-0 flex-col items-center justify-center rounded-t-xl bg-primary"
						/>

						<div className="h-36 p-4 md:p-6">
							<h3 className="text-xl font-semibold uppercase text-foreground">
								{item.name}
							</h3>

							<span className="mb-1 block text-xs font-semibold uppercase text-primary">
								{item.date}
							</span>

							<p className="mt-3 text-gray-500">
								Participe por apenas {toBRL(item.price)}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
