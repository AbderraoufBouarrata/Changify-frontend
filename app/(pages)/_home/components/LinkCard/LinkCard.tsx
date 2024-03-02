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
import CodeBlock from "@/app/_components/CodeBlock";
export default function LinkCard() {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const handleCopy = () => {
        setIsCopied(true);
        navigator.clipboard.writeText(url);
    };

    const { url } = useSelector((state: RootState) => state.query);
    return (
        <Card>
            <CardHeader>
                <CardTitle>API URL</CardTitle>
                <CardDescription>
                    <strong>GET</strong>{" "}
                    <a
                        href="/documentation"
                        target="_blank"
                        className="font-semibold text-green-400 underline"
                    >
                        API
                    </a>{" "}
                    URL request:
                </CardDescription>
            </CardHeader>
            <CardContent>
                <CodeBlock>{url}</CodeBlock>
            </CardContent>
            <CardFooter>
                <a href={url} target="_blank">
                    {" "}
                    <Button variant="default">Try it out!</Button>
                </a>
            </CardFooter>
        </Card>
    );
}
