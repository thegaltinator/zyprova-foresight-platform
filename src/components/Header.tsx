
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-purple bg-clip-text text-transparent">
          Zyprova
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-600 hover:text-zyprova-primary transition-colors">Home</a>
          <a href="#features" className="text-gray-600 hover:text-zyprova-primary transition-colors">Features</a>
          <a href="#use-cases" className="text-gray-600 hover:text-zyprova-primary transition-colors">Use Cases</a>
          <a href="#integrations" className="text-gray-600 hover:text-zyprova-primary transition-colors">Integrations</a>
          <a href="/about" className="text-gray-600 hover:text-zyprova-primary transition-colors">About Us</a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-600 hover:text-zyprova-primary">
            Sign In
          </Button>
          <Button className="bg-gradient-purple hover:opacity-90 text-white">
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b shadow-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#home" className="text-gray-600 hover:text-zyprova-primary">Home</a>
              <a href="#features" className="text-gray-600 hover:text-zyprova-primary">Features</a>
              <a href="#use-cases" className="text-gray-600 hover:text-zyprova-primary">Use Cases</a>
              <a href="#integrations" className="text-gray-600 hover:text-zyprova-primary">Integrations</a>
              <a href="/about" className="text-gray-600 hover:text-zyprova-primary">About Us</a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost">Sign In</Button>
                <Button className="bg-gradient-purple text-white">Join Waitlist</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
