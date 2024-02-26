import BuildCard from "./(pages)/_home/components/BuildCard";
import ConvertCard from "./(pages)/_home/components/ConvertCard";
import LinkCard from "./(pages)/_home/components/LinkCard";
import CardErrorBoudary from "./_components/Errors/CardFallback";

export default function Home() {
    return (
        <div
            id="convert"
            className="grid grid-cols-3 grid-rows-2 grid-flow-row gap-4 mt-4"
        >
            <div className="col-span-3 md:col-span-2">
                <CardErrorBoudary>
                    <ConvertCard />
                </CardErrorBoudary>
            </div>

            <div className="col-span-3 md:col-span-1">
                <CardErrorBoudary>
                    <BuildCard />
                </CardErrorBoudary>
            </div>
            <div className="col-span-3">
                <CardErrorBoudary>
                    <LinkCard />
                </CardErrorBoudary>
            </div>
        </div>
    );
}
