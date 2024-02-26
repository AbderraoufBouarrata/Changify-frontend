import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type currencyType = {
    amount: number;
    fromCurrency: string;
    toCurrency: string;
    result: number;
};

const initialState: currencyType = {
    amount: 0,
    fromCurrency: "",
    toCurrency: "",
    result: 0,
};

export const currencySlice = createSlice({
    name: "currency",
    initialState,
    reducers: {
        setAmount: (state, action: PayloadAction<number>) => {
            state.amount = action.payload;
        },
        setFromCurrency: (state, action: PayloadAction<string>) => {
            state.fromCurrency = action.payload;
        },
        setToCurrency: (state, action: PayloadAction<string>) => {
            state.toCurrency = action.payload;
        },
        setResult: (state, action: PayloadAction<number>) => {
            state.result = action.payload;
        },
        swapCurrencies: (state) => {
            const temp = state.fromCurrency;
            state.fromCurrency = state.toCurrency;
            state.toCurrency = temp;
        },
    },
});

export const {
    setAmount,
    setFromCurrency,
    setToCurrency,
    setResult,
    swapCurrencies,
} = currencySlice.actions;

export default currencySlice.reducer;
