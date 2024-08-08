export function FormatCurrencyText(value: number) {
    return value.toFixed(2).replaceAll(".", ',')
}