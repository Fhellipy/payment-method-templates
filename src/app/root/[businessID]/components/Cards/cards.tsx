import { StatusTag } from '@/components';
import Link from 'next/link';
import { type CardType } from './types';

type CardProps = {
	items: CardType[];
	businessID: string;
};

export function Cards({ items, businessID }: CardProps): JSX.Element {
	return (
		<div className="mx-auto grid max-w-[85rem] gap-6 rounded border px-4 py-6 sm:px-6 lg:grid-cols-2 lg:gap-y-6">
			{items.map((item) => (
				<Link
					key={item.id}
					className="group overflow-hidden rounded-xl border"
					href={`/root/${businessID}/${item.id}`}
				>
					<div className="items-center px-4 py-4 sm:flex sm:py-2">
						<div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-xl bg-primary sm:w-56">
							<img
								className="absolute left-0 top-0 h-full w-full rounded-xl object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
								src={item.img}
							/>
						</div>

						<div className="flex grow flex-col gap-4 px-2 py-4 sm:ml-2 sm:px-4">
							<h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
								{item.name}
							</h3>
							<p className="text-gray-600 dark:text-gray-400">
								{item.description}
							</p>

							<StatusTag date={item.date} price={item.price} />
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
