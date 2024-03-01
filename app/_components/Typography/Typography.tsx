import { cn } from "@/lib/utils";
import React from "react";

export default function Typography({
    variant,
    className,
    children,
}: {
    variant: string;
    className?: string;
    children: React.ReactNode;
}) {
    switch (variant) {
        case "h1":
            return (
                <h1
                    className={cn(
                        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
                        className,
                    )}
                >
                    {children}
                </h1>
            );
        case "h2":
            return (
                <h2
                    className={cn(
                        "scroll-m-20 text-3xl font-semibold tracking-tight ",
                        className,
                    )}
                >
                    {children}
                </h2>
            );
        case "h3":
            return (
                <h3
                    className={cn(
                        "scroll-m-20 text-2xl font-semibold tracking-tight",
                        className,
                    )}
                >
                    {children}
                </h3>
            );
        case "h4":
            return (
                <h4
                    className={cn(
                        "scroll-m-20 text-xl font-semibold tracking-tight",
                        className,
                    )}
                >
                    {children}
                </h4>
            );
        case "h5":
            return (
                <h4
                    className={cn(
                        "text-l scroll-m-20 font-semibold tracking-tight",
                        className,
                    )}
                >
                    {children}
                </h4>
            );
        case "p1":
            return (
                <p
                    className={cn(
                        "leading-7 [&:not(:first-child)]:mt-6",
                        className,
                    )}
                >
                    {children}
                </p>
            );
        case "p2":
            return (
                <p
                    className={cn(
                        "text-sm leading-7 [&:not(:first-child)]:mt-6",
                        className,
                    )}
                >
                    {children}
                </p>
            );
    }
}
