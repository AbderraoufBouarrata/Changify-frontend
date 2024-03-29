"use client";
import Currencies from "@/app/_assets/json/currencies-with-flags.json";
import ComboBox from "@/app/_components/ComboBox";
import Typography from "@/app/_components/Typography";
import useBuildQuery from "@/app/_hooks/useBuildQuery";
import useConvertCurrency from "@/app/_hooks/useConvertCurrency";
import { setAmount, swapCurrencies } from "@/app/_redux/currency";
import { RootState } from "@/app/_redux/store";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ConvertCard() {
    const [isVisible, setIsVisible] = useState(false);
    const { fromCurrency, toCurrency, amount, result } = useSelector(
        (state: RootState) => state.currency,
    );
    const values = Currencies;
    const dispatch = useDispatch();

    const { fetchData } = useConvertCurrency();
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Convert</CardTitle>
                <CardDescription>Currency Converter:</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col items-start gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div className="flex flex-col items-center justify-start gap-4 md:flex-row">
                        <div>
                            <Typography variant="h5">Amount:</Typography>
                            <Input
                                type="number"
                                placeholder="Amount"
                                className="w-full md:w-32"
                                onChange={(e: any) => {
                                    dispatch(setAmount(e.target.value));
                                }}
                            />
                        </div>
                        <div>
                            <Typography variant="h5">From:</Typography>
                            <ComboBox values={values} mode="from" />
                        </div>
                    </div>
                    <div className="flex w-full justify-center md:w-fit md:justify-start">
                        <Button
                            variant="default"
                            className="mt-5 h-10 w-10 rounded-full border-zinc-200 p-3 text-zinc-950 shadow-sm dark:border-zinc-800 dark:text-zinc-50"
                            onClick={() => dispatch(swapCurrencies())}
                        >
                            <ArrowLeftRight className="text-white dark:text-zinc-800" />
                        </Button>
                    </div>
                    <div>
                        <Typography variant="h5">To:</Typography>
                        <ComboBox values={values} mode="to" />
                    </div>
                </div>
                <div className={isVisible ? "mt-4" : ""}>
                    <AnimatePresence>
                        {isVisible && (
                            <motion.div
                                initial={{ y: -10, opacity: 50 }} // Initial position (above the viewport)
                                animate={{ y: 0, opacity: 100 }} // Final position (at the top of the viewport)
                                exit={{ y: -10, opacity: 50 }} // Exit position (back above the viewport)
                                transition={{ duration: 0.3 }} // Animation duration
                                style={{
                                    width: "100%",
                                    height: "fit-content",
                                }}
                            >
                                <Typography variant="h5">{`${amount.toLocaleString(
                                    "en-US",
                                    {
                                        maximumFractionDigits: 2,
                                        minimumFractionDigits: 2,
                                    },
                                )} ${fromCurrency.slice(0, 3).toUpperCase()}`}</Typography>
                                <Typography variant="h3">
                                    {`${result.toLocaleString("en-US", {
                                        maximumFractionDigits: 6,
                                        minimumFractionDigits: 6,
                                    })} ${toCurrency.slice(0, 3).toUpperCase()}`}
                                </Typography>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </CardContent>
            <CardFooter>
                {!isVisible && (
                    <Button
                        variant="default"
                        onClick={async () => {
                            const shouldShow = await fetchData();
                            console.log(shouldShow);
                            if (shouldShow) setIsVisible(true);
                        }}
                    >
                        Convert
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
