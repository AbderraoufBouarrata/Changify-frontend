"use client";
import React from "react";
import Typography from "../Typography";
import Logo from "@/app/_assets/icons/Logo";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="absolute left-1/2 mt-8 flex w-full -translate-x-1/2 transform justify-center bg-green-600 text-white dark:bg-zinc-950">
            <div
                id="convert"
                className="grid w-full grid-flow-col grid-cols-4 grid-rows-2 gap-4 px-4 py-12 md:grid-rows-1 xl:px-0"
                style={{ maxWidth: "1366px" }}
            >
                <div className="col-span-4 grid items-center justify-center gap-4 md:col-span-2 md:justify-start">
                    <div className="flex items-center gap-4">
                        <Logo fill="white" />
                        <Typography variant="h3">Changify</Typography>
                    </div>
                    <p>Changify © {year} all rights reserved</p>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <ul className="grid gap-1">
                        <a href="/">
                            <li>Home</li>
                        </a>
                        <a href="#convert">
                            <li>Convert</li>
                        </a>
                        <a href="/faq">
                            <li>FAQ</li>
                        </a>
                        <a href="/documentation">
                            <li>Documentation</li>
                        </a>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <ul className="grid gap-1">
                        <a href="/plans" target="_blank">
                            <li>Plans</li>
                        </a>
                        <a href="/terms-of-usage" target="_blank">
                            <li>Terms of usage</li>
                        </a>
                        <a href="/privacy-policy" target="_blank">
                            <li>Privacy Policy</li>
                        </a>
                        <a href="/about-us" target="_blank">
                            <li>About Us</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}
