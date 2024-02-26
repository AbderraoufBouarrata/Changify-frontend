import React from "react";
import Loading from "./_assets/animations/Loading";

export default function loading() {
    return (
        <div className="flex items-center justify-center min-h-24">
            <Loading />
        </div>
    );
}
