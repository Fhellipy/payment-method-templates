'use client';

import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function Header(): JSX.Element {
	const pathname = usePathname();

	return (
		<header className="z-50 flex w-full flex-wrap text-sm md:flex-nowrap md:justify-start">
			<nav className="relative mt-2 w-full max-w-[85rem] rounded-xl border bg-secondary px-4 py-3 md:flex md:items-center md:justify-between xl:mx-auto">
				<div className="flex items-center justify-between">
					<a href="/" className="flex-none pl-2 text-xl font-semibold">
						Logo
					</a>

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
					<div className="mt-3 flex flex-col gap-1 md:mt-0 md:flex-row md:items-center md:justify-end">
						<a
							href="/"
							className="rounded-md px-3 py-2 font-medium text-primary hover:bg-gray-100"
						>
							Inicio
						</a>

						<a
							href="/themes"
							className="rounded-md px-3 py-2 font-medium text-gray-500 hover:bg-gray-100"
						>
							Temas
						</a>

						<a
							href="/"
							className="rounded-md px-3 py-2 font-medium text-gray-500 hover:bg-gray-100"
						>
							Meus Bilhetes
						</a>

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
								<a
									className="flex items-center rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
									href={pathname === '/' ? '#sweepstakes' : '/#sweepstakes'}
								>
									Sorteios
								</a>

								<a
									className="flex items-center rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
									href={pathname === '/' ? '#winners' : '/#winners'}
								>
									Ganhadores
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}
