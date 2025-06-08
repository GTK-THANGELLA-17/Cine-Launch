
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ProjectType } from "@/types/project";
import { CurrencyType } from "@/types/currency";
import { Heart, User, Users, Calendar, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: ProjectType;
  currency?: CurrencyType;
}

const ProjectCard = ({ project, currency }: ProjectCardProps) => {
  const fundingProgress = (project.fundingReceived / project.budget) * 100;
  const formattedProgress = Math.min(Math.round(fundingProgress), 100);
  
  // Use provided currency or default to USD
  const currSymbol = currency?.symbol || "$";
  const rate = currency?.rate || 1;
  
  // Format currency amounts
  const formattedFunding = Math.round(project.fundingReceived * rate).toLocaleString();
  const formattedBudget = Math.round(project.budget * rate).toLocaleString();
  
  // Calculate days remaining (mock data)
  const daysRemaining = Math.floor(Math.random() * 60) + 5;
  
  return (
    <Link to={`/projects/${project.id}`}>
      <motion.div 
        whileHover={{ 
          y: -8,
          transition: { duration: 0.2 }
        }}
        className="h-full"
      >
        <Card className="glass-card overflow-hidden h-full flex flex-col border-white/5 hover:border-cinelaunch-gold/30 transition-all duration-300">
          <div 
            className="aspect-[16/9] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            <div className="absolute top-2 left-2">
              <Badge className="bg-cinelaunch-gold text-black hover:bg-cinelaunch-gold/90">
                {project.genre}
              </Badge>
            </div>
            {formattedProgress >= 90 && (
              <div className="absolute top-2 right-2">
                <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black">
                  <Star className="h-3 w-3 mr-1 fill-current" /> Almost Funded!
                </Badge>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
              <div className="p-4 w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1 text-cinelaunch-gold">
                    <User size={14} />
                    <span className="text-xs">{project.director}</span>
                  </div>
                  <div className="flex items-center gap-1 text-white/80">
                    <Heart size={14} className="text-rose-500" />
                    <span className="text-xs">{project.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <CardContent className="p-4 flex flex-col flex-grow">
            <h3 className="font-display font-bold text-lg mb-1 line-clamp-1 text-white hover:text-cinelaunch-gold transition-colors">
              {project.title}
            </h3>
            <p className="text-cinelaunch-muted-foreground text-sm mb-4 line-clamp-2">
              {project.synopsis}
            </p>
            
            <div className="mt-auto">
              <div className="flex justify-between mb-1 text-sm">
                <span className="text-cinelaunch-gold font-medium">
                  {currSymbol}{formattedFunding}
                </span>
                <span className="text-cinelaunch-muted-foreground">
                  of {currSymbol}{formattedBudget}
                </span>
              </div>
              <div className="relative h-1.5 mb-2">
                <div className="absolute inset-0 bg-cinelaunch-dark/50 rounded-full"></div>
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-cinelaunch-gold to-yellow-300 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${formattedProgress}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between mt-3 text-xs text-cinelaunch-muted-foreground">
                <div className="flex items-center">
                  <Users size={12} className="mr-1" />
                  <span>{project.supporters} supporters</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  <span>{daysRemaining} days left</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
