import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px] ">
      <div className="md:p-10">
        <h1 className=" tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          TERMS & CONDITIONS
        </h1>
      </div>
      <div className="flex flex-col pb-20">
        <div className="mx-auto max-w-[800px]">
          <p>Effective Date: [February 3, 2024]</p>
          <p className="pt-10">
            Welcome to Arkhet! By accessing or using our website (arkhet.com),
            you agree to the following Terms & Conditions
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            User Accounts
          </h2>
          <p>
            Users must create an account to access certain features. Users under
            18 may be required to undergo age verification. Users are solely
            responsible for maintaining the confidentiality of their account
            credentials and liable for all activity under their account.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Subscription & Payments
          </h2>
          <p>
            Arkhet operates on a monthly subscription model with a 14-day free
            trial. Users receive a reminder email 3 days before the trial ends;
            failure to cancel before trial expiration initiates billing.
            Payments are processed securely via Stripe. Users may cancel anytime
            via account settings. All payments are non-refundable after the
            trial period.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            AI Disclaimer
          </h2>
          <p>
            Our AI-powered tools (powered by Claude AI) provide design
            suggestions. AI-generated outputs may not always be accurate,
            unique, or error-free. These outputs are not guaranteed to be free
            from copyright infringement and may contain unintended bias or
            offensive content. Users must verify outputs before using them for
            critical purposes.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Intellectual Property
          </h2>
          <p>
            Users retain full ownership and intellectual property rights over
            designs created using Arkhet. Arkhet claims no rights to
            user-generated content.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            User Conduct
          </h2>
          <p>
            Users agree not to use Arkhet for unlawful purposes, attempt
            unauthorized system access, or distribute harmful/malicious content.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Content Moderation
          </h2>
          <p>
            Arkhet reserves the right to remove user-generated content violating
            our policies and suspend accounts at its discretion.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Service Availability
          </h2>
          <p>
            Arkhet is not liable for losses arising from service disruptions,
            including for users relying on the platform for time-sensitive
            projects. While we strive for uptime, we do not guarantee
            uninterrupted access. Downtime may occur due to maintenance,
            technical issues, or events beyond our control (e.g., natural
            disasters, internet outages)
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Termination Policy
          </h2>
          <p>
            Users may cancel accounts at any time. Arkhet reserves the right to
            suspend accounts violating these terms. Accounts terminated for
            policy violations forfeit all subscription fees; no refunds will be
            issued. Sections addressing liability, dispute resolution, and
            intellectual property remain active post-termination.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Warranty Disclaimer
          </h2>
          <p>
            Arkhet provides services “as is” without warranties of
            merchantability, fitness for purpose, or non-infringement.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Dispute Resolution
          </h2>
          <p>
            Parties must attempt informal negotiation before legal action. Users
            waive rights to pursue class actions or jury trials; disputes will
            be resolved individually through arbitration. These terms are
            governed by the laws of Vancouver, Canada.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Governing Law
          </h2>
          <p>
            These Terms & Conditions are governed by the laws of Vancouver,
            Canada.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Refund Policy
          </h2>
          <p>
            All subscription payments are non-refundable once billing begins. No
            prorated refunds are issued for cancellations.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Acceptable Use Policy
          </h2>
          <p>
            Users must not engage in activities violating laws/regulations,
            disrupting service for others, or exploiting Arkhet’s services
            harmfully.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Limitation of Liability
          </h2>
          <p>
            Arkhet is not liable for indirect, incidental, or consequential
            damages arising from service use. Total liability is limited to
            subscription fees paid in the preceding 12 months.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Accessibility
          </h2>
          <p>
            Arkhet strives to comply with WCAG 2.1 accessibility standards.
            Contact us for accommodations.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Legal Protections
          </h2>
          <p>
            If any term is deemed unenforceable, the remaining terms remain
            valid. These terms supersede all prior agreements. Arkhet may seek
            urgent court orders to stop harmful user actions without waiting for
            arbitration.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Modifications to Terms
          </h2>
          <p>
            We reserve the right to update these Terms & Conditions. Material
            changes will be communicated via email and dashboard notifications
            30 days in advance. Continued use constitutes acceptance.
          </p>
          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Contact Information
          </h2>
          <p>For questions, contact us at contact@arkhet.com.</p>
          <p className="py-5">
            By using Arkhet, you agree to these terms. Discontinue use
            immediately if you disagree
          </p>
        </div>
      </div>
    </main>
  );
}
