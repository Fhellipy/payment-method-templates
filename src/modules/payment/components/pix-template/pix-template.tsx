'use client';

import pixLogo from '@shared/assets/images/pix.svg';
import { Button } from '@shared/components';
import Image from 'next/image';

export function PixTemplate() {
	return (
		<div className="flex flex-col gap-4 p-2">
			<div className="flex items-center gap-1">
				<Image
					src={pixLogo}
					alt="Pix"
					width={25}
					height={25}
					className="h-8 w-8 flex-shrink-0 object-cover p-1 outline"
				/>

				<p className="text-sm">
					Ao gerar o código <i>Pix</i> do pedido você pode pagar escaneando o{' '}
					<i>QR Code</i> ou <i>Copiar e Colar</i>.
				</p>
			</div>

			<Button
				className="bg-black text-white hover:bg-black/85"
				onClick={() => {
					alert('Pedido finalizado com sucesso!');
				}}
			>
				Finalizar Pedido
			</Button>
		</div>
	);
}
