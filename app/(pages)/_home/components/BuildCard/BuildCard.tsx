"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    atomDark,
    oneLight,
    dracula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import useBuildQuery from "@/app/_hooks/useBuildQuery";
import { useSelector } from "react-redux";
import { RootState } from "@/app/_redux/store";

export default function BuildCard() {
    const jsonData = { currency: "USD" };
    const { theme } = useTheme();
    const { url, body } = useSelector((state: RootState) => state.query);
    useBuildQuery();
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle>Query Builder</CardTitle>
                <CardDescription>
                    <strong>POST</strong>{" "}
                    <a className="font-semibold text-green-400 underline">
                        API
                    </a>{" "}
                    request body:
                </CardDescription>
            </CardHeader>
            <CardContent>
                <SyntaxHighlighter
                    language="json"
                    style={theme === "light" ? oneLight : dracula}
                >
                    {body}
                </SyntaxHighlighter>
            </CardContent>
            {/* 
            <CardFooter>
                <Button variant="default"></Button>
            </CardFooter> */}
        </Card>
    );
}
