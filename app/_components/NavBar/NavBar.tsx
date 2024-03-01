"use client";
import { useMediaQuery } from "@/app/_hooks/useMediaQuery";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { MenuIcon, Sun, Moon, ChevronRight } from "lucide-react";
import Logo from "@/app/_assets/icons/Logo";
import React from "react";
import Typography from "../Typography";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function NavBar() {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const { theme, setTheme } = useTheme();
    const navLinks = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Plans",
            link: "/plans",
        },
        {
            name: "FAQ",
            link: "/faq",
        },
    ];
    return (
        <div className="flex h-24 items-center justify-between py-4">
            <div className="flex items-center gap-4">
                <Logo />
                <Typography variant="h3">Changify</Typography>
            </div>
            {isDesktop && (
                <nav>
                    <ul className="flex items-center gap-12 lg:gap-24">
                        {navLinks.map(({ name, link }) => (
                            <li key={name}>
                                <a href={link}>{name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            <div className="flex items-center gap-4">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                        setTheme(theme === "light" ? "dark" : "light")
                    }
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
                {isDesktop ? (
                    <a href="/documentation" target="_blank">
                        <Button
                            variant="default"
                            className="flex items-center gap-4"
                        >
                            Go to Docs <ChevronRight className="h-4 w-4" />
                        </Button>
                    </a>
                ) : (
                    <Drawer direction="right">
                        <DrawerTrigger>
                            <MenuIcon width={32} height={32} />
                        </DrawerTrigger>
                        <DrawerContent>
                            <nav>
                                <ul className="flex flex-col justify-center gap-8">
                                    {navLinks.map(({ name, link }) => (
                                        <li key={name}>
                                            <a href={link}>{name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <a
                                href="/documentation"
                                target="_blank w-full"
                                className="mt-8"
                            >
                                <Button
                                    variant="default"
                                    className="flex w-full items-center gap-4"
                                >
                                    Go to Docs{" "}
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </a>
                        </DrawerContent>
                    </Drawer>
                )}
            </div>
        </div>
    );
}
