import Typography from "@/app/_components/Typography";
import React from "react";

export default function page() {
    return (
        <div className="grid gap-4">
            <Typography variant="h2" className="mt-8">
                Privacy Policy
            </Typography>
            <Typography variant="p1">
                This Privacy Policy describes how Changify collects, uses, and
                protects the personal information you provide on our website
                changify and any associated APIs. By using our services, you
                agree to the collection and use of information in accordance
                with this policy.
            </Typography>

            <Typography variant="h3">1. Information We Collect</Typography>
            <Typography variant="p1">
                1.1. Personal Information: We may collect personal information
                such as your name, email address, phone number, and payment
                information when you register an account, make transactions, or
                communicate with us.
            </Typography>
            <Typography variant="p1">
                1.2. Usage Data: We may collect information about how you access
                and use our website and API, including your IP address, browser
                type, operating system, referral URLs, pages viewed, and
                interactions with our services.
            </Typography>

            <Typography variant="h3">2. Use of Information</Typography>
            <Typography variant="p1">
                2.1. Provide and Improve Services: We use the information we
                collect to provide, maintain, and improve our website and API,
                including processing transactions, enhancing user experience,
                and developing new features.
            </Typography>

            <Typography variant="p1">
                2.2. Communications: We may use your email address to send you
                transactional or promotional messages, newsletters, updates, and
                other communications related to our services. You can opt-out of
                receiving promotional emails by following the unsubscribe
                instructions provided in the email.
            </Typography>

            <Typography variant="h3">3. Data Security</Typography>
            <Typography variant="p1">
                3.1. Security Measures: We implement appropriate technical and
                organizational measures to protect the security and
                confidentiality of your personal information against
                unauthorized access, disclosure, alteration, or destruction.
            </Typography>
            <Typography variant="p1">
                3.2. Third-party Services: We may use third-party service
                providers to assist us in operating our website and API, such as
                hosting providers, payment processors, and analytics services.
                These third parties have access to your personal information
                only to perform specific tasks on our behalf and are obligated
                not to disclose or use it for any other purpose.
            </Typography>

            <Typography variant="h3">4. Data Retention</Typography>
            <Typography variant="p1">
                4.1. We retain your personal information only for as long as
                necessary to fulfill the purposes for which it was collected,
                including legal, accounting, or reporting requirements.
            </Typography>

            <Typography variant="h3">5. Your Rights</Typography>
            <Typography variant="p1">
                5.1. Access and Update: You have the right to access and update
                your personal information at any time by logging into your
                account settings or contacting us directly.
            </Typography>
            <Typography variant="p1">
                5.2. Deletion: You may request the deletion of your personal
                information from our systems, subject to any legal obligations
                or legitimate interests.
            </Typography>

            <Typography variant="h3">6. Children's Privacy</Typography>
            <Typography variant="p1">
                6.1. Our services are not intended for individuals under the age
                of 18. We do not knowingly collect or solicit personal
                information from minors. If you believe that a minor has
                provided us with personal information, please contact us
                immediately.
            </Typography>
            <Typography variant="h3">
                7. Changes to this Privacy Policy
            </Typography>
            <Typography variant="p1">
                7.1. We reserve the right to update or revise this Privacy
                Policy at any time without prior notice. We will post the
                revised policy on our website and update the "Last Updated" date
                accordingly.
            </Typography>
            <Typography variant="h3">8. Contact Us</Typography>
            <Typography variant="p1">
                8.1. If you have any questions or concerns about this Privacy
                Policy, please contact us at [Your Contact Email Address].
            </Typography>
        </div>
    );
}
