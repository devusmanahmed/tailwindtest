import InnerPage from '../../components/InnerPage';

export default function AboutWhoWeArePage() {
  return (
    <InnerPage
      eyebrow="About"
      title="Who we are"
      description="BlackBuck Host is a managed WordPress partner focused on speed, stability, and stress-free website operations for business owners."
      points={[
        'Specialized WordPress experts',
        'Business-first service model',
        'Transparent fixed annual pricing',
        'Hands-on technical support',
      ]}
      cta="Start with BlackBuck Host"
    />
  );
}
