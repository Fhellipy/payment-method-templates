import { InstagramIcon } from 'lucide-react';
import Link from 'next/link';
import { BsWhatsapp } from 'react-icons/bs';

type FooterProps = {
	social: {
		instagram: string;
		whatsapp: string;
	};
};

export function Footer({ social }: FooterProps): JSX.Element {
	return (
		<footer className="flex min-h-[5rem] w-full flex-col-reverse flex-wrap items-center justify-center gap-2 bg-background bg-black p-2 px-6 text-sm text-white sm:flex-row sm:flex-nowrap sm:justify-between">
			<span className="text-center">
				© 2023 Nome da Empresa, Inc. Todos os direitos reservados.
			</span>

			<div className="mt-1 flex items-center gap-2">
				<Link href={social?.whatsapp} className="cursor-pointer text-[1.2rem]">
					<BsWhatsapp />
				</Link>

				<Link href={social?.instagram}>
					<InstagramIcon size={20} className="cursor-pointer" />
				</Link>
			</div>
		</footer>
	);
}
