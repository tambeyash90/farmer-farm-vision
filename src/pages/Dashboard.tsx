import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target, 
  BarChart3, 
  Settings,
  Bell,
  Search,
  Plus,
  ExternalLink,
  ArrowUpRight,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$47,329",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Campaigns",
      value: "24",
      change: "+3",
      icon: Target,
      color: "text-blue-600"
    },
    {
      title: "Total Clicks",
      value: "156,845",
      change: "+8.2%",
      icon: Activity,
      color: "text-purple-600"
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+0.4%",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const campaigns = [
    {
      name: "Summer Sale 2024",
      status: "Active",
      revenue: "$12,450",
      clicks: 45621,
      conversions: 1456,
      ctr: "3.2%"
    },
    {
      name: "Black Friday Preview",
      status: "Paused",
      revenue: "$8,330",
      clicks: 28453,
      conversions: 892,
      ctr: "3.1%"
    },
    {
      name: "Holiday Collection",
      status: "Active",
      revenue: "$15,670",
      clicks: 52341,
      conversions: 1789,
      ctr: "3.4%"
    }
  ];

  const offers = [
    {
      title: "Premium E-commerce Platform",
      commission: "40%",
      payout: "$200",
      category: "Software",
      trending: true
    },
    {
      title: "Fitness Supplement Bundle",
      commission: "25%",
      payout: "$75",
      category: "Health",
      trending: false
    },
    {
      title: "Online Course Marketing",
      commission: "50%",
      payout: "$150",
      category: "Education",
      trending: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex h-16 items-center px-6">
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-accent" />
            <span className="font-bold text-lg">AffiliPro</span>
          </Link>
          
          <div className="ml-auto flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <input 
                type="search"
                placeholder="Search campaigns..."
                className="pl-9 pr-4 py-2 w-64 rounded-md border border-input bg-background text-sm"
              />
            </div>
            <Button variant="outline" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button size="sm" className="accent-button">
              <Plus className="h-4 w-4 mr-1" />
              New Campaign
            </Button>
          </div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back! Here's your performance overview.</p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline">Export Report</Button>
            <Button className="cta-button">View Analytics</Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="feature-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <p className={`text-xs ${stat.color} font-medium`}>
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Active Campaigns */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Active Campaigns</CardTitle>
                    <CardDescription>Monitor your campaign performance</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {campaigns.map((campaign, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <h3 className="font-medium text-foreground">{campaign.name}</h3>
                          <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <div className="flex space-x-6 mt-2 text-sm text-muted-foreground">
                          <span>Revenue: {campaign.revenue}</span>
                          <span>Clicks: {campaign.clicks.toLocaleString()}</span>
                          <span>CTR: {campaign.ctr}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Offers */}
          <div>
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Featured Offers</CardTitle>
                <CardDescription>High-converting opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {offers.map((offer, index) => (
                  <div key={index} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-sm text-foreground leading-tight">{offer.title}</h4>
                      {offer.trending && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Commission:</span>
                        <span className="font-medium text-foreground">{offer.commission}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Payout:</span>
                        <span className="font-medium text-foreground">{offer.payout}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Category:</span>
                        <Badge variant="outline" className="text-xs">{offer.category}</Badge>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-3">
                      Get Link
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="feature-card">
            <CardHeader className="text-center">
              <Target className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Campaign Builder</CardTitle>
              <CardDescription>Create and launch new campaigns with our intuitive builder</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button className="accent-button">
                Start Building
              </Button>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardHeader className="text-center">
              <Users className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Network Growth</CardTitle>
              <CardDescription>Expand your affiliate network and find new partners</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline">
                Browse Partners
              </Button>
            </CardContent>
          </Card>

          <Card className="feature-card">
            <CardHeader className="text-center">
              <BarChart3 className="h-8 w-8 text-accent mx-auto mb-2" />
              <CardTitle className="text-lg">Advanced Analytics</CardTitle>
              <CardDescription>Dive deep into your performance metrics and insights</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline">
                View Reports
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;