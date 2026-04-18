import InnerPage from '../../components/InnerPage';

export default function AboutServersTechnologyPage() {
  return (
    <InnerPage
      eyebrow="About"
      title="Servers & technology"
      description="We run on AWS cloud architecture with modern caching, hardening, and monitoring to deliver premium WordPress performance."
      points={[
        'AWS infrastructure foundation',
        'Elastic scalability',
        'Security-first stack',
        'Continuous uptime monitoring',
      ]}
      cta="Explore hosting architecture"
    />
  );
}
