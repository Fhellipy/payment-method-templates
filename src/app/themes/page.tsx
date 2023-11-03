import Link from 'next/link';

export default function Themes(): JSX.Element {
	return (
		<main className="flex h-full min-h-[75rem] w-full flex-col items-center gap-4 border">
			<h1>Temas</h1>

			<nav className="flex gap-4 rounded border bg-background p-2 text-foreground">
				<Link href="/root/1">Tema 1</Link>
				<Link href="/root/2">Tema 2</Link>
				<Link href="/root/3">Tema 3</Link>
			</nav>
		</main>
	);
}
