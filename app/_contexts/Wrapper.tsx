"use client";
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import { store } from "../_redux/store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Wrapper({ children }: { children: React.ReactNode }) {
    const queryClient = new QueryClient();
    return (
        <Provider store={store}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </ThemeProvider>
        </Provider>
    );
}
