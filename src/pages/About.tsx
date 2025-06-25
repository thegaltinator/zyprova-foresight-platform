
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              className="mb-8 text-zyprova-primary hover:text-zyprova-dark"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-purple bg-clip-text text-transparent">Zyprova</span>
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                Zyprova transforms planning from a static, finance-only task into an ongoing, intuitive conversation. Built for cross-functional teams, our platform connects Finance, HR, and Equity Management—so anyone can create, adjust, and analyze plans using natural language.
              </p>
              
              <Card className="bg-white border-0 shadow-lg mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600 mb-4">
                    We replace fragmented tools with a single system that supports budgeting, scenario modeling, global compensation planning, and equity forecasting—making it easy for teams to collaborate in real time without relying on spreadsheets.
                  </p>
                  <p className="text-gray-600">
                    With an Agentic AI approach, Zyprova empowers both finance and non-finance leaders to make faster, more informed decisions. Whether you're a financial analyst, an HR team modeling headcount, or a founder syncing hiring plans with your cap table, Zyprova brings clarity, speed, and alignment to every part of your business.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-purple-light border-0 shadow-lg mb-8">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Built for Modern Startups</h2>
                  <p className="text-gray-600 mb-6">
                    Whether you're a pre-seed founder building your first model or a Series B finance lead preparing investor updates, Zyprova grows with your company.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                        <h3 className="font-semibold text-zyprova-primary">Unified Planning</h3>
                      </div>
                      <p className="text-sm text-gray-600">Plan across Finance, HR, and Equity in one platform</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                        <h3 className="font-semibold text-zyprova-primary">Conversational AI</h3>
                      </div>
                      <p className="text-sm text-gray-600">Create plans through natural language, not spreadsheets</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                        <h3 className="font-semibold text-zyprova-primary">Executive Accessibility</h3>
                      </div>
                      <p className="text-sm text-gray-600">Any leader can analyze and adjust plans instantly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make Planning Effortless?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join the new generation of founders and operators using Zyprova to streamline planning, improve forecasting, and build investor confidence — all without a single spreadsheet.
                </p>
                <Button size="lg" className="bg-gradient-purple hover:opacity-90 text-white px-8 py-4">
                  Join Waitlist Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
