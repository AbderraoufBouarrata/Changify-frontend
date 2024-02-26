"use client";
const BuildCard = React.lazy(
    () => import("./(pages)/_home/components/BuildCard"),
);
const ConvertCard = React.lazy(
    () => import("./(pages)/_home/components/ConvertCard"),
);
const LinkCard = React.lazy(
    () => import("./(pages)/_home/components/LinkCard"),
);
import React, { Suspense } from "react";
import CardErrorBoudary from "./_components/Errors/CardFallback";
import dotenv from "dotenv";
import Loading from "./_assets/animations/Loading";
dotenv.config();
export default function Home() {
    return (
        <div
            id="convert"
            className="mt-4 grid grid-flow-row grid-cols-3 grid-rows-2 gap-4"
        >
            <div className="col-span-3 md:col-span-2">
                <Suspense fallback={<Loading />}>
                    <CardErrorBoudary>
                        <ConvertCard />
                    </CardErrorBoudary>
                </Suspense>
            </div>

            <div className="col-span-3 md:col-span-1">
                <Suspense fallback={<Loading />}>
                    <CardErrorBoudary>
                        <BuildCard />
                    </CardErrorBoudary>
                </Suspense>
            </div>
            <div className="col-span-3">
                <Suspense fallback={<Loading />}>
                    <CardErrorBoudary>
                        <LinkCard />
                    </CardErrorBoudary>
                </Suspense>
            </div>
        </div>
    );
}
