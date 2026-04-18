import InnerPage from '../../components/InnerPage';

export default function ServicesWebDesignPage() {
  return (
    <InnerPage
      eyebrow="Services"
      title="Web design"
      description="Conversion-focused design updates that improve clarity, trust, and lead generation while keeping your brand consistent."
      points={[
        'Modern SaaS-inspired layout design',
        'Clear hierarchy and better readability',
        'Responsive mobile-first approach',
        'Brand-consistent visual refreshes',
      ]}
      cta="Request a design upgrade"
    />
  );
}
