import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ProductSection from "@/components/sections/ProductSection";
import ReviewSection from "@/components/sections/ReviewSection";
import TrainingSection from "@/components/sections/TrainingSection";

export default function Page() {
  return (
    <main className="w-screen ">
      <Hero />
      <ProductSection/>
      <TrainingSection/>
      <ReviewSection/>
      <NewsletterSection/>
      <Footer/>
    </main>
  );
}