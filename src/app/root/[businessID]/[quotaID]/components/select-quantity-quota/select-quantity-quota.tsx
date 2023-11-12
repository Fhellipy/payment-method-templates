'use client';

import { Form } from '@/components';
import { toBRL } from '@/utils';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';

const MAX_QUOTA = 1300;

export function SelectQuantityQuota(): JSX.Element {
	const [quantity, setQuantity] = useState(1);

	const handleAddQuantity = (qtd: number) => {
		if (quantity === MAX_QUOTA) return;

		if (quantity + qtd > MAX_QUOTA) {
			setQuantity(MAX_QUOTA);
		} else {
			setQuantity(quantity + qtd);
		}
	};

	const handleSubtractQuantity = (qtd: number) => {
		if (quantity === 1) return;

		if (quantity - qtd < 1) {
			setQuantity(1);
		} else {
			setQuantity(quantity - qtd);
		}
	};

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
					<button
						className="w-full rounded border px-2 py-1 hover:bg-gray-100"
						onClick={() => handleAddQuantity(1)}
					>
						+1
					</button>

					<button
						className="w-full rounded border px-2 py-1 hover:bg-gray-100"
						onClick={() => handleAddQuantity(10)}
					>
						+10
					</button>

					<button
						className="w-full rounded border px-2 py-1 hover:bg-gray-100"
						onClick={() => handleAddQuantity(100)}
					>
						+100
					</button>

					<button
						className="w-full rounded border px-2 py-1 hover:bg-gray-100"
						onClick={() => handleAddQuantity(300)}
					>
						+300
					</button>

					<button
						className="w-full rounded border px-2 py-1 hover:bg-gray-100"
						onClick={() => handleAddQuantity(500)}
					>
						+500
					</button>

					<button
						className="w-full rounded border px-2 py-1 hover:bg-gray-100"
						onClick={() => handleAddQuantity(1000)}
					>
						+1000
					</button>
				</div>

				<div className="flex w-full items-end justify-between gap-2 gap-x-5 rounded border p-4">
					<button
						type="button"
						className="inline-flex h-8 w-8 items-center justify-center gap-x-2 rounded-full border bg-background text-sm font-medium shadow hover:bg-gray-100"
						onClick={() => handleSubtractQuantity(1)}
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
							onChange={(e) => setQuantity(Number(e.target.value))}
						/>
					</div>

					<button
						type="button"
						className="inline-flex h-8 w-8 items-center justify-center gap-x-2 rounded-full border bg-background text-sm font-medium shadow hover:bg-gray-100"
						onClick={() => handleAddQuantity(1)}
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
