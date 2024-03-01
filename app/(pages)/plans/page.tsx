import React from "react";
import Plan from "./_components/Plan";
import Typography from "@/app/_components/Typography";
import { CornerDownRight } from "lucide-react";

export default function page() {
    return (
        <div
            id="plans"
            className="mt-16 grid scroll-m-8 grid-flow-row grid-cols-3 grid-rows-4 gap-8"
        >
            <Typography
                variant="h2"
                className="col-span-3 row-span-1 w-full text-center"
            >
                Our Plans
            </Typography>
            <Plan
                title="Free"
                description="Free plan"
                className="col-span-3 row-span-3 lg:col-span-1"
            >
                <Typography variant="p1">
                    This is our free plan, it offers unlimited access to our api
                    without rate limiting:
                </Typography>
                <ul>
                    <li className="flex items-center gap-4 ">
                        <CornerDownRight
                            height={20}
                            width={20}
                            className="mt-4"
                        />
                        <Typography variant="p1">
                            Unlimited access to our api
                        </Typography>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <CornerDownRight
                            height={20}
                            width={20}
                            className="mt-4"
                        />
                        <Typography variant="p1">
                            Currency Rates updates every 24 hours
                        </Typography>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <CornerDownRight
                            height={20}
                            width={20}
                            className="mt-4"
                        />
                        <Typography variant="p1">
                            Might run into down time due to hosting and
                            maintenance
                        </Typography>
                    </li>
                </ul>
            </Plan>
            <Plan
                title="Coming Soon"
                description="New Plans for professional use?"
                className="col-span-3 row-span-3 lg:col-span-1"
            >
                <Typography variant="p1">
                    More Plans Are coming for professional use, here is what to
                    expect:
                </Typography>
                <ul>
                    <li className="flex items-center gap-4 ">
                        <CornerDownRight
                            height={20}
                            width={20}
                            className="mt-4"
                        />
                        <Typography variant="p1">
                            Unlimited Access to our api
                        </Typography>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <CornerDownRight
                            height={20}
                            width={20}
                            className="mt-4"
                        />
                        <Typography variant="p1">
                            Currency Rates updates more often
                        </Typography>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <CornerDownRight
                            height={20}
                            width={20}
                            className="mt-4"
                        />
                        <Typography variant="p1">No down time</Typography>
                    </li>
                </ul>
            </Plan>
            <Plan
                title="Coming Soon"
                description="New Plans for professional use?"
                className="col-span-3 row-span-3 lg:col-span-1"
            >
                <Typography variant="p1">
                    More Plans Are coming for professional use, here is what to
                    expect:
                </Typography>
                <ul>
                    <li className="flex items-center gap-4 ">
                        <CornerDownRight
                            height={20}
                            width={20}
                            className="mt-4"
                        />
                        <Typography variant="p1">
                            Unlimited Access to our api
                        </Typography>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <CornerDownRight
                            height={20}
                            width={20}
                            className="mt-4"
                        />
                        <Typography variant="p1">
                            Currency Rates updates more often
                        </Typography>
                    </li>
                    <li className="flex items-center gap-4 ">
                        <CornerDownRight
                            height={20}
                            width={20}
                            className="mt-4"
                        />
                        <Typography variant="p1">No down time</Typography>
                    </li>
                </ul>
            </Plan>
        </div>
    );
}
