import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacypolicy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex-1 bg-[#242424] text-white p-3 pt-[100px] ">
      <div className="md:p-10">
        <h1 className=" tracking-widest text-center text-xl pb-5 md:pb-0 text-[#D9D9D9]">
          PRIVACY POLICY
        </h1>
      </div>
      <div className="flex flex-col pb-20">
        <div className="mx-auto max-w-[800px]">
          <p>Effective Date: [February 3, 2024]</p>
          <p className="pt-10">
            Arkhet ("we," "us," or "our") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            protect your personal information when you use our website
            (arkhet.com) and services.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Information We Collect
          </h2>
          <p>
            We collect the following personal information when you use our
            services: name and email address (provided when signing up for an
            account or contacting us), payment information (processed securely
            via Stripe), usage analytics (collected through Google Analytics to
            improve our services), and cookies/tracking data (used to enhance
            user experience and analyze site performance).
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            How We Use Your Information
          </h2>
          <p>
            We use the collected data to provide, maintain, and improve our
            services; process transactions securely through Stripe; communicate
            with you about updates, promotions, or support inquiries; analyze
            user interactions for service improvements using Google Analytics;
            and facilitate AI-powered design assistance via Claude.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Third-Party Services
          </h2>
          <p>
            We use third-party services, including Google Analytics to track
            website usage, Stripe to process payments, and Claude AI for design
            suggestions. We do not sell your data. Shared data is limited to
            service providers necessary for Arkhet’s functionality.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            International Data Transfers
          </h2>
          <p>
            Data may be transferred globally. For EU users, transfers outside
            the European Economic Area (EEA) use GDPR-compliant safeguards such
            as Standard Contractual Clauses.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Legal Basis for Processing
          </h2>
          <p>
            We process data based on contractual necessity (to deliver
            services), legitimate business interests, and consent (for optional
            features).
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Cookies and Tracking Technologies
          </h2>
          <p>
            Arkhet.com uses cookies and similar tracking technologies to improve
            user experience. You may disable cookies in your browser settings,
            though this may affect website functionality.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Data Retention & User Rights
          </h2>
          <p>
            We do not offer direct control over data deletion. Requests for
            deletion will be manually reviewed within 30 business days and
            processed based on legal obligations and platform security
            requirements. Users may request a copy of their personal data or
            object to AI-driven decisions by contacting us at
            contact@arkhet.com.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            GDPR/CCPA Compliance
          </h2>
          <p>
            For users in the European Union and California: Arkhet acknowledges
            GDPR and CCPA compliance rights. You may request access, correction,
            restriction, or deletion of personal data by contacting us. We
            respond to verifiable requests within 45 days. In the event of a
            data breach affecting user security, we will notify impacted users
            via email within 72 hours of discovery.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Security Measures
          </h2>
          <p>
            We implement standard security measures to protect user data.
            However, no method of internet transmission is completely secure,
            and we cannot guarantee absolute security.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Children's Privacy
          </h2>
          <p>
            Arkhet does not knowingly collect personal information from children
            under 13 (or 16 in certain regions). Users under 18 must provide
            parental consent. Age verification may be requested. If we discover
            unauthorized collection of minors’ data, we will take steps to
            remove it.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Automated Decision-Making
          </h2>
          <p>
            Users may contest AI-generated outcomes impacting their rights by
            contacting us at contact@arkhet.com.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically. Users will be
            notified of material changes via email and/or dashboard
            notifications. Continued use of our services after changes
            constitutes acceptance of the updated policy. Archived versions are
            available on request.
          </p>

          <h2 className="font-bold py-2 pt-10 text-2xl workfont">
            Contact Information
          </h2>
          <p>
            For privacy-related inquiries, contact us at contact@arkhet.com.
          </p>
        </div>
      </div>
    </main>
  );
}
