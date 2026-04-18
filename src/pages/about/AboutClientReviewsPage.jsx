import InnerPage from '../../components/InnerPage';

export default function AboutClientReviewsPage() {
  return (
    <InnerPage
      eyebrow="About"
      title="Client reviews"
      description="Our clients trust us to keep their business websites online, secure, and consistently fast with proactive support."
      points={[
        '“Our site speed doubled in weeks.”',
        '“Unlimited edits saves us every month.”',
        '“Support actually feels like a partner.”',
        '“Migration was smooth and stress-free.”',
      ]}
      cta="Read more success stories"
    />
  );
}
