import Link from 'next/link';

interface Params {
	params: { businessID: string };
}

export default function BusinessPage({ params }: Params): JSX.Element {
	return (
		<div className="flex flex-col items-center gap-4 p-2">
			<Link href="/">
				<button className="text-primary-background rounded border bg-secondary p-2">
					Voltar
				</button>
			</Link>

			<div className="flex h-60 w-60 items-center justify-center rounded bg-primary">
				<h1 className="text-primary-foreground">Tema #{params.businessID}</h1>
			</div>
		</div>
	);
}
