import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { LegalPage, type LegalSection } from "@/components/layout/legal-page";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms that apply to your use of the Keshar Tech website, keshartech.com.",
  path: "/terms-and-conditions",
});

const sections: LegalSection[] = [
  {
    heading: "Acceptance of these terms",
    body: [`By accessing or using ${siteConfig.url} (the "website"), you agree to these terms. If you do not agree, please do not use the website.`],
  },
  {
    heading: "Use of the website",
    body: [
      "You agree to use the website lawfully and not to:",
      [
        "Attempt to gain unauthorised access to the website, its servers or related systems.",
        "Submit false, misleading, abusive or automated (spam) enquiries.",
        "Interfere with the website's security or performance.",
      ],
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      `The ${siteConfig.name} name, logo, website design, text and graphics are owned by ${siteConfig.name} unless stated otherwise. Project names, screenshots and trademarks belonging to our clients or third parties remain the property of their respective owners and are shown to describe work we have carried out.`,
      "You may not copy, reproduce or redistribute website content without our prior written permission.",
    ],
  },
  {
    heading: "Information on this website",
    body: ["Content on this website is provided for general information about our company and services. It does not constitute a binding offer. The scope, pricing and terms of any project are set out in a separate written proposal or agreement."],
  },
  {
    heading: "Third-party links",
    body: ["The website links to external sites, including live client projects. We are not responsible for the content, availability or privacy practices of websites we do not control."],
  },
  {
    heading: "Disclaimer and limitation of liability",
    body: ["The website is provided on an \"as is\" and \"as available\" basis. To the fullest extent permitted by law, we make no warranties about its availability or accuracy and are not liable for any loss arising from your use of the website."],
  },
  {
    heading: "Privacy",
    body: ["Our handling of personal information is described in our Privacy Policy."],
  },
  {
    heading: "Changes and governing law",
    body: [
      "We may update these terms at any time; the date at the top of this page shows the latest revision. These terms are governed by the applicable laws of India.",
      `Questions about these terms can be sent to ${siteConfig.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      path="/terms-and-conditions"
      intro="Please read these terms carefully. They govern your use of our website."
      sections={sections}
    />
  );
}
