import CustomAccordion from "@/app/_components/Accordion";
import CodeBlock from "@/app/_components/CodeBlock";
import Typography from "@/app/_components/Typography";
import React from "react";

export default function page() {
    return (
        <div className="grid gap-4">
            <Typography variant="h2" className="mt-8">
                Frequently answered questions
            </Typography>
            <Typography variant="p1">
                Here you might find answers to your questions
            </Typography>
            <CustomAccordion title="Is there a rate limit?">
                <Typography variant="p1">No :)</Typography>
            </CustomAccordion>
            <CustomAccordion title="How often are rates updated?">
                <Typography variant="p1">
                    the rates are updated every 24 hours for the free plan
                </Typography>
            </CustomAccordion>
            <CustomAccordion title="When are the rate updated?">
                <Typography variant="p1">Every Day at 00:00 GMT+1</Typography>
            </CustomAccordion>
            <CustomAccordion title="Supported currencies?">
                <Typography variant="p1">
                    Currently the api supports 180 currencies with plans to add
                    crypto currencies in the future
                </Typography>
            </CustomAccordion>
        </div>
    );
}
