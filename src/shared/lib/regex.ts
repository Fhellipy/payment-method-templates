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

/**
 * Este regex só passa quando todos os elementos forem palavras, ou seja, letras do alfabeto sem caracteres especiais
 *
 * Exemplos de texto condizente:
 * - `ABCDEF`
 *
 * Exemplos de texto incorreto:
 * - `012345`
 * - `ABC123`
 * - `123ABC`
 * - `ÃBÇ-DEF`
 *
 * Este regex pode ser usado para remover todos os números e caracteres especiais de uma string
 */
export const onlyWordsRegex = /[^a-z\u00C0-\u00FF\s]/gi;
