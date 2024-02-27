'use client';

import ticketLogo from '@shared/assets/images/ticket.svg';
import { Button } from '@shared/components';
import Image from 'next/image';

export function TicketTemplate() {
	return (
		<div className="flex flex-col gap-4 p-2">
			<div className="flex items-center gap-1">
				<Image
					src={ticketLogo}
					alt="Boleto Bancário"
					width={25}
					height={25}
					className="h-8 w-8 flex-shrink-0 object-cover p-1 outline"
				/>

				<p className="text-sm">
					Ao finalizar o pedido, você receberá o boleto bancário por e-mail, e
					também poderá acessá-lo no próximo seguinte.
				</p>
			</div>

			<Button
				onClick={() => {
					alert('Pedido finalizado com sucesso!');
				}}
			>
				Finalizar Pedido
			</Button>
		</div>
	);
}
