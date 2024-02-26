import { axiosClient } from "@/app/_utils/client";

type convertCurrencyProps = {
    fromCurrency: string;
    amount: number;
    toCurrency: string;
};

export async function convertCurrency(props: convertCurrencyProps) {
    const { fromCurrency, amount, toCurrency } = props;
    try {
        const response = await axiosClient.post("/exchange-currency", {
            base: fromCurrency.slice(0, 3).toUpperCase(),
            amount: parseInt(amount as any),
            to: toCurrency.slice(0, 3).toUpperCase(),
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
