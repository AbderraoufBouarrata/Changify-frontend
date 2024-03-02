import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import Typography from "../Typography";
import { Copy } from "lucide-react";

export default function CodeBlock({ children }: { children: string }) {
    const handleCopy = () => {
        navigator.clipboard.writeText(children);
    };
    return (
        <pre
            className="red rounded- flex h-16 max-w-full items-center justify-between overflow-x-auto overflow-y-hidden bg-slate-100 p-4 dark:bg-gray-700"
            style={{ overflowWrap: "break-word", textWrap: "wrap" }}
        >
            {children}
            <Popover>
                <PopoverTrigger asChild>
                    <div
                        className="cursor-pointer rounded-lg bg-white p-2 dark:bg-zinc-800"
                        onClick={handleCopy}
                    >
                        <Copy />
                    </div>
                </PopoverTrigger>
                <PopoverContent className=" border-none bg-white dark:bg-zinc-800">
                    <Typography variant="p1">Text Copied</Typography>
                </PopoverContent>
            </Popover>
        </pre>
    );
}
