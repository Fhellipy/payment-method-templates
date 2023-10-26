import Link from 'next/link';
import { Header } from '../components';

export default function Home(): JSX.Element {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      <Header />

      <h1>Home</h1>

      <nav className="flex gap-4 rounded border bg-background p-2 text-foreground">
        <Link href="/root/1">Tema 1</Link>
        <Link href="/root/2">Tema 2</Link>
        <Link href="/root/3">Tema 3</Link>
      </nav>
    </div>
  );
}
