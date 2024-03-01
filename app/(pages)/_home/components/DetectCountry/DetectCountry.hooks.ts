import axios from "axios";
import { useEffect, useState } from "react";
import Currencies from "@/app/_assets/json/currencies-with-flags.json";
import { axiosClient } from "@/app/_utils/client";

export default function useDetectCountry() {
    const [ipAddress, setIpAddress] = useState("");
    const [country, setCountry] = useState({
        code: "",
        name: "",
        country: "",
        countryCode: "",
        flag: "",
    });
    const [rates, setRates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            // Fetch IP address from client-side
            const response = await axios.get(
                "https://api.ipify.org?format=json",
            );
            const { ip } = response.data;
            setIpAddress(ip);

            // Fetch country based on IP address
            const countryResponse = await axios.get(
                `https://ipinfo.io/${ip}/country`,
            );
            const findCountry = Currencies.find(
                (currency) =>
                    currency.countryCode ===
                    countryResponse.data.substring(0, 2),
            );

            setCountry(findCountry as any);
            if (!findCountry) throw new Error("Country not found");
            const currencyRates = await axiosClient.get(
                `/exchange-rates/${findCountry.code}`,
            );
            setRates(currencyRates.data);
        } catch (error) {
            setIsError(true);
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { ipAddress, country, rates, isLoading, isError };
}
