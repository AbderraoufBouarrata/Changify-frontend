import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionProps } from "./Accordion.types";

export default function CustomAccordion(props: AccordionProps) {
    const { title, children, classname } = props;
    return (
        <Accordion type="single" collapsible className={classname}>
            <AccordionItem value="1">
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{children} </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
