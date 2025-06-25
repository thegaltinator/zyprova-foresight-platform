
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, PieChart } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: <Building2 className="h-12 w-12 text-zyprova-primary" />,
      title: "For CFOs",
      description: "Strategic financial planning",
      scenarios: [
        "Board reporting and investor updates",
        "Budget vs. actual variance analysis",
        "Multi-scenario planning for strategic decisions"
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-zyprova-primary" />,
      title: "For Founders",
      description: "Growth and fundraising planning",
      scenarios: [
        "Fundraising deck financial projections",
        "Runway extension strategies",
        "Product-market fit financial modeling"
      ]
    },
    {
      icon: <PieChart className="h-12 w-12 text-zyprova-primary" />,
      title: "For Finance Teams",
      description: "Operational financial management",
      scenarios: [
        "Headcount planning and compensation modeling",
        "Cash flow forecasting and burn analysis",
        "Cross-departmental budget collaboration"
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-purple-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for every stage of <span className="text-zyprova-primary">your growth</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From seed-stage startups to scaling companies, Zyprova adapts to your financial planning needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-zyprova-primary font-medium mb-6">
                  {useCase.description}
                </p>
                <ul className="space-y-3 text-left">
                  {useCase.scenarios.map((scenario, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-zyprova-primary mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-600">{scenario}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
