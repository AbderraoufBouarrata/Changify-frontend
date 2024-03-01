"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Typography from "./_components/Typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const router = useRouter();
    return (
        <div className="flex h-96 w-full flex-col items-center justify-center gap-8">
            <Typography variant="h3">
                The page you are looking for does not exist.
            </Typography>
            <Button variant="default" onClick={() => router.push("/")}>
                Go To home
            </Button>
        </div>
    );
}
