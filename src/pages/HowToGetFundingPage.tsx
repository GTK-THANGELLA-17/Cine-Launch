
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, DollarSign, TrendingUp, Shield, Globe, Zap } from "lucide-react";

const HowToGetFundingPage = () => {
  const navigate = useNavigate();

  const fundingSteps = [
    {
      step: 1,
      title: "Prepare Your Project",
      description: "Create a compelling project proposal with clear goals, timeline, and budget breakdown.",
      icon: <Shield className="h-6 w-6" />,
      tips: ["Write a detailed project description", "Create a realistic budget", "Prepare visual materials"]
    },
    {
      step: 2,
      title: "Build Your Campaign",
      description: "Craft an engaging campaign page that tells your story and showcases your vision.",
      icon: <Globe className="h-6 w-6" />,
      tips: ["Use high-quality images and videos", "Write compelling copy", "Set attractive rewards"]
    },
    {
      step: 3,
      title: "Launch & Promote",
      description: "Go live with your campaign and actively promote it across all channels.",
      icon: <Zap className="h-6 w-6" />,
      tips: ["Share on social media", "Reach out to your network", "Engage with backers regularly"]
    }
  ];

  const fundingTypes = [
    {
      title: "Crowdfunding",
      description: "Raise funds from a large number of people who believe in your project",
      amount: "$1,000 - $500,000",
      success: "85%",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Investor Funding",
      description: "Secure investment from film industry professionals and investors",
      amount: "$10,000 - $2,000,000",
      success: "45%",
      icon: <DollarSign className="h-8 w-8" />
    },
    {
      title: "Grant Programs",
      description: "Apply for government and private grants for film projects",
      amount: "$5,000 - $100,000",
      success: "30%",
      icon: <TrendingUp className="h-8 w-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Fund Your Film Dreams
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover multiple pathways to secure funding for your film project and bring your creative vision to life.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => navigate('/submit-project')}
          >
            Start Your Campaign
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Funding Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Funding Options</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the funding approach that best fits your project's needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fundingTypes.map((type, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 bg-card border-border">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit text-primary">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl mb-2 text-card-foreground">{type.title}</CardTitle>
                  <CardDescription className="text-center text-muted-foreground">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Typical Range</p>
                      <p className="text-lg font-semibold text-primary">{type.amount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Success Rate</p>
                      <Badge variant="secondary" className="text-lg px-3 py-1 bg-secondary text-secondary-foreground">
                        {type.success}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">How to Get Started</h2>
            <p className="text-xl text-muted-foreground">
              Follow these steps to launch a successful funding campaign.
            </p>
          </div>

          <div className="space-y-12">
            {fundingSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">{step.icon}</div>
                    <h3 className="text-2xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 text-lg">{step.description}</p>
                  <ul className="space-y-2">
                    {step.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of filmmakers who have successfully funded their projects through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => navigate('/submit-project')}
            >
              Submit Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border text-foreground hover:bg-secondary"
              onClick={() => navigate('/projects')}
            >
              Browse Success Stories
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowToGetFundingPage;
