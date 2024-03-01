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
import DetectCountry from "./(pages)/_home/components/DetectCountry";
dotenv.config();
export default function Home() {
    return (
        <div
            id="convert"
            className="mt-4 grid scroll-m-8 grid-flow-row grid-cols-3 grid-rows-2 gap-4"
        >
            <div className="col-span-3 md:col-span-2">
                <CardErrorBoudary>
                    <Suspense fallback={<Loading />}>
                        <ConvertCard />
                    </Suspense>
                </CardErrorBoudary>
            </div>

            <div className="col-span-3 md:col-span-1">
                <CardErrorBoudary>
                    <Suspense fallback={<Loading />}>
                        <BuildCard />
                        {/* TODO: fix this hydration error */}
                    </Suspense>
                </CardErrorBoudary>
            </div>
            <div className="col-span-3">
                <CardErrorBoudary>
                    <Suspense fallback={<Loading />}>
                        <LinkCard />
                    </Suspense>
                </CardErrorBoudary>
            </div>
            <div className="col-span-3">
                <DetectCountry />
            </div>
        </div>
    );
}
