import InnerPage from '../../components/InnerPage';

export default function ServicesWebsiteFixPage() {
  return (
    <InnerPage
      eyebrow="Services"
      title="Website fix"
      description="Broken, hacked, or unstable website? We diagnose issues, recover functionality, and harden your WordPress setup fast."
      points={[
        'Malware cleanups and recovery',
        'Critical bug and error fixes',
        'Performance and stability tuning',
        'Post-fix maintenance coverage',
      ]}
      cta="Fix my website"
    />
  );
}
