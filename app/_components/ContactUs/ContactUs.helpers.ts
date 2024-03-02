import { axiosClient } from "@/app/_utils/client";

export const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get("email"),
        password: data.get("message"),
    });
    try {
        const response = await axiosClient.post("/contact", {
            email: data.get("email"),
            message: data.get("message"),
        });
        if (response.data.status === "success") {
            alert("Email sent successfully");
            return response.data;
        }
    } catch (error) {
        throw new Error("Problem sending email");
    }
};
