"use client";

import { RootState } from "@/app/_redux/store";
import { setFromCurrency } from "@/app/_redux/currency";
import { setToCurrency } from "@/app/_redux/currency";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronsUpDown } from "lucide-react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CompoBoxProps } from "./ComboBox.types";

export default function Combobox(props: CompoBoxProps) {
    const { values: inputs, mode } = props;
    const [open, setOpen] = React.useState(false);
    const { fromCurrency, toCurrency } = useSelector(
        (state: RootState) => state.currency,
    );
    const value = mode === "from" ? fromCurrency : toCurrency;
    const dispatch = useDispatch();

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[300px] justify-between"
                >
                    {value ? (
                        <div className="flex items-center">
                            <img
                                src={
                                    inputs.find(
                                        (input: any) =>
                                            (
                                                input.code + input.name
                                            ).toLowerCase() === value,
                                    )?.flag
                                }
                                alt=""
                                className="mr-2 h-6 w-6"
                            />
                            {
                                inputs.find(
                                    (input: any) =>
                                        (
                                            input.code + input.name
                                        ).toLowerCase() === value,
                                )?.name
                            }
                        </div>
                    ) : (
                        "Select a country..."
                    )}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0">
                <Command className="h-96">
                    <CommandInput placeholder="Search ..." />
                    <CommandEmpty>No Country Found.</CommandEmpty>
                    <CommandGroup>
                        {inputs.map((input: any, index: number) => (
                            <CommandItem
                                key={index}
                                value={input.code + input.name}
                                onSelect={(currentValue) => {
                                    mode === "from"
                                        ? dispatch(
                                              setFromCurrency(
                                                  currentValue === value
                                                      ? ""
                                                      : currentValue,
                                              ),
                                          )
                                        : dispatch(
                                              setToCurrency(
                                                  currentValue === value
                                                      ? ""
                                                      : currentValue,
                                              ),
                                          ),
                                        setOpen(false);
                                }}
                            >
                                <img src={input.flag} alt=""></img> {input.name}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
