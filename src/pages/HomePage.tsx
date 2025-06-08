
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Heart, Users, Calendar, Film, Globe, Star, ArrowRight, Play, Sparkles, TrendingUp, Award, Target, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { allProjects } from "@/data/projects";
import { currencies } from "@/data/currencies";
import { formatDistanceToNow } from "date-fns";

const HomePage = () => {
  const [currency, setCurrency] = useState("USD");
  
  // Get current currency
  const currentCurrency = currencies.find(c => c.code === currency) || currencies.find(c => c.code === "USD") || currencies[0];
  
  // Format currency values
  const formatCurrency = (value: number) => {
    return Math.round(value * currentCurrency.rate).toLocaleString();
  };

  // Get featured projects (first 6)
  const featuredProjects = allProjects.slice(0, 6);

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-cinelaunch-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-cinelaunch-background via-cinelaunch-surface to-cinelaunch-background">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(39,63,79,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(39,63,79,0.05)_0%,transparent_50%)]" />
        </div>
        
        {/* Floating elements */}
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 w-4 h-4 bg-cinelaunch-primary/30 rounded-full blur-sm animate-float"
        />
        <motion.div
          animate={floatingAnimation}
          style={{ animationDelay: "1s" }}
          className="absolute top-40 right-20 w-6 h-6 bg-cinelaunch-primary/20 rounded-full blur-sm animate-float"
        />
        <motion.div
          animate={floatingAnimation}
          style={{ animationDelay: "2s" }}
          className="absolute bottom-20 left-1/4 w-5 h-5 bg-cinelaunch-primary/25 rounded-full blur-sm animate-float"
        />

        <div className="container relative px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-8 w-8 text-cinelaunch-primary animate-pulse-glow" />
              </motion.div>
              <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl">
                <span className="text-cinelaunch-text drop-shadow-2xl">Cine</span>
                <span className="text-cinelaunch-primary drop-shadow-2xl font-black text-gradient-primary">Launch</span>
              </h1>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              >
                <Film className="h-8 w-8 text-cinelaunch-primary animate-pulse-glow" />
              </motion.div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-cinelaunch-text-muted mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Empowering filmmakers to bring their cinematic visions to life through 
              <span className="text-cinelaunch-primary font-semibold"> global crowdfunding</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(39,63,79,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-cinelaunch-primary to-primary text-cinelaunch-background hover:from-cinelaunch-primary/90 hover:to-primary/90 font-semibold px-8 py-4 text-lg shadow-xl shadow-cinelaunch-primary/30 group animate-pulse-glow"
                >
                  <Link to="/projects">
                    <TrendingUp className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-2 border-cinelaunch-primary text-cinelaunch-primary hover:bg-cinelaunch-primary hover:text-cinelaunch-background px-8 py-4 text-lg backdrop-blur-sm group transition-all duration-300"
                >
                  <Link to="/submit-project">
                    <Target className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Submit Your Project
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: Film, label: "Active Projects", value: "156+" },
              { icon: Users, label: "Global Supporters", value: "12K+" },
              { icon: Award, label: "Success Rate", value: "89%" },
              { icon: Globe, label: "Countries", value: "47+" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 glass-card rounded-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <stat.icon className="h-8 w-8 text-cinelaunch-primary mx-auto mb-3" />
                </motion.div>
                <p className="text-2xl font-bold text-cinelaunch-text mb-1">{stat.value}</p>
                <p className="text-sm text-cinelaunch-text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Currency Selector & Featured Projects */}
      <section className="py-16 bg-gradient-to-b from-cinelaunch-background to-cinelaunch-surface/20">
        <div className="container px-4 sm:px-6">
          <div className="flex justify-between items-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl text-cinelaunch-text mb-2">
                Featured <span className="text-gradient-primary">Projects</span>
              </h2>
              <p className="text-cinelaunch-text-muted">
                Discover amazing films waiting for your support
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-[200px] bg-cinelaunch-surface/50 border-cinelaunch-primary/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-cinelaunch-primary" />
                    <span className="text-cinelaunch-text">{currentCurrency.symbol} {currentCurrency.code}</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {currencies.map((curr) => (
                    <SelectItem key={curr.code} value={curr.code}>
                      {curr.symbol} {curr.name} ({curr.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </motion.div>
          </div>
          
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project, index) => {
              const fundingProgress = (project.fundingReceived / project.budget) * 100;
              const formattedProgress = Math.min(100, Math.round(fundingProgress));
              const timeAgo = formatDistanceToNow(new Date(project.createdAt), { addSuffix: true });
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemAnimation}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="glass-card hover:border-cinelaunch-primary/50 transition-all duration-300 overflow-hidden group">
                    <div className="relative">
                      <div
                        className="w-full h-48 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundImage: `url(${project.imageUrl})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-cinelaunch-dark/80 via-cinelaunch-dark/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-cinelaunch-primary/90 text-cinelaunch-background hover:bg-cinelaunch-primary backdrop-blur-sm">
                            {project.genre}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-cinelaunch-dark/50 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer"
                          >
                            <Play className="h-4 w-4 text-white ml-0.5" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-cinelaunch-text group-hover:text-cinelaunch-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-cinelaunch-text-muted">
                        By {project.director}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-sm text-cinelaunch-text-muted mb-4 line-clamp-2">
                        {project.synopsis}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-cinelaunch-primary font-semibold">
                            {currentCurrency.symbol}{formatCurrency(project.fundingReceived)} raised
                          </span>
                          <span className="text-cinelaunch-text-muted">
                            of {currentCurrency.symbol}{formatCurrency(project.budget)}
                          </span>
                        </div>
                        
                        <Progress value={formattedProgress} className="h-2" />
                        
                        <div className="flex justify-between items-center text-xs text-cinelaunch-text-muted">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Users size={12} />
                              <span>{project.supporters}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart size={12} />
                              <span>{project.likes}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={12} />
                            <span>{timeAgo}</span>
                          </div>
                        </div>
                        
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            asChild
                            className="w-full bg-gradient-to-r from-cinelaunch-primary to-primary text-cinelaunch-background hover:from-cinelaunch-primary/90 hover:to-primary/90 group transition-all duration-300"
                          >
                            <Link to={`/projects/${project.id}`}>
                              View Project
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-cinelaunch-primary text-cinelaunch-primary hover:bg-cinelaunch-primary hover:text-cinelaunch-background px-8 py-4 text-lg backdrop-blur-sm group transition-all duration-300"
              >
                <Link to="/projects">
                  View All Projects
                  <Star className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-b from-cinelaunch-surface/20 to-cinelaunch-background">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-cinelaunch-text mb-4">
              How It <span className="text-gradient-primary">Works</span>
            </h2>
            <p className="text-xl text-cinelaunch-text-muted max-w-2xl mx-auto">
              From vision to screen in three simple steps
            </p>
          </motion.div>
          
          <motion.div
            variants={containerAnimation}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                step: "01",
                title: "Submit Your Project",
                description: "Share your film idea, vision, and funding goals with our community",
                icon: Upload
              },
              {
                step: "02", 
                title: "Get Support",
                description: "Film enthusiasts discover and fund projects they believe in",
                icon: Heart
              },
              {
                step: "03",
                title: "Create Your Film",
                description: "Use the funding to bring your cinematic vision to life",
                icon: Play
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="relative mb-6"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cinelaunch-primary to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl group-hover:shadow-cinelaunch-primary/30 transition-all duration-300 animate-pulse-glow">
                    <item.icon className="h-8 w-8 text-cinelaunch-background" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-cinelaunch-primary text-cinelaunch-background text-xs font-bold px-2 py-1 rounded-full">
                    {item.step}
                  </div>
                </motion.div>
                <h3 className="font-display font-bold text-xl text-cinelaunch-text mb-3 group-hover:text-cinelaunch-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-cinelaunch-text-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
