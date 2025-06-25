
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Making Corporate Planning and Analysis{" "}
            <span className="bg-gradient-purple bg-clip-text text-transparent">
              as Easy as a Conversation
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
            Say goodbye to spreadsheets and disconnected tools. Zyprova is an all-in-one, agentic AI platform that replaces traditional spreadsheets and fragmented tools. From finance and HR to cap table management, everything is seamlessly integrated for real-time collaboration and smarter decision-making.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up">
            <Button size="lg" className="bg-gradient-purple hover:opacity-90 text-white px-8 py-4">
              Join Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-zyprova-primary text-zyprova-primary hover:bg-zyprova-primary hover:text-white px-8 py-4">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto animate-slide-up">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-2">
              <div className="bg-gradient-purple-light rounded-xl p-8 min-h-[400px] flex items-center justify-center">
                <img 
                  src="/lovable-uploads/937a9139-6da0-42fd-9ebc-8487a2dc0155.png" 
                  alt="Zyprova Financial Planning Interface" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
