import Hero from "@/components/landing/hero";
import SuccessStats from "@/components/landing/success-stats";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <SuccessStats />
      </main>
    </div>
  );
}
