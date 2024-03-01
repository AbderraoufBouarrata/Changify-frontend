"use client";
import CustomAccordion from "@/app/_components/Accordion/Accordion";
import CodeBlock from "@/app/_components/CodeBlock";
import Typography from "@/app/_components/Typography";
import { useTheme } from "next-themes";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    dracula,
    oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
export default function page() {
    const { theme } = useTheme();
    return (
        <div className="grid gap-4">
            <Typography variant="h2" className="mt-8">
                API Documentation
            </Typography>
            <Typography variant="p1">
                Here you will find documentation for all api endpoints
            </Typography>
            <CustomAccordion title="API URL">
                <Typography variant="p1">
                    use this URL to access our api in all endpoints
                </Typography>
                <CodeBlock>
                    {process.env.NEXT_PUBLIC_API_URL as string}
                </CodeBlock>
            </CustomAccordion>
            <CustomAccordion title="Get all currencies">
                <Typography variant="p1">
                    returns all currencies in the database
                </Typography>
                <CodeBlock>API/currencies/all</CodeBlock>
            </CustomAccordion>
            <CustomAccordion title="POST: get rates for currency">
                <Typography variant="p1">
                    returns all the rates for the given currency using a post
                    request
                </Typography>
                <CodeBlock>API/exchange-rates</CodeBlock>
                <Typography variant="p1">Request Body</Typography>
                <SyntaxHighlighter
                    language="json"
                    style={theme === "light" ? oneLight : dracula}
                >
                    {JSON.stringify(
                        {
                            currency: "USD",
                        },
                        null,
                        2,
                    )}
                </SyntaxHighlighter>
            </CustomAccordion>
            <CustomAccordion title="GET: get rates for currency">
                <Typography variant="p1">
                    returns all the rates for the given currency using a get
                    request
                </Typography>
                <CodeBlock>API/exchange-rates/USD</CodeBlock>
            </CustomAccordion>
            <CustomAccordion title="POST: Exchange Currency">
                <Typography variant="p1">
                    Exchange Currency using post request
                </Typography>
                <CodeBlock>API/exchange-currency</CodeBlock>
                <Typography variant="p1">Request Body</Typography>
                <SyntaxHighlighter
                    language="json"
                    style={theme === "light" ? oneLight : dracula}
                >
                    {JSON.stringify(
                        {
                            base: "USD",
                            amount: 1,
                            to: "EUR",
                        },
                        null,
                        2,
                    )}
                </SyntaxHighlighter>
            </CustomAccordion>
            <CustomAccordion title="GET: Exchange Currency">
                <Typography variant="p1">
                    Exchange Currency using get request
                </Typography>
                <CodeBlock>
                    API/exchange-currency?base=USD&amount=1&to=EUR
                </CodeBlock>
            </CustomAccordion>
        </div>
    );
}
