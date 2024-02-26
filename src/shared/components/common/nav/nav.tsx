import { cn } from '@shared/lib';
import { type ClassValue } from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export type NavProps = {
	url: string;
	totalPages: number;
	actualPage: number;
	className?: ClassValue;
};

type LiProps = {
	icon?: React.ReactNode;
	value: number;
	url: string;
	currentPage: string;
};

function Li({ icon, value, url, currentPage }: LiProps) {
	const createLink = (page: number) => {
		return `${url}?page=${page}`;
	};

	return (
		<li
			className={cn(
				'ms-0 flex h-8 items-center justify-center border bg-background px-2 leading-tight first:rounded-l-sm last:rounded-r-sm hover:bg-secondary ',
				{
					'font-semibold text-primary': Number(currentPage) === value,
					'text-gray-500': Number(currentPage) !== value,
				},
			)}
		>
			<Link href={createLink(value)}>{icon ?? value}</Link>
		</li>
	);
}

export function Nav(props: NavProps) {
	const { url, totalPages, actualPage, className } = props;

	const searchParams = useSearchParams();

	const currentPage = searchParams.get('page') ?? '1';

	let compensationPage = 0;
	if (totalPages >= 2) {
		if (actualPage <= 1) {
			compensationPage = 1;
		} else if (actualPage >= totalPages) {
			compensationPage = -1;
		}
	}

	const links = [-1, 0, 1]
		.map((page) => page + actualPage + compensationPage)
		.filter((page) => page > 0 && page <= totalPages);

	if (totalPages <= 1) return null;

	return (
		<nav data-testid="nav" className={cn('my-2 w-fit', className)}>
			<ul className="flex items-center justify-center text-sm text-gray-500">
				{actualPage > 3 && (
					<Li
						url={url}
						value={actualPage - 3}
						icon={<ChevronLeftIcon size={18} />}
						currentPage={currentPage}
					/>
				)}

				{actualPage > 2 && totalPages > 3 && (
					<Li url={url} value={1} currentPage={currentPage} />
				)}

				{actualPage > 2 && totalPages > 3 && (
					<li className="flex h-8 items-center border p-1">...</li>
				)}

				{links.map((page, index) => (
					<Li key={index} url={url} value={page} currentPage={currentPage} />
				))}

				{actualPage < totalPages - 1 && totalPages > 3 && (
					<li className="flex h-8 items-center border p-1">...</li>
				)}

				{actualPage < totalPages - 1 && totalPages > 3 && (
					<Li url={url} value={totalPages} currentPage={currentPage} />
				)}

				{actualPage < totalPages - 2 && (
					<Li
						url={url}
						value={actualPage + 3}
						icon={<ChevronRightIcon size={18} />}
						currentPage={currentPage}
					/>
				)}
			</ul>
		</nav>
	);
}
