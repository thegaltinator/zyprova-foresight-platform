
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <UseCases />
      <Testimonials />
      <Integrations />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
