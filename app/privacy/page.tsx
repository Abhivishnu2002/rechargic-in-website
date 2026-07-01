import { LegalLayout } from "@/components/legal-layout";

export default function PrivacyPage() {
  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      content: (
        <>
          <p>
            At Rechargic, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how IGNIVOX TECH PRIVATE LIMITED ("Rechargic", "we", "us", or "our") collects, uses, discloses, and safeguards your information when you visit or use our Platform (rechargic.in) or mobile application.
          </p>
          <p>
            Please read this policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access or use the Platform.
          </p>
        </>
      ),
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      content: (
        <>
          <p>
            We collect information about you in a variety of ways. This information may include:
          </p>
          <div className="space-y-4">
            <p><strong>A. Personal Identifiable Information (PII)</strong></p>
            <p className="text-sm">
              We collect names, mobile numbers, email addresses, billing addresses, and payment authentication details when you register, make transactions, or communicate with our support desk.
            </p>
            
            <p><strong>B. Transaction and Utility Data</strong></p>
            <p className="text-sm">
              We collect details of transactions you carry out through our Platform (such as recharge amounts, DTH card numbers, electricity consumer numbers, FASTag details, and payment statuses) to complete services.
            </p>

            <p><strong>C. Device and Log Information</strong></p>
            <p className="text-sm">
              When you access our Platform, our servers automatically collect details such as your IP address, browser type, operating system, device identifiers, app usage statistics, and page views.
            </p>
          </div>
        </>
      ),
    },
    {
      id: "use-of-information",
      title: "3. How We Use Your Information",
      content: (
        <>
          <p>
            We use the collected information to deliver and maintain our services. Specific purposes include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Processing payments and top-up transactions with telecom and utility boards.</li>
            <li>Providing order confirmations, receipts, and customer support.</li>
            <li>Detecting, preventing, and prosecuting fraud, abuse, and security violations.</li>
            <li>Personalizing user experiences and sending updates, promotions, and newsletter alerts.</li>
            <li>Complying with applicable financial laws, legal orders, and regulatory standards.</li>
          </ul>
        </>
      ),
    },
    {
      id: "sharing-information",
      title: "4. How We Share Your Information",
      content: (
        <>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We share information only in the following contexts:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Payment Gateways & Banks:</strong> To process secure transactions, your details are shared with certified payment aggregators.</li>
            <li><strong>Service Providers:</strong> To operate the core functions (recharges and billers), specific utility numbers and payment amounts are sent to respective operators.</li>
            <li><strong>Legal & Regulatory Authorities:</strong> We may disclose information if required by law, court order, or governmental authorities to prevent fraudulent acts.</li>
          </ul>
        </>
      ),
    },
    {
      id: "security",
      title: "5. Data Security",
      content: (
        <>
          <p>
            We take data security very seriously. Rechargic implements industry-standard administrative, physical, and electronic security measures to safeguard your information against unauthorized access, loss, alteration, or misuse.
          </p>
          <p>
            All network communication on our Platform is encrypted using Secure Socket Layer (SSL/TLS) protocols. However, please note that no internet transmission or digital storage method is 100% secure, and we cannot guarantee absolute security.
          </p>
        </>
      ),
    },
    {
      id: "retention",
      title: "6. Data Retention",
      content: (
        <>
          <p>
            We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy, or as required by law (e.g., for taxation, auditing, and compliance purposes).
          </p>
          <p>
            When we have no ongoing legitimate business need to process your personal information, we will delete or anonymize it.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      title: "7. Cookies & Tracking Technologies",
      content: (
        <>
          <p>
            We use cookies, web beacons, and tracking pixels to analyze user traffic, customize services, and measure marketing campaign performance.
          </p>
          <p>
            You can modify your browser settings to refuse cookies if you prefer. However, disabling cookies may cause some features of the Platform to function incorrectly.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "8. Contact Us",
      content: (
        <>
          <p>
            If you have questions, comments, or complaints about this Privacy Policy or our data practices, please get in touch:
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 mt-4 text-sm">
            <p><strong>Email:</strong> support@rechargic.in</p>
            <p><strong>Corporate Entity:</strong> IGNIVOX TECH PRIVATE LIMITED</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Your privacy is extremely important to us. This Privacy Policy details the types of information we collect, how we protect it, and your rights concerning your personal data."
      lastUpdated="July 1, 2026"
      sections={sections}
    />
  );
}
