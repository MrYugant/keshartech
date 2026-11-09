import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { LegalPage, type LegalSection } from "@/components/layout/legal-page";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Keshar Tech collects, uses and protects personal information submitted through keshartech.com.",
  path: "/privacy-policy",
});

const sections: LegalSection[] = [
  {
    heading: "Who we are",
    body: [`This policy explains how ${siteConfig.name} ("we", "us") handles personal information collected through ${siteConfig.url}. For any privacy question, contact ${siteConfig.email}.`],
  },
  {
    heading: "Information we collect",
    body: [
      "We only collect information you choose to give us, plus limited technical data needed to run the website:",
      [
        "Enquiry details you submit through our contact form: name, company name, email address, phone number, the service you are interested in, an optional budget range and your message.",
        "Information you include when you email us directly.",
        "Technical data such as IP address, browser type and request logs, processed by our hosting provider for security and reliability.",
      ],
    ],
  },
  {
    heading: "How we use it",
    body: [
      [
        "To respond to your enquiry and discuss a potential project.",
        "To prepare proposals and communicate with you about our services you asked about.",
        "To protect the website against spam, abuse and security threats.",
      ],
      "We do not sell your personal information, and we do not use it for unrelated marketing without your consent.",
    ],
  },
  {
    heading: "Where it is stored",
    body: [
      "Enquiries may be stored in a secure database (Supabase) and delivered to our inbox through an email delivery provider. These providers process data on our behalf under their own security and privacy commitments. Access to stored enquiries is restricted to authorised team members.",
    ],
  },
  {
    heading: "Cookies and local storage",
    body: [
      "This website does not use advertising or tracking cookies. Your light or dark theme preference is saved in your browser's local storage so it is remembered on your next visit; it never leaves your device. If we introduce analytics in future, we will update this policy.",
    ],
  },
  {
    heading: "Retention",
    body: ["We keep enquiry information for as long as needed to respond and manage any resulting business relationship, and delete it when it is no longer required, unless we must keep it longer to meet legal obligations."],
  },
  {
    heading: "Your choices and rights",
    body: [`You may ask us to access, correct or delete the personal information we hold about you, or withdraw consent to further communication, by emailing ${siteConfig.email}. We will respond within a reasonable time and in line with applicable law.`],
  },
  {
    heading: "Security",
    body: ["We use encrypted connections (HTTPS), server-side validation, access controls and reputable infrastructure providers to protect your information. No method of transmission or storage is completely secure, but we work to protect your data appropriately."],
  },
  {
    heading: "Changes to this policy",
    body: ["We may update this policy from time to time. The date at the top of this page shows when it was last revised."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      path="/privacy-policy"
      intro="We respect your privacy. This page explains what information we collect, why, and the choices you have."
      sections={sections}
    />
  );
}
