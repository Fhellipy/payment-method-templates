import { toBRL } from '@/utils';

type StatusTagProps = {
	date: string;
	price: number;
};

export function StatusTag({ date, price }: StatusTagProps): JSX.Element {
	const now = new Date().getTime();
	const dateToCompare = new Date(date).getTime();
	const dateToCompareString = new Date(date).toLocaleDateString();

	if (dateToCompare < now) {
		return (
			<span className="inline-flex w-fit items-center rounded bg-gray-200 px-3 py-1 text-sm font-medium text-gray-500">
				Concluído
			</span>
		);
	}

	return (
		<>
			<span className="font-semibold text-primary">{dateToCompareString}</span>
			<p className="w-fit rounded border px-4 py-1 text-gray-500 shadow">
				Participe por apenas {toBRL(price)}
			</p>
		</>
	);
}
