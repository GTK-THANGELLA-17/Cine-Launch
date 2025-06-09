import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectType } from "@/types/project";
import { CurrencyType } from "@/types/currency";
import { Heart, User, Users, Calendar, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: ProjectType;
  currency?: CurrencyType;
}

const ProjectCard = ({ project, currency }: ProjectCardProps) => {
  const fundingProgress = (project.fundingReceived / project.budget) * 100;
  const formattedProgress = Math.min(Math.round(fundingProgress), 100);

  const currSymbol = currency?.symbol || "₹";
  const rate = currency?.rate || 1;
  const formattedFunding = Math.round(project.fundingReceived * rate).toLocaleString();
  const formattedBudget = Math.round(project.budget * rate).toLocaleString();

  const daysRemaining = Math.floor(Math.random() * 60) + 5;

  return (
    <Link to={`/projects/${project.id}`}>
      <motion.div
        whileHover={{
          y: -8,
          transition: { duration: 0.25 },
        }}
        className="h-full"
      >
        <Card className="glass-card border-white/5 hover:border-cinelaunch-gold/30 transition-all duration-300 overflow-hidden flex flex-col h-full">
          {/* Cover Image */}
          <div
            className="aspect-[16/9] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${project.imageUrl})` }}
          >
            {/* Genre */}
            <div className="absolute top-2 left-2">
              <Badge className="bg-cinelaunch-gold text-black hover:bg-cinelaunch-gold/90">
                {project.genre}
              </Badge>
            </div>

            {/* Almost Funded */}
            {formattedProgress >= 90 && (
              <div className="absolute top-2 right-2">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-400 text-black flex items-center gap-1">
                  <Star size={12} className="fill-current" />
                  Almost Funded!
                </Badge>
              </div>
            )}

            {/* Overlay: Director & Likes */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end">
              <div className="p-4 w-full">
                <div className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-1 text-cinelaunch-gold">
                    <User size={14} />
                    {project.director}
                  </div>
                  <div className="flex items-center gap-1 text-white/80">
                    <Heart size={14} className="text-rose-500" />
                    {project.likes}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <CardContent className="p-4 flex flex-col flex-grow">
            <h3 className="font-display font-bold text-lg text-white mb-1 line-clamp-1 hover:text-cinelaunch-gold transition-colors">
              {project.title}
            </h3>

            <p className="text-cinelaunch-muted-foreground text-sm mb-3 line-clamp-2">
              {project.synopsis}
            </p>

            <div className="text-xs text-white/70 flex flex-wrap gap-2 mb-2">
              <span className="flex items-center gap-1">
                <Clock size={12} /> {project.duration} min
              </span>
              <span className="truncate max-w-[70%]">🎭 Cast: {project.cast}</span>
            </div>

            {/* Funding Bar */}
            <div className="mt-auto">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-cinelaunch-gold font-medium">
                  {currSymbol}{formattedFunding}
                </span>
                <span className="text-cinelaunch-muted-foreground">
                  of {currSymbol}{formattedBudget}
                </span>
              </div>

              <div className="relative h-1.5 mb-3">
                <div className="absolute inset-0 bg-cinelaunch-dark/50 rounded-full" />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-cinelaunch-gold to-yellow-300 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${formattedProgress}%` }}
                />
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-cinelaunch-muted-foreground">
                <div className="flex items-center">
                  <Users size={12} className="mr-1" />
                  {project.supporters} supporters
                </div>
                <div className="flex items-center">
                  <Calendar size={12} className="mr-1" />
                  {daysRemaining} days left
                </div>
              </div>

              {/* Note */}
              {project.note && (
                <div className="mt-3 text-cinelaunch-muted-foreground text-xs italic bg-white/5 p-2 rounded-md hover:bg-cinelaunch-gold/10 transition">
                  “{project.note}”
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
