"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import { PlanProps } from "./Plan.types";
import { Button } from "@/components/ui/button";

export default function Plan(props: PlanProps) {
    const { title, description, className, onClick, children } = props;
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>{title} </CardTitle>
                <CardDescription>{description} </CardDescription>
                <CardContent className="min-h-64 p-0">{children} </CardContent>
                <CardFooter className="p-0">
                    <Button variant="default" onClick={onClick}>
                        Subscribe
                    </Button>
                </CardFooter>
            </CardHeader>
        </Card>
    );
}
