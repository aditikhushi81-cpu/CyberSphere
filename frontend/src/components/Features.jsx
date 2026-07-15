import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="px-10 py-24">

      <h2 className="text-5xl font-bold text-center mb-16">
        Why Choose CyberSphere
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <FeatureCard
          icon="🛡️"
          title="Threat Detection"
          description="Detect cyber threats using AI-powered security analysis."
        />

        <FeatureCard
          icon="🤖"
          title="AI Assistant"
          description="Get instant cybersecurity guidance powered by artificial intelligence."
        />

        <FeatureCard
          icon="📊"
          title="Analytics"
          description="Visualize reports, attacks and security performance."
        />

        <FeatureCard
          icon="🔐"
          title="Digital Forensics"
          description="Investigate cyber incidents using professional forensic tools."
        />

      </div>

    </section>
  );
}

export default Features;