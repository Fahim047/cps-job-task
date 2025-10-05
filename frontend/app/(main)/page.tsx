import CourseSyllabus from "@/components/landing/course-syllabus";
import FAQ from "@/components/landing/faq";
import Hero from "@/components/landing/hero";
import Instructors from "@/components/landing/instructors";
import KeyFeatures from "@/components/landing/key-features";
import SuccessStats from "@/components/landing/success-stats";
import Testimonials from "@/components/landing/testimonials";
import { landingQuery } from "@/data/strapi-query/query";
import { fetchStrapiData } from "@/lib/utils";

export default async function Home() {
  const globalData = await fetchStrapiData("api/landing-page", landingQuery);
  return (
    <main>
      <Hero />
      <SuccessStats />
      <KeyFeatures />
      <CourseSyllabus />
      <Instructors />
      <Testimonials />
      <FAQ faqs={globalData.faqs} />
    </main>
  );
}
