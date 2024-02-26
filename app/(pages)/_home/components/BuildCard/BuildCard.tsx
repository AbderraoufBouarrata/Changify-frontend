"use client";
import useBuildQuery from "@/app/_hooks/useBuildQuery";
import { RootState } from "@/app/_redux/store";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    dracula,
    oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

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
