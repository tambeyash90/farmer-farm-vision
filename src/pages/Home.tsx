import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap, Shield, BarChart3, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-accent" />
            <span className="text-2xl font-bold text-foreground">AffiliPro</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">Features</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-smooth">About</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
          </nav>
          <div className="flex space-x-3">
            <Link to="/auth">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link to="/auth">
              <Button size="sm" className="accent-button">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Scale Your Affiliate 
              <span className="text-accent"> Marketing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Advanced tools and analytics to maximize your affiliate revenue. 
              Track performance, optimize campaigns, and grow your network with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="cta-button text-lg px-8 py-4">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 gradient-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive affiliate marketing tools designed to boost your performance and revenue.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <BarChart3 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground ml-3">Advanced Analytics</h3>
              </div>
              <p className="text-muted-foreground">
                Real-time tracking and detailed insights into your campaign performance, conversions, and revenue.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground ml-3">Smart Targeting</h3>
              </div>
              <p className="text-muted-foreground">
                AI-powered audience targeting to maximize your conversion rates and optimize ad spend.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground ml-3">Network Management</h3>
              </div>
              <p className="text-muted-foreground">
                Manage your affiliate network, track partner performance, and automate payouts.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground ml-3">Automation Tools</h3>
              </div>
              <p className="text-muted-foreground">
                Automate campaign optimization, bid management, and performance reporting.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground ml-3">Fraud Protection</h3>
              </div>
              <p className="text-muted-foreground">
                Advanced fraud detection to protect your campaigns and ensure quality traffic.
              </p>
            </div>

            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-accent/10 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground ml-3">Performance Optimization</h3>
              </div>
              <p className="text-muted-foreground">
                ML-driven optimization suggestions to improve your ROI and scale successful campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built for Modern Marketers
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                AffiliPro combines cutting-edge technology with intuitive design to deliver 
                the most comprehensive affiliate marketing platform available today.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-foreground">Real-time performance tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-foreground">AI-powered insights and recommendations</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-foreground">Seamless integration with major platforms</span>
                </div>
              </div>
            </div>
            <div className="gradient-subtle rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-accent mb-2">98%</div>
              <p className="text-lg font-semibold text-foreground mb-2">Client Satisfaction</p>
              <p className="text-muted-foreground">Our users see an average 40% increase in revenue within 90 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Affiliate Marketing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful affiliates who have scaled their business with AffiliPro.
          </p>
          <Link to="/auth">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-accent" />
                <span className="text-xl font-bold text-foreground">AffiliPro</span>
              </div>
              <p className="text-muted-foreground">
                The ultimate platform for affiliate marketing success.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Features</li>
                <li>Pricing</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Status</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 AffiliPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;