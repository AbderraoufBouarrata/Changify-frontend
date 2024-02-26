import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type DrawerType = {
    direction?: "top" | "right" | "bottom" | "left";
};

const initialState: DrawerType = {};

export const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        setDirection: (
            state,
            action: PayloadAction<"top" | "right" | "bottom" | "left">,
        ) => {
            state.direction = action.payload;
        },
    },
});

export const { setDirection } = drawerSlice.actions;

export default drawerSlice.reducer;
