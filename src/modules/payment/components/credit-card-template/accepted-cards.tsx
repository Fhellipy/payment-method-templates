import eloLogo from '@shared/assets/images/elo.svg';
import mastercardLogo from '@shared/assets/images/mastercard.svg';
import visaLogo from '@shared/assets/images/visa.svg';
import Image from 'next/image';

export function AcceptedCards() {
	return (
		<div className="mt-2 flex flex-col gap-1 border-t p-2">
			<strong>Cartões aceitos:</strong>

			<div className="flex gap-2 text-base">
				<Image
					src={eloLogo}
					title="ELO"
					alt="Cartão ELO"
					className="h-12 w-14 flex-shrink-0 rounded border object-cover p-0.5 outline"
				/>

				<Image
					src={mastercardLogo}
					title="MasterCard"
					alt="Cartão MasterCard"
					className="h-12 w-14 flex-shrink-0 rounded border object-cover p-0.5 outline"
				/>
				<Image
					src={visaLogo}
					title="Visa"
					alt="Cartão Visa"
					className="h-12 w-14 flex-shrink-0 rounded border object-cover p-0.5 outline"
				/>
			</div>
		</div>
	);
}
