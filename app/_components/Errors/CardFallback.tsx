"use client";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ErrorBoundary } from "react-error-boundary";

export function CardFallback({ error, resetErrorBoundary }: any) {
    return (
        <Card className="h-full max-w-16">
            <pre className="red h-full bg-slate-100 dark:bg-slate-800">
                <CardHeader>Component Failed to load with error:</CardHeader>
                <CardContent className="max-w-16">{error.message}</CardContent>
                <CardFooter>
                    <Button variant="destructive" onClick={resetErrorBoundary}>
                        Reload page
                    </Button>
                </CardFooter>
            </pre>
        </Card>
    );
}

export default function CardErrorBoudary({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ErrorBoundary
            FallbackComponent={CardFallback}
            onReset={() => window.location.reload()}
        >
            {children}
        </ErrorBoundary>
    );
}
