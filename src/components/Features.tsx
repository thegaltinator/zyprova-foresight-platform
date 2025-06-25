
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, TrendingUp, DollarSign, Zap, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-zyprova-primary" />,
      title: "AI-Powered Planning",
      description: "Conversational AI that understands your business context and provides intelligent forecasting recommendations."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-zyprova-primary" />,
      title: "Dynamic Forecasting",
      description: "Real-time scenario modeling that adapts to changing market conditions and business assumptions."
    },
    {
      icon: <Users className="h-8 w-8 text-zyprova-primary" />,
      title: "Collaborative Budgeting",
      description: "Enable cross-functional teams to contribute to planning with real-time collaboration tools."
    },
    {
      icon: <Globe className="h-8 w-8 text-zyprova-primary" />,
      title: "Global Compensation Modeling",
      description: "Model compensation across different markets with built-in salary benchmarks and equity planning."
    },
    {
      icon: <Zap className="h-8 w-8 text-zyprova-primary" />,
      title: "Lightning Fast",
      description: "Generate complex financial models in minutes, not weeks. Focus on decisions, not spreadsheets."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-zyprova-primary" />,
      title: "Cash Flow Intelligence",
      description: "Advanced cash flow modeling with burn rate analysis and runway calculations for startups."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for <span className="text-zyprova-primary">modern finance teams</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to plan, forecast, and make data-driven decisions at the speed of growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <CardContent className="p-8">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
