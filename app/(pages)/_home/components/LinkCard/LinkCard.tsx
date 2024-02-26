"use client";
import React, { use, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Copy, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@radix-ui/react-popover";
import Typography from "@/app/_components/Typography";
import useBuildQuery from "@/app/_hooks/useBuildQuery";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_redux/store";
export default function LinkCard() {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const handleCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(url);
    };
    useBuildQuery();
    const { url } = useSelector((state: RootState) => state.query);
    return (
        <Card>
            <CardHeader>
                <CardTitle>API URL</CardTitle>
                <CardDescription>
                    <strong>GET</strong>{" "}
                    <a className="font-semibold text-green-400 underline">
                        API
                    </a>{" "}
                    URL request:
                </CardDescription>
            </CardHeader>
            <CardContent>
                <pre className="red rounded- flex h-16 items-center justify-between bg-slate-100 p-4 dark:bg-slate-800">
                    {url}
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="cursor-pointer rounded-lg bg-white p-2 dark:bg-zinc-800">
                                <Copy />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className=" border-none bg-white dark:bg-zinc-800">
                            <Typography variant="p1">Text Copied</Typography>
                        </PopoverContent>
                    </Popover>
                </pre>
            </CardContent>
            <CardFooter>
                <Button variant="default">Try it out!</Button>
            </CardFooter>
        </Card>
    );
}
