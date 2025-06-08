
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Film, Award, Users, CreditCard, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Film className="h-10 w-10 text-cinelaunch-gold" />,
      title: "Film Funding Platform",
      description: "CineLaunch connects filmmakers with supporters who believe in their vision, providing a platform to raise funds for film projects of all scales."
    },
    {
      icon: <Award className="h-10 w-10 text-cinelaunch-gold" />,
      title: "Support Creative Vision",
      description: "We help bring unique stories to life by connecting passionate filmmakers with audiences who appreciate distinctive cinema."
    },
    {
      icon: <Users className="h-10 w-10 text-cinelaunch-gold" />,
      title: "Filmmaker Community",
      description: "Join a thriving community of filmmakers, enthusiasts, and supporters passionate about independent cinema and creative storytelling."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-cinelaunch-gold" />,
      title: "Secure Transactions",
      description: "Our platform ensures safe, transparent transactions across multiple currencies and payment methods for global participation."
    },
    {
      icon: <Globe className="h-10 w-10 text-cinelaunch-gold" />,
      title: "Global Reach",
      description: "Connect with supporters worldwide with multi-currency support and international payment options to maximize your project's potential."
    }
  ];

  const stats = [
    { value: "₹50M+", label: "Funded" },
    { value: "500+", label: "Projects" },
    { value: "25K+", label: "Filmmakers" },
    { value: "100K+", label: "Supporters" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-12"
    >
      <div className="container px-4 sm:px-6">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            variants={itemAnimation}
            className="inline-flex items-center gap-2 mb-4"
          >
            <Film className="h-6 w-6 text-cinelaunch-gold" />
            <h2 className="font-display text-xl font-semibold text-gradient-gold animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.cinelaunch.gold),theme(colors.amber.300),theme(colors.yellow.500),theme(colors.amber.300),theme(colors.cinelaunch.gold))] bg-[length:200%_auto]">
              About CineLaunch
            </h2>
          </motion.div>
          
          <motion.h1 
            variants={itemAnimation}
            className="text-3xl md:text-5xl font-display font-bold mb-6 text-white"
          >
            Empowering the Future of <span className="text-gradient-gold animate-shimmer bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.cinelaunch.gold),theme(colors.amber.300),theme(colors.yellow.500),theme(colors.amber.300),theme(colors.cinelaunch.gold))] bg-[length:200%_auto]">Independent Cinema</span>
          </motion.h1>
          
          <motion.p 
            variants={itemAnimation}
            className="max-w-3xl mx-auto text-cinelaunch-muted-foreground text-lg mb-8"
          >
            CineLaunch is a premier crowdfunding platform designed specifically for filmmakers. 
            We bridge the gap between creative vision and financial resources, helping bring powerful 
            stories to the screen.
          </motion.p>
          
          <motion.div 
            variants={itemAnimation}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button 
              asChild
              className="bg-cinelaunch-gold text-black hover:bg-cinelaunch-gold/90"
              size="lg"
            >
              <Link to="/projects">
                Browse Projects
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-cinelaunch-muted"
              size="lg"
            >
              <Link to="/submit">
                Submit Your Film
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="glass-card p-8 rounded-lg mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
                viewport={{ once: true }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-cinelaunch-gold mb-2">{stat.value}</p>
                <p className="text-cinelaunch-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="mb-16"
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={itemAnimation} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">What Makes CineLaunch Special</h2>
            <p className="text-cinelaunch-muted-foreground max-w-3xl mx-auto">
              Our platform is designed from the ground up to address the unique challenges of film financing
              and to connect passionate filmmakers with enthusiastic supporters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                variants={itemAnimation}
                className="glass-card p-6 rounded-lg"
              >
                <div className="mb-4 rounded-full w-16 h-16 flex items-center justify-center bg-cinelaunch-dark/50 border border-cinelaunch-muted">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-cinelaunch-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          className="mb-16 glass-card p-8 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Our Mission</h2>
              <p className="text-cinelaunch-muted-foreground mb-4">
                CineLaunch was founded with a singular vision: to democratize film financing and give voice 
                to stories that might otherwise go untold. We believe that financial constraints should never 
                be the reason innovative and important films don't get made.
              </p>
              <p className="text-cinelaunch-muted-foreground">
                By connecting filmmakers directly with audiences who believe in their vision, we're creating 
                a new model for film production that values creative integrity and artistic expression over 
                commercial formulas and market trends.
              </p>
              <Separator className="my-6 bg-white/10" />
              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="border-cinelaunch-gold text-cinelaunch-gold hover:bg-cinelaunch-gold/10"
                >
                  Our Story
                </Button>
                <Button
                  variant="outline"
                  className="border-cinelaunch-muted"
                >
                  Join Our Team
                </Button>
              </div>
            </div>
            <div className="aspect-square bg-cover bg-center rounded-lg overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x600?film" 
                alt="Film production" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center glass-card p-10 rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Ready to Join the CineLaunch Community?</h2>
          <p className="text-cinelaunch-muted-foreground mb-6 max-w-3xl mx-auto">
            Whether you're a filmmaker looking to fund your next project or a film enthusiast eager 
            to support independent cinema, there's a place for you in our community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-cinelaunch-gold text-black hover:bg-cinelaunch-gold/90" size="lg">
              <Link to="/projects">
                Explore Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
