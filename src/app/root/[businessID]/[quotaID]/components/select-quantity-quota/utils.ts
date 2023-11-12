export const handleAddQuantity = (
	qtd: number,
	maxQtd: number,
	addQtd: number,
	onChange: (qtd: number) => void,
) => {
	if (qtd === maxQtd) return;

	if (qtd + addQtd > maxQtd) {
		onChange(maxQtd);
		return;
	}

	onChange(qtd + addQtd);
};

export const handleSubtractQuantity = (
	qtd: number,
	onChange: (qtd: number) => void,
) => {
	if (qtd === 1) return;

	if (qtd - 1 < 1) {
		onChange(1);
		return;
	}

	onChange(qtd - 1);
};

export const handleInputChange = (
	ev: React.ChangeEvent<HTMLInputElement>,
	maxQtd: number,
	onChange: (qtd: number) => void,
) => {
	const newQuantity = ev.target.value.replace(/[^0-9]/g, '');

	if (!newQuantity) return;

	if (maxQtd && parseInt(newQuantity) > maxQtd) {
		onChange(maxQtd);
		return;
	}

	onChange(parseInt(newQuantity));
};
