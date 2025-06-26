
import { Card, CardContent } from "@/components/ui/card";
import { Brain, TrendingUp, RefreshCw, Users, Building2, Globe, BarChart3, X, Check } from "lucide-react";
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
      icon: <RefreshCw className="h-12 w-12 text-zyprova-primary" />,
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

  const comparison = {
    traditional: [
      "Rigid spreadsheets that break easily",
      "Disconnected systems across teams",
      "Requires teams of analysts",
      "Single-vertical solutions",
      "Complex formulas and manual work"
    ],
    zyprova: [
      "Intuitive AI conversations",
      "Unified platform across Finance, HR, and Equity",
      "Empowers any executive instantly",
      "Cross-functional collaboration",
      "Natural language planning"
    ]
  };

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

        {/* Traditional vs Zyprova Comparison */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Teams Choose <span className="text-zyprova-primary">Zyprova</span>
            </h3>
            <p className="text-lg text-gray-600">
              Transform planning from a painful process into an intuitive conversation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Tools */}
            <Card className="border-2 border-red-100 bg-red-50/50">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <X className="h-12 w-12 text-red-500 mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-gray-900">Traditional Planning Tools</h4>
                </div>
                <ul className="space-y-3">
                  {comparison.traditional.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Zyprova */}
            <Card className="border-2 border-zyprova-primary/20 bg-gradient-purple-light">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Check className="h-12 w-12 text-zyprova-primary mx-auto mb-3" />
                  <h4 className="text-xl font-bold text-gray-900">Zyprova</h4>
                </div>
                <ul className="space-y-3">
                  {comparison.zyprova.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-zyprova-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 italic">
              "Planning becomes as easy as asking the right questions."
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
};

export default Features;
