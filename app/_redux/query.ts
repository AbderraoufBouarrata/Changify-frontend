import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type queryType = {
    body: string;
    url: string;
};

const initialState: queryType = {
    body: "",
    url: "",
};

export const querySlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        setBody: (state, action: PayloadAction<string>) => {
            state.body = action.payload;
        },
        setUrl: (state, action: PayloadAction<string>) => {
            state.url = action.payload;
        },
    },
});

export const { setBody, setUrl } = querySlice.actions;

export default querySlice.reducer;
