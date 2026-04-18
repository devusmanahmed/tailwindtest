import InnerPage from '../../components/InnerPage';

export default function ServicesWordPressHostingPage() {
  return (
    <InnerPage
      eyebrow="Services"
      title="WordPress hosting"
      description="Managed WordPress hosting with speed optimization, proactive maintenance, and complete website care in one annual plan."
      points={[
        '90+ performance target',
        'Updates and maintenance included',
        'Security and backup coverage',
        'Unlimited website edits',
      ]}
      cta="Host your website now"
    />
  );
}
