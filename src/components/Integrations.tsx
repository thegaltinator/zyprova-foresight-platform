
import { Card, CardContent } from "@/components/ui/card";

const Integrations = () => {
  const integrations = [
    { name: "QuickBooks", logo: "💼", category: "Accounting" },
    { name: "Xero", logo: "📊", category: "Accounting" },
    { name: "NetSuite", logo: "🏢", category: "ERP" },
    { name: "Salesforce", logo: "☁️", category: "CRM" },
    { name: "Slack", logo: "💬", category: "Communication" },
    { name: "HubSpot", logo: "🎯", category: "CRM" },
    { name: "Stripe", logo: "💳", category: "Payments" },
    { name: "Google Sheets", logo: "📈", category: "Spreadsheets" }
  ];

  return (
    <section id="integrations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connects with your <span className="text-zyprova-primary">existing stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamlessly integrate with the tools you already use. No data silos, no manual imports.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{integration.logo}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{integration.name}</h3>
                <p className="text-sm text-gray-500">{integration.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Can't find your tool? We're constantly adding new integrations.
          </p>
          <a href="#" className="text-zyprova-primary font-medium hover:underline">
            Request an integration →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
