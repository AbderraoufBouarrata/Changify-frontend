import Typography from "@/app/_components/Typography";
import React from "react";

export default function page() {
    return (
        <div className="grid gap-4">
            <Typography variant="h2" className="mt-8">
                Terms of service
            </Typography>
            <Typography variant="p1">
                By accessing or using Changify and any associated APIs, you
                agree to be bound by these terms of service, as well as our
                Privacy Policy. If you disagree with any part of these terms,
                please do not access or use our services.
            </Typography>

            <Typography variant="h3">1. Use of Services</Typography>
            <Typography variant="p1">
                1.1. You must be at least 18 years old to use our services.
            </Typography>
            <Typography variant="p1">
                1.2. You agree to use our services only for lawful purposes and
                in compliance with all applicable laws and regulations.
            </Typography>
            <Typography variant="p1">
                1.3. You are solely responsible for maintaining the
                confidentiality of your account and password and for restricting
                access to your account. You agree to accept responsibility for
                all activities that occur under your account.
            </Typography>

            <Typography variant="h3">2. Currency Exchange Services</Typography>
            <Typography variant="p1">
                2.1. Our website and API provide currency exchange services for
                informational purposes only. We do not guarantee the accuracy,
                completeness, or reliability of any exchange rate data provided.
            </Typography>

            <Typography variant="p1">
                2.2. You acknowledge that currency exchange rates are subject to
                fluctuation and may vary between different sources. We are not
                liable for any inaccuracies or errors in exchange rate data.
            </Typography>

            <Typography variant="h3">3. User Content</Typography>
            <Typography variant="p1">
                3.1. You retain ownership of any content you submit or upload to
                our website or API, including but not limited to comments,
                reviews, and feedback.
            </Typography>
            <Typography variant="p1">
                3.2. By submitting content, you grant us a worldwide,
                royalty-free, non-exclusive license to use, reproduce, modify,
                adapt, publish, translate, and distribute your content in any
                medium and for any purpose.
            </Typography>

            <Typography variant="h3">4. Intellectual Property</Typography>
            <Typography variant="p1">
                4.1. All content and materials on our website and API, including
                but not limited to text, graphics, logos, button icons, images,
                audio clips, digital downloads, data compilations, and software,
                are the property of Changify or its licensors and are protected
                by copyright, trademark, and other intellectual property laws.
            </Typography>

            <Typography variant="p1">
                4.2. You may not use our trademarks, logos, or service marks in
                connection with any product or service that is not ours, in any
                manner that is likely to cause confusion among customers, or in
                any manner that disparages or discredits us.
            </Typography>

            <Typography variant="h3">5. Limitation of Liability</Typography>
            <Typography variant="p1">
                5.1. In no event shall Changify be liable for any direct,
                indirect, incidental, special, consequential, or punitive
                damages arising out of or in any way connected with the use of
                our website or API, whether based on warranty, contract, tort,
                or any other legal theory.
            </Typography>

            <Typography variant="h3">6. Indemnification</Typography>
            <Typography variant="p1">
                6.1. You agree to indemnify and hold Changify harmless from any
                claims, damages, liabilities, costs, or expenses (including
                attorney's fees) arising out of or in connection with your use
                of our website or API, your violation of these terms of service,
                or your violation of any rights of another party.
            </Typography>
            <Typography variant="h3">7. Modifications to Terms</Typography>
            <Typography variant="p1">
                7.1. Changify reserves the right to modify or update these terms
                of service at any time without prior notice. By continuing to
                use our services after any changes are made, you agree to be
                bound by the revised terms.
            </Typography>
            <Typography variant="h3">8. Governing Law</Typography>
            <Typography variant="p1">
                8.1. These terms of service shall be governed by and construed
                in accordance with the laws of [Your Jurisdiction], without
                regard to its conflict of law provisions.
            </Typography>
            <Typography variant="h3">9. Contact Us</Typography>
            <Typography variant="p1">
                9.1. If you have any questions or concerns about these terms of
                service, please contact us at Contact form.
            </Typography>
        </div>
    );
}
