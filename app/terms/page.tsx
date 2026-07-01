import { LegalLayout } from "@/components/legal-layout";

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: (
        <>
          <p>
            Welcome to Rechargic. By accessing or using our website (rechargic.in) or mobile application (collectively, the "Platform"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all of these Terms, you must not access or use the Platform.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you ("User" or "you") and IGNIVOX TECH PRIVATE LIMITED ("Rechargic", "we", "us", or "our").
          </p>
        </>
      ),
    },
    {
      id: "eligibility",
      title: "2. Eligibility & Account Registration",
      content: (
        <>
          <p>
            To use certain features of the Platform, you must register for an account. By registering, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You are at least 18 years of age or possess legal parental/guardian consent.</li>
            <li>You will provide accurate, current, and complete information during registration.</li>
            <li>You will maintain the security and confidentiality of your account credentials.</li>
            <li>You accept full responsibility for all activities that occur under your account.</li>
          </ul>
        </>
      ),
    },
    {
      id: "services",
      title: "3. Scope of Services",
      content: (
        <>
          <p>
            Rechargic operates as a digital utility payment ecosystem. We facilitate mobile prepaid recharges, DTH top-ups, postpaid mobile settlements, electricity, water, LPG gas, and broadband bill payments, credit card bill settlements, and FASTag recharges (collectively, the "Services").
          </p>
          <p>
            Rechargic acts as an intermediary connecting you with the respective utility providers, billers, and mobile network operators. We do not control, own, or operate the utility services themselves.
          </p>
        </>
      ),
    },
    {
      id: "payments",
      title: "4. Payments & Billing",
      content: (
        <>
          <p>
            All payments made on the Platform are processed through secure third-party payment gateways. You agree to pay all charges, fees, and applicable taxes associated with your transactions on Rechargic.
          </p>
          <p>
            You must only use payment instruments (credit cards, debit cards, UPI accounts, net banking, or wallets) that you are legally authorized to operate. Rechargic is not liable for unauthorized payment usage.
          </p>
        </>
      ),
    },
    {
      id: "convenience-fees",
      title: "5. Convenience Fees & Charges",
      content: (
        <>
          <p>
            Rechargic reserves the right to charge convenience fees, processing fees, or platform fees for facilitating transactions. Any such fee will be clearly disclosed to you on the Platform prior to final checkout.
          </p>
          <p>
            These fees are non-refundable unless specified otherwise in our Cancellation and Refund Policy.
          </p>
        </>
      ),
    },
    {
      id: "conduct",
      title: "6. Acceptable Use & User Conduct",
      content: (
        <>
          <p>
            You agree to use the Platform only for lawful purposes. You are strictly prohibited from:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Using the Platform for money laundering, unauthorized cash outs, or illegal activities.</li>
            <li>Attempting to bypass security systems, introducing malware, or engaging in DDoS attacks.</li>
            <li>Engaging in fraudulent chargebacks or initiating false billing disputes.</li>
            <li>Copying, scraping, modifying, or reverse-engineering any code or assets of the Platform.</li>
          </ul>
        </>
      ),
    },
    {
      id: "intellectual-property",
      title: "7. Intellectual Property Rights",
      content: (
        <>
          <p>
            All content, graphics, user interface designs, logo designs, icons, codebase, and documentation on this Platform are the intellectual property of IGNIVOX TECH PRIVATE LIMITED, protected by applicable copyright, trademark, and intellectual property laws.
          </p>
          <p>
            No part of this Platform may be replicated, distributed, or modified without our express, prior written consent.
          </p>
        </>
      ),
    },
    {
      id: "warranties",
      title: "8. Disclaimer of Warranties",
      content: (
        <>
          <p>
            The Platform and Services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p>
            We do not warrant that transaction processing will be completely uninterrupted, secure, or error-free at all times, as operations depend partly on third-party operators and bank servers.
          </p>
        </>
      ),
    },
    {
      id: "liability",
      title: "9. Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, IGNIVOX TECH PRIVATE LIMITED and its affiliates, directors, or employees shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising out of your use or inability to use the Platform.
          </p>
          <p>
            In no event shall our total liability for any claim exceed the fee paid by you to Rechargic for the specific transaction out of which the dispute arose.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      title: "10. Governing Law & Dispute Resolution",
      content: (
        <>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India.
          </p>
          <p>
            Any disputes arising out of or in connection with these Terms, including any questions regarding their existence, validity, or termination, shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      title: "11. Contact Details",
      content: (
        <>
          <p>
            If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us:
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 mt-4 text-sm">
            <p><strong>Email:</strong> support@rechargic.in</p>
            <p><strong>Website:</strong> rechargic.in</p>
            <p><strong>Corporate Entity:</strong> IGNIVOX TECH PRIVATE LIMITED</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using the Rechargic utility payment platform. By accessing our services, you agree to these legal obligations."
      lastUpdated="July 1, 2026"
      sections={sections}
    />
  );
}
