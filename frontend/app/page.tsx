import Hero from "@/components/landing/hero";
import KeyFeatures from "@/components/landing/key-features";
import SuccessStats from "@/components/landing/success-stats";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <SuccessStats />
        <KeyFeatures />
      </main>
    </div>
  );
}
