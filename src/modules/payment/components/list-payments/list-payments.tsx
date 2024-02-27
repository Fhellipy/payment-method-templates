'use client';

import {
	CreditCardTemplate,
	PixTemplate,
	TicketTemplate,
	useSelectPaymentMethodStore,
} from '@modules/payment';
import creditCardLogo from '@shared/assets/images/credit-card.svg';
import pixLogo from '@shared/assets/images/pix.svg';
import ticketLogo from '@shared/assets/images/ticket.svg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@shared/components';
import Image from 'next/image';

export function ListPayments(): JSX.Element {
	const selectMethod = useSelectPaymentMethodStore(
		(state) => state.selectMethod,
	);

	return (
		<div className="flex w-full flex-col rounded border">
			<h2 className="border-b p-2 font-semibold">Formas de Pagamento</h2>

			<Tabs defaultValue="pix" className="border-none">
				<TabsList>
					<TabsTrigger value="pix" onClick={() => selectMethod('pix')}>
						<Image
							src={pixLogo}
							alt="Pix"
							width={25}
							height={25}
							className="flex-shrink-0 object-cover"
						/>
						Pix
					</TabsTrigger>

					<TabsTrigger
						value="creditCard"
						onClick={() => selectMethod('creditCard')}
					>
						<Image
							src={creditCardLogo}
							alt="Cartão de crédito"
							width={25}
							height={25}
							className="flex-shrink-0 object-cover"
						/>
						Cartão de Crédito
					</TabsTrigger>

					<TabsTrigger value="ticket" onClick={() => selectMethod('ticket')}>
						<Image
							src={ticketLogo}
							alt="Boleto Bancário"
							width={25}
							height={25}
							className="flex-shrink-0 object-cover"
						/>
						Boleto Bancário
					</TabsTrigger>
				</TabsList>

				<div className="p-2">
					<TabsContent value="pix">
						<PixTemplate />
					</TabsContent>

					<TabsContent value="creditCard">
						<CreditCardTemplate />
					</TabsContent>

					<TabsContent value="ticket">
						<TicketTemplate />
					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}
