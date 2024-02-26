import { RootState } from "@/app/_redux/store";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { convertCurrency } from "./useConvertCurrency.helpers";
import { setAmount, setResult } from "@/app/_redux/currency";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useDebouncer from "../useDebouncer";

export default function useConvertCurrency() {
    const { toCurrency, amount, fromCurrency, result } = useSelector(
        (state: RootState) => state.currency,
    );
    const dispatch = useDispatch();

    const fetchData = async () => {
        if (!(fromCurrency && toCurrency && amount)) {
            console.log("no data");
            return false;
        }

        try {
            const response = await convertCurrency({
                toCurrency,
                fromCurrency,
                amount,
            });

            if (response.convertedValue)
                dispatch(setResult(response.convertedValue));
            return true;
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const debouncedAmount = useDebouncer(amount, 300);

    useEffect(() => {
        fetchData();
    }, [toCurrency, fromCurrency, debouncedAmount]);

    return { fetchData };
}
