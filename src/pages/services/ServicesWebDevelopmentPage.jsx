import InnerPage from '../../components/InnerPage';

export default function ServicesWebDevelopmentPage() {
  return (
    <InnerPage
      eyebrow="Services"
      title="Web development"
      description="Reliable WordPress development for landing pages, custom functionality, and technical improvements aligned with business goals."
      points={[
        'Custom section and page development',
        'Performance-minded implementation',
        'Plugin and API integrations',
        'Ongoing developer-led support',
      ]}
      cta="Talk to a developer"
    />
  );
}
