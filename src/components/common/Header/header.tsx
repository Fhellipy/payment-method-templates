'use client';

import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Form } from '../Form';

type HeaderProps = {
	logo: string;
	url: string;
};

export function Header({ logo, url }: HeaderProps): JSX.Element {
	const pathname = usePathname();

	return (
		<header className="sticky inset-x-0 top-0 z-50 flex w-full flex-wrap bg-background text-sm sm:flex-nowrap sm:justify-start sm:px-6 lg:px-8">
			<nav className="relative w-full max-w-[85rem] border bg-secondary px-4 py-2 sm:mt-2 sm:rounded-xl md:flex md:items-center md:justify-between xl:mx-auto">
				<div className="flex items-center justify-between">
					<Link href={url} className="flex-none pl-2 text-xl font-semibold">
						{logo}
					</Link>

					<div className="md:hidden">
						<button
							type="button"
							className="hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-background p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-200"
							data-hs-collapse="#navbar-collapse-with-animation"
							aria-controls="navbar-collapse-with-animation"
							aria-label="Toggle navigation"
						>
							<MenuIcon size={16} className="hs-collapse-open:hidden" />

							<XIcon size={16} className="hidden hs-collapse-open:block" />
						</button>
					</div>
				</div>

				<div
					id="navbar-collapse-with-animation"
					className="hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 md:block"
				>
					<div className="mt-3 flex flex-col gap-1 p-1 md:mt-0 md:flex-row md:items-center md:justify-end">
						<Link
							href={url}
							className="rounded-md px-3 py-2 font-medium text-primary hover:bg-gray-100"
						>
							Inicio
						</Link>

						<Link
							href="/themes"
							className="rounded-md px-3 py-2 font-medium text-gray-500 hover:bg-gray-100"
						>
							Temas
						</Link>

						<Form variant="search" buttonOpen="Minhas Compras" />

						<div className="hs-dropdown [--adaptive:none] [--strategy:static] md:[--strategy:fixed] md:[--trigger:hover]">
							<button
								type="button"
								className="flex w-full items-center justify-between rounded-md px-3 py-2 font-medium text-gray-500 hover:bg-gray-100"
							>
								Mais
								<ChevronDownIcon size={20} className="ml-1" />
							</button>

							<div
								className="hs-dropdown-menu top-full z-10 hidden rounded-lg bg-background p-2 opacity-0 transition-[opacity,margin] duration-[0.1ms] before:absolute before:-top-5 before:left-0 before:h-5 before:w-full hs-dropdown-open:opacity-100 md:w-48 md:border md:shadow-md md:duration-[150ms] md:dark:border"
								{...(pathname === '/'
									? { 'data-hs-scrollspy': '#scrollspy' }
									: '')}
							>
								<Link
									className="flex items-center rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
									href={pathname === '/' ? '#sweepstakes' : '/#sweepstakes'}
								>
									Sorteios
								</Link>

								<Link
									className="flex items-center rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
									href={pathname === '/' ? '#winners' : '/#winners'}
								>
									Ganhadores
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
