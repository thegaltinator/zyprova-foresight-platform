
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, PieChart, Users, BarChart3, Eye } from "lucide-react";
import { useState } from "react";

const UseCases = () => {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);

  const roles = [
    {
      icon: <Building2 className="h-12 w-12 text-zyprova-primary" />,
      title: "CFOs",
      subtitle: "Financial Planning with Confidence",
      shortDescription: "Build dynamic, AI-powered forecasts in plain English",
      features: [
        "Run real-time scenario modeling for revenue, burn, hiring, and funding",
        "Replace siloed tools with unified xP&A software solution",
        "Generate board-ready dashboards in minutes",
        "Go deep: drill down to individual vendors, accounts, or budget line items",
        "Coordinate across departments with centralized, auditable workflows"
      ]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-zyprova-primary" />,
      title: "Financial Analysts",
      subtitle: "Go From Reactive to Strategic",
      shortDescription: "Automate variance analysis and budget vs actuals",
      features: [
        "Forecast by scenario, department, or cost center",
        "Get answers fast using conversational AI—no Excel lookup needed",
        "Drill into metrics with full version control and collaboration tools",
        "Generate automated reports and insights"
      ]
    },
    {
      icon: <PieChart className="h-12 w-12 text-zyprova-primary" />,
      title: "Cap Table Managers",
      subtitle: "Integrate Equity Into Planning",
      shortDescription: "Map dilution into your hiring and compensation strategy",
      features: [
        "Sync with your cap table tools to forecast equity burn and option pool usage",
        "Model fundraising rounds and exit scenarios dynamically",
        "Connect equity strategy with real-time FP&A"
      ]
    },
    {
      icon: <Users className="h-12 w-12 text-zyprova-primary" />,
      title: "CEOs & Non-Finance Leaders",
      subtitle: "Clarity From the Boardroom to the Vendor List",
      shortDescription: "Test 'what-if' scenarios as easily as asking a question",
      features: [
        "Access up-to-date data instantly for on-the-spot decision making",
        "Make decisions backed by unified Finance, HR, and Equity data",
        "Plan and adjust as business conditions change, not just during formal cycles",
        "Understand financial implications of your decisions without spreadsheet complexity"
      ]
    },
    {
      icon: <Eye className="h-12 w-12 text-zyprova-primary" />,
      title: "Investors",
      subtitle: "Stay in the Loop Without the Chasing",
      shortDescription: "Give investors access to real-time dashboards and pre-filtered reports",
      features: [
        "Automatically generate investor-ready summaries",
        "Streamlined channels for better company performance understanding",
        "Keep them informed without last-minute deck requests or Excel dumps",
        "Maintain transparency while keeping full control over what's shared"
      ]
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-purple-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Zyprova Delivers — <span className="text-zyprova-primary">Role by Role</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for every stage of your growth, from seed-stage startups to scaling companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card 
              key={index} 
              className={`bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                selectedRole === index ? 'ring-2 ring-zyprova-primary scale-105' : 'hover:-translate-y-2'
              }`}
              onClick={() => setSelectedRole(selectedRole === index ? null : index)}
            >
              <CardContent className="p-8 text-center">
                <div className={`mb-6 flex justify-center transition-transform duration-300 ${
                  selectedRole === index ? 'scale-110' : ''
                }`}>
                  {role.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {role.title}
                </h3>
                <p className="text-zyprova-primary font-medium mb-4">
                  {role.subtitle}
                </p>
                <p className="text-gray-600 mb-6">
                  {role.shortDescription}
                </p>
                
                {selectedRole === index && (
                  <div className="animate-fade-in">
                    <ul className="space-y-3 text-left">
                      {role.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-zyprova-primary mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
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

export default UseCases;
