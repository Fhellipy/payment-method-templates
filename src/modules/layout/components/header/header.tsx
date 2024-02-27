'use client';

import { Form } from '@modules/my-purchase';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@shared/components';
import { cn } from '@shared/lib';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type HeaderProps = {
	logo: string;
	url: string;
};

function LinksHeader({ url }: { url: string }) {
	return (
		<div className="flex flex-col gap-2 p-1 sm:mt-0 sm:flex-row sm:items-center sm:justify-end">
			<Link
				href={url}
				className="rounded-md p-2 font-medium text-primary hover:bg-gray-200"
			>
				Inicio
			</Link>

			<Link
				href="/themes"
				className="rounded-md p-2 font-medium text-gray-500 hover:bg-gray-200"
			>
				Temas
			</Link>

			<Form variant="search" buttonOpen="Minhas Compras" />
		</div>
	);
}

export function Header({ logo, url }: HeaderProps): JSX.Element {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky inset-x-0 top-0 z-50 flex w-full flex-wrap bg-background text-sm sm:flex-nowrap sm:justify-start sm:px-6 lg:px-8">
			<nav className="relative w-full max-w-[85rem] border bg-secondary px-4 py-2 sm:mt-2 sm:rounded-xl md:flex md:items-center md:justify-between xl:mx-auto">
				<div className="w-full items-center justify-between sm:flex">
					<Link
						href={url}
						className="hidden flex-none pl-2 text-xl font-semibold sm:flex"
					>
						{logo}
					</Link>

					<Accordion type="single" collapsible className="w-full sm:hidden">
						<AccordionItem value="collapsible" className="w-full">
							<div className="flex w-full items-center justify-between">
								<Link
									href={url}
									className="flex-none pl-2 text-xl font-semibold"
								>
									{logo}
								</Link>

								<AccordionTrigger
									className="flex justify-end p-4 "
									onClick={(e) => {
										setOpen(
											!(e.currentTarget.getAttribute('data-state') === 'open'),
										);
									}}
								>
									<MenuIcon
										size={20}
										className={cn({ hidden: open, block: !open })}
									/>

									<XIcon
										size={20}
										className={cn({ hidden: !open, block: open })}
									/>
								</AccordionTrigger>
							</div>

							<AccordionContent className="w-full">
								<LinksHeader url={url} />
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					<div className="hidden sm:flex">
						<LinksHeader url={url} />
					</div>
				</div>
			</nav>
		</header>
	);
}
