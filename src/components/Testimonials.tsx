
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CFO at TechFlow",
      company: "Series B SaaS",
      content: "Zyprova cut our financial planning time from weeks to hours. The AI suggestions are incredibly accurate and save us from manual errors.",
      rating: 5,
      timesaved: "15 hours/week"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder",
      company: "GrowthLabs",
      content: "The scenario modeling helped us secure our Series A by showing investors exactly how we'd use their capital. Game-changing for fundraising.",
      rating: 5,
      timeaved: "Secured Series A"
    },
    {
      name: "Emily Watson",
      role: "VP Finance",
      company: "ScaleUp Inc",
      content: "Finally, a tool that lets our whole team contribute to planning without breaking our models. Collaboration has never been this smooth.",
      rating: 5,
      timeSaved: "Team productivity +40%"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-zyprova-primary">growth-stage companies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how finance teams are saving time and making better decisions with Zyprova.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-zyprova-primary font-medium">{testimonial.company}</p>
                    </div>
                    {testimonial.timeaved && (
                      <div className="text-center">
                        <p className="text-sm font-bold text-zyprova-primary">{testimonial.timeaved}</p>
                        <p className="text-xs text-gray-500">improvement</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
