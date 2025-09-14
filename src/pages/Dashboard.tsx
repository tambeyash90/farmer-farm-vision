import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Leaf, 
  Droplets, 
  Thermometer, 
  TrendingUp, 
  MessageCircle, 
  Bug, 
  Cloud, 
  Users, 
  Bell, 
  Settings,
  BarChart3,
  Camera,
  AlertTriangle,
  CheckCircle,
  Activity
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [notifications] = useState([
    { id: 1, type: "warning", message: "Low soil moisture detected in Field A", time: "2 hours ago" },
    { id: 2, type: "success", message: "Optimal growing conditions in Field B", time: "4 hours ago" },
    { id: 3, type: "info", message: "Weather alert: Rain expected tomorrow", time: "6 hours ago" }
  ]);

  const soilData = {
    ph: 6.8,
    moisture: 45,
    nitrogen: 78,
    phosphorus: 65,
    potassium: 72
  };

  const features = [
    {
      title: "Soil Analytics",
      description: "Real-time IoT sensor data from your fields",
      icon: Activity,
      status: "active",
      color: "bg-success/10 text-success",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{soilData.ph}</div>
              <div className="text-sm text-muted-foreground">pH Level</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-primary">{soilData.moisture}%</div>
              <div className="text-sm text-muted-foreground">Moisture</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm">Nitrogen</span>
              <span className="text-sm font-medium">{soilData.nitrogen}%</span>
            </div>
            <Progress value={soilData.nitrogen} className="h-2" />
            <div className="flex justify-between items-center">
              <span className="text-sm">Phosphorus</span>
              <span className="text-sm font-medium">{soilData.phosphorus}%</span>
            </div>
            <Progress value={soilData.phosphorus} className="h-2" />
            <div className="flex justify-between items-center">
              <span className="text-sm">Potassium</span>
              <span className="text-sm font-medium">{soilData.potassium}%</span>
            </div>
            <Progress value={soilData.potassium} className="h-2" />
          </div>
        </div>
      )
    },
    {
      title: "Price Predictions",
      description: "AI-powered market forecasting",
      icon: TrendingUp,
      status: "trending",
      color: "bg-warning/10 text-warning",
      content: (
        <div className="space-y-4">
          <div className="text-center p-4 gradient-subtle rounded-lg">
            <div className="text-2xl font-bold text-primary">₹2,450</div>
            <div className="text-sm text-muted-foreground">Predicted price per quintal</div>
            <Badge className="mt-2 bg-success/10 text-success">+12% this week</Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            Based on weather conditions, market demand, and historical data analysis.
          </div>
        </div>
      )
    },
    {
      title: "Weather Intelligence",
      description: "7-day forecast with farming insights",
      icon: Cloud,
      status: "updated",
      color: "bg-primary/10 text-primary",
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-muted/30 rounded">
              <div className="text-lg">☀️</div>
              <div className="text-xs">Today</div>
              <div className="text-xs">28°C</div>
            </div>
            <div className="p-2 bg-muted/30 rounded">
              <div className="text-lg">🌧️</div>
              <div className="text-xs">Tomorrow</div>
              <div className="text-xs">25°C</div>
            </div>
            <div className="p-2 bg-muted/30 rounded">
              <div className="text-lg">⛅</div>
              <div className="text-xs">Wed</div>
              <div className="text-xs">26°C</div>
            </div>
          </div>
          <div className="p-3 bg-warning/5 border border-warning/20 rounded-lg">
            <div className="text-sm font-medium text-warning">Rain Alert</div>
            <div className="text-xs text-muted-foreground">Heavy rain expected tomorrow. Consider covering sensitive crops.</div>
          </div>
        </div>
      )
    },
    {
      title: "Smart Assistant",
      description: "AI chatbot for farming guidance",
      icon: MessageCircle,
      status: "available",
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Pest Management",
      description: "Pesticide suggestions & natural alternatives",
      icon: Bug,
      status: "monitoring",
      color: "bg-destructive/10 text-destructive"
    },
    {
      title: "Farmer Network",
      description: "Connect with local farming community",
      icon: Users,
      status: "active",
      color: "bg-secondary/30 text-secondary-foreground"
    }
  ];

  const handleFeatureClick = (title: string) => {
    toast({
      title: `Opening ${title}`,
      description: "This feature will be available soon with full functionality.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 gradient-leaf rounded-xl flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Farm Dashboard</h1>
                <p className="text-sm text-muted-foreground">Welcome back, John Farmer</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="relative">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 bg-destructive text-destructive-foreground text-xs flex items-center justify-center">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="feature-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Fields</p>
                  <p className="text-2xl font-bold text-primary">4</p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Activity className="w-6 h-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Soil Health</p>
                  <p className="text-2xl font-bold text-primary">87%</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Weather Score</p>
                  <p className="text-2xl font-bold text-primary">Good</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Cloud className="w-6 h-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Predicted Yield</p>
                  <p className="text-2xl font-bold text-primary">+15%</p>
                </div>
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-warning" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div key={notification.id} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="mt-0.5">
                    {notification.type === "warning" && <AlertTriangle className="w-4 h-4 text-warning" />}
                    {notification.type === "success" && <CheckCircle className="w-4 h-4 text-success" />}
                    {notification.type === "info" && <Bell className="w-4 h-4 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="feature-card cursor-pointer group"
              onClick={() => handleFeatureClick(feature.title)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-spring`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              {feature.content && (
                <>
                  <Separator className="mx-6" />
                  <CardContent className="pt-4">
                    {feature.content}
                  </CardContent>
                </>
              )}
              {!feature.content && (
                <CardContent>
                  <Button variant="outline" className="w-full group-hover:bg-primary/5 group-hover:border-primary/30">
                    Open {feature.title}
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;