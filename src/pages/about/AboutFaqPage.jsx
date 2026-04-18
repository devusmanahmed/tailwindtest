import InnerPage from '../../components/InnerPage';

export default function AboutFaqPage() {
  return (
    <InnerPage
      eyebrow="About"
      title="FAQs"
      description="Quick answers to common questions about onboarding, support, updates, and our managed WordPress care plan."
      points={[
        'Can you migrate my site? Yes.',
        'Do you support custom themes? Yes.',
        'Is there a contract lock-in? No.',
        'Do you offer a guarantee? 14-day money-back.',
      ]}
      cta="Contact support"
    />
  );
}
