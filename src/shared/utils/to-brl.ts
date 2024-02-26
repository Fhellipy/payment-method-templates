/**
 * Transforma um valor numérico em um valor monetário (BRL).
 * @param value Valor que será convertido
 * @returns Valor em notação de dinheiro brasileiro
 */
export function toBRL(value?: number): string {
	if (typeof value === 'undefined') return '';

	return value?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
