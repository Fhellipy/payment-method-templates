'use client';

import { Form } from '@/components';
import { toBRL } from '@/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import {
	handleAddQuantity,
	handleInputChange,
	handleSubtractQuantity,
} from './utils';

const MAX_QUOTA = 1300;
const BUY_COMBO = [1, 10, 100, 300, 500, 1000];

export function SelectQuantityQuota(): JSX.Element {
	const [quantity, setQuantity] = useState(1);

	const purchasePromotionsData = [
		{
			count: 100,
			price: 25,
		},
		{
			count: 200,
			price: 50,
		},
		{
			count: 300,
			price: 75,
		},
		{
			count: 400,
			price: 100,
		},
		{
			count: 500,
			price: 125,
		},
		{
			count: 600,
			price: 150,
		},
		{
			count: 700,
			price: 175,
		},
		{
			count: 800,
			price: 200,
		},
		{
			count: 900,
			price: 225,
		},
		{
			count: 1000,
			price: 250,
		},
		{
			count: 1100,
			price: 275,
		},
		{
			count: 1200,
			price: 300,
		},
		{
			count: 1300,
			price: 325,
		},
	];

	return (
		<section className="flex flex-col items-center justify-center gap-4 rounded border bg-background px-4 py-6 shadow">
			<details className="w-full max-w-[40rem] border-b pb-2">
				<summary className="mb-2 cursor-pointer px-2 text-xl font-bold text-gray-500">
					Cotas Promocionais
				</summary>

				<div className="grid gap-2 sm:grid-cols-3">
					{purchasePromotionsData.map((promotion, index) => (
						<Form
							key={index}
							variant="purchase_promotion"
							buttonOpen={`${promotion.count} por ${toBRL(promotion.price)}`}
						/>
					))}
				</div>
			</details>

			<div className="flex w-full max-w-[40rem] flex-col items-center">
				<div className="mb-2 grid w-full grid-cols-3 gap-2">
					{BUY_COMBO.map((combo, index) => (
						<button
							key={index}
							className="w-full rounded border px-2 py-1 hover:bg-gray-100"
							onClick={() =>
								handleAddQuantity(quantity, MAX_QUOTA, combo, setQuantity)
							}
						>
							+{combo}
						</button>
					))}
				</div>

				<div className="flex w-full items-end justify-between gap-2 gap-x-5 rounded border p-4">
					<button
						type="button"
						className="inline-flex h-8 w-8 items-center justify-center gap-x-2 rounded-full border bg-background text-sm font-medium shadow hover:bg-gray-100"
						onClick={() => handleSubtractQuantity(quantity, setQuantity)}
					>
						<MinusIcon size={16} />
					</button>

					<div className="flex w-fit flex-col items-center justify-center">
						<span className="mb-2 block text-center text-xs text-gray-500">
							Selecionar quantidade
						</span>
						<input
							type="number"
							min={1}
							max={MAX_QUOTA}
							value={quantity}
							placeholder="1"
							className="w-full items-center rounded border bg-transparent px-2 py-1 text-center text-gray-500"
							onChange={(ev) => handleInputChange(ev, MAX_QUOTA, setQuantity)}
						/>
					</div>

					<button
						type="button"
						className="inline-flex h-8 w-8 items-center justify-center gap-x-2 rounded-full border bg-background text-sm font-medium shadow hover:bg-gray-100"
						onClick={() =>
							handleAddQuantity(quantity, MAX_QUOTA, 1, setQuantity)
						}
					>
						<PlusIcon size={16} />
					</button>
				</div>

				<div className="w-full p-2 text-end text-sm text-gray-500">
					<p>Valor unitário: {toBRL(0.25)}</p>
					<p>Valor total: {toBRL(0.25 * quantity)}</p>
				</div>

				<Form variant="purchase" buttonOpen="Comprar" />
			</div>
		</section>
	);
}
