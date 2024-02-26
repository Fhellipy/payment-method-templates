type DescriptionProps = {
	description: string;
};

export function Description({ description }: DescriptionProps): JSX.Element {
	return (
		<section className="rounded border p-4 shadow">
			<details className="group flex items-center justify-center">
				<summary className="cursor-pointer px-2 text-xl font-bold text-gray-500 group-open:mb-2">
					Descrição
				</summary>

				<div className="flex items-center justify-center p-2 text-center">
					{description}
				</div>
			</details>
		</section>
	);
}
