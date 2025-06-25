
import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, Sync, Users, Building2, Globe, BarChart3 } from "lucide-react";
import { useState } from "react";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: <Brain className="h-12 w-12 text-zyprova-primary" />,
      title: "Conversational AI Planning",
      shortDescription: "Ask questions, run forecasts, and explore insights — all in plain English.",
      fullDescription: "Zyprova's conversational AI planning tool enables founders, CFOs, and operations teams to speak directly to their data. No coding. No formulas. Just intelligent, real-time insights."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-zyprova-primary" />,
      title: "Real-Time Scenario Modeling",
      shortDescription: "Compare best-case, base-case, and worst-case projections instantly.",
      fullDescription: "Model how changes in headcount, revenue, or capital affect your runway and growth trajectory in seconds."
    },
    {
      icon: <Sync className="h-12 w-12 text-zyprova-primary" />,
      title: "Auto-Sync with Core Systems",
      shortDescription: "Integrate seamlessly with your HRIS, accounting, and equity platforms.",
      fullDescription: "Zyprova automatically syncs with your key systems to ensure that every model is accurate, live, and up-to-date."
    },
    {
      icon: <Users className="h-12 w-12 text-zyprova-primary" />,
      title: "Headcount & Hiring Plan Modeling",
      shortDescription: "Plan workforce growth with precision.",
      fullDescription: "Forecast team size, project compensation costs, and adapt to changes in hiring strategy in real time."
    },
    {
      icon: <Building2 className="h-12 w-12 text-zyprova-primary" />,
      title: "Unified Planning Across Teams",
      shortDescription: "Enable true cross-functional collaboration.",
      fullDescription: "Zyprova centralizes your planning workflows, allowing finance, HR, and operations teams to work together — with version history, inline comments, and access controls."
    },
    {
      icon: <Globe className="h-12 w-12 text-zyprova-primary" />,
      title: "Global Compensation",
      shortDescription: "Managing a distributed team? Zyprova helps you forecast total compensation.",
      fullDescription: "Managing a distributed team? Zyprova helps you forecast total compensation from salary, bonuses that aligns with corporate compensation strategy."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-zyprova-primary" />,
      title: "Board-Ready Reporting & Dashboards",
      shortDescription: "Generate investor-grade reports and real-time dashboards with ease.",
      fullDescription: "Customize reports by department, business unit, or investor preference. Export with a click and deliver insights that impress."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key <span className="text-zyprova-primary">Features</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to plan, forecast, and make data-driven decisions at the speed of growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                selectedFeature === index ? 'ring-2 ring-zyprova-primary scale-105' : 'hover:-translate-y-2'
              }`}
              onClick={() => setSelectedFeature(selectedFeature === index ? null : index)}
            >
              <CardContent className="p-8 text-center">
                <div className={`mb-4 transition-transform duration-300 ${
                  selectedFeature === index ? 'scale-110' : 'group-hover:scale-110'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.shortDescription}
                </p>
                {selectedFeature === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-fade-in">
                    <p className="text-zyprova-primary font-medium">
                      {feature.fullDescription}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Traditional planning tools trap you in rigid spreadsheets and disconnected systems. Zyprova transforms planning into an intuitive AI conversation across Finance, HR, and Equity—all in one platform.
          </p>
          <p className="text-gray-600">
            While traditional solutions require teams of analysts for single-vertical solutions, Zyprova empowers any executive to create and analyze plans instantly through natural language. Planning becomes as easy as asking the right questions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
