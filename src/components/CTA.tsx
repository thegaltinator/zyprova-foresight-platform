
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTA = () => {
  const benefits = [
    "Plan Smarter",
    "Forecast Faster", 
    "Decide with Confidence",
    "No spreadsheets required"
  ];

  return (
    <section className="py-20 bg-gradient-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make Planning Effortless?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join the new generation of founders and operators using Zyprova to streamline planning, improve forecasting, and build investor confidence — all without a single spreadsheet.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-zyprova-primary hover:bg-gray-100 px-8 py-4 font-semibold">
              Join Waitlist Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zyprova-primary px-8 py-4">
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-white/70 mt-6">
            Questions? Contact our team at{" "}
            <a href="mailto:hello@zyprova.com" className="text-white underline">
              hello@zyprova.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
