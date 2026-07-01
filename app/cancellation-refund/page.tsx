import { LegalLayout } from "@/components/legal-layout";

export default function CancellationRefundPage() {
  const sections = [
    {
      id: "overview",
      title: "1. Policy Overview",
      content: (
        <>
          <p>
            IGNIVOX TECH PRIVATE LIMITED ("Rechargic", "we", "us", or "our") strives to provide a highly efficient, automated digital payment experience for utility bills, recharges, DTH top-ups, and more. This Cancellation and Refund Policy outlines the terms under which transactions can be cancelled, how refunds are processed, and the timelines for credit settlements.
          </p>
          <p>
            By making a transaction on our Platform (rechargic.in), you acknowledge and agree to the guidelines detailed herein.
          </p>
        </>
      ),
    },
    {
      id: "cancellations",
      title: "2. Cancellation Policy",
      content: (
        <>
          <p>
            Due to the real-time processing of digital recharges and utility bill payments:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Successful Payments:</strong> Once a recharge, DTH top-up, FASTag payment, or utility bill settlement is successfully completed by the platform and verified by the billing operator, it <strong>cannot be cancelled, reversed, or recalled</strong>.</li>
            <li><strong>Pending Payments:</strong> In rare cases where a transaction remains "Pending" on our servers, it will be evaluated automatically. If the operator fails to confirm success within 24 hours, the transaction will be marked as failed and a refund will be initiated.</li>
          </ul>
        </>
      ),
    },
    {
      id: "refunds-failed",
      title: "3. Refunds for Failed Transactions",
      content: (
        <>
          <p>
            If money has been debited from your bank account, card, net banking, or UPI wallet, but the transaction fails to complete (e.g., the recharge fails or the utility board does not accept the payment), you are fully entitled to a refund.
          </p>
          <p>
            Rechargic will automatically initiate the refund process once the transaction status is confirmed as "Failed". You do not need to raise a manual ticket for failed transactions, though our support desk is always open to assist.
          </p>
        </>
      ),
    },
    {
      id: "refund-timelines",
      title: "4. Refund Processing & Timelines",
      content: (
        <>
          <p>
            All refunds are credited directly back to the original source account (the payment method you used to make the purchase, such as your debit card, credit card, bank account, or UPI handle).
          </p>
          <p>
            The refund timelines are as follows:
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3 mt-4 text-sm">
            <p><strong>• UPI Transactions:</strong> Generally settled within 2 to 3 business days.</p>
            <p><strong>• Net Banking / Debit Card:</strong> Settled within 3 to 5 business days.</p>
            <p><strong>• Credit Card Transactions:</strong> Settled within 5 to 7 business days.</p>
          </div>
          <p className="text-xs text-white/40 mt-2">
            Note: These timelines are subject to bank processing cycles and bank holidays.
          </p>
        </>
      ),
    },
    {
      id: "incorrect-details",
      title: "5. User Error and Incorrect Information",
      content: (
        <>
          <p>
            Please double-check all details before completing your transaction. Rechargic is not liable to offer refunds, compensation, or credit under the following circumstances:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You provided an incorrect mobile number, DTH subscriber ID, consumer number, gas account number, or credit card number.</li>
            <li>You selected the wrong operator, circle, utility board, or tariff plan.</li>
            <li>A utility company charges late fees due to payments initiated after the due date.</li>
          </ul>
        </>
      ),
    },
    {
      id: "disputes",
      title: "6. Customer Support for Payment Issues",
      content: (
        <>
          <p>
            If your account was debited, the transaction failed, and you have not received credit within 7 business days, please reach out to us with the payment confirmation details and transaction ID:
          </p>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-2 mt-4 text-sm">
            <p><strong>Support Email:</strong> support@rechargic.in</p>
            <p><strong>Expected Response Time:</strong> Within 24-48 hours (excluding public holidays).</p>
          </div>
        </>
      ),
    },
  ];

  return (
    <LegalLayout
      title="Cancellation & Refund Policy"
      subtitle="Understand the criteria for cancellations and refunds on Rechargic, including guidelines on failed payments and refund processing windows."
      lastUpdated="July 1, 2026"
      sections={sections}
    />
  );
}
