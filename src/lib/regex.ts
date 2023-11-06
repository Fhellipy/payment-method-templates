/**
 * Este regex só passa quando todos os elementos são numéricos
 *
 * Exemplos de texto condizente:
 * - `012345`
 *
 * Exemplos de texto incorreto:
 * - `ABCDEF`
 * - `ABC123`
 * - `123ABC`
 *
 * Este regex pode ser usado para remover todos os caracteres que não numéricos de uma string
 */
export const onlyNumberRegex = /\D/g;
