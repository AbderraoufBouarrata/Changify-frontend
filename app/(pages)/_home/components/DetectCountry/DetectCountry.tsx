import React, { useState, useEffect } from "react";
import axios from "axios";
import useDetectCountry from "./DetectCountry.hooks";
import { Button } from "@/components/ui/button";
import Loading from "@/app/_assets/animations/Loading";
import Typography from "@/app/_components/Typography";
import Currencies from "@/app/_assets/json/currencies-with-flags.json";
import { Table } from "lucide-react";

function DetectCountry() {
    const { isLoading, ipAddress, country, isError, rates } =
        useDetectCountry();
    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : isError ? (
                <>
                    <pre>
                        problem fetching the data, consider disabling ad blocker
                        and try again
                    </pre>
                    <Button
                        variant="destructive"
                        onClick={() => window.location.reload()}
                    >
                        Try again
                    </Button>
                </>
            ) : (
                <div>
                    <Typography variant="h3">Auto Convert Currency</Typography>
                    <br />
                    <p>
                        Your Country: <strong>{country.country}</strong>
                    </p>
                    <div className="my-8 h-96 overflow-y-auto">
                        <table className="w-full  text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                            <thead className="bg-slate-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Base Currency
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        To Currency
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Rate
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {rates.map((rate: any, index: number) => (
                                    <tr
                                        key={index}
                                        className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                                    >
                                        <td className="px-6 py-4">
                                            {rate.fromCurrency}
                                        </td>
                                        <td className="px-6 py-4">
                                            {rate.toCurrency}
                                        </td>
                                        <td className="px-6 py-4">
                                            {rate.rate}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DetectCountry;
