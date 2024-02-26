import { setBody, setUrl } from "@/app/_redux/query";
import { RootState } from "@/app/_redux/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useBuildQuery() {
    const { url, body } = useSelector((state: RootState) => state.query);
    const { toCurrency, amount, fromCurrency, result } = useSelector(
        (state: RootState) => state.currency,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        if (!fromCurrency && toCurrency && amount) return;
        const formatedFromCurrency = fromCurrency.slice(0, 3).toUpperCase();
        const formatedToCurrency = toCurrency.slice(0, 3).toUpperCase();

        const query = {
            base: formatedFromCurrency,
            amount,
            to: formatedToCurrency,
        };

        const link = `${process.env.NEXT_PUBLIC_API_URL}/exchange-currency?base=${formatedFromCurrency}&amount=${amount}&to=${formatedToCurrency}`;

        dispatch(setBody(JSON.stringify(query, null, 2)));
        dispatch(setUrl(link));
    }, [fromCurrency, toCurrency, amount]);
}
