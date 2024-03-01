"use client";
import React from "react";
import Typography from "../Typography";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { handleSubmit } from "./ContactUs.helpers";

export default function ContactUs() {
    return (
        <Card className="my-8 h-fit">
            <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                    Have a suggestion? a question? or maybe a bug? or maybe you
                    just want to say hi? for all of the above, you can contact
                    us by filling out the form below.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Typography variant="p1">Email:</Typography>
                    <Input
                        type="email"
                        name="email"
                        placeholder="example@example.com"
                        className="my-0 w-full py-0 md:w-96"
                    />
                    <Typography variant="p1">Message:</Typography>
                    <Textarea
                        name="message"
                        placeholder="Type your message here"
                        className="max-h-96"
                    />
                    <Button variant="default" type="submit" className="mt-8">
                        Contact Us
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
