
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Heart, Calendar, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { allProjects } from "@/data/projects";
import { formatDistanceToNow } from "date-fns";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(false);

  const genres = ["All", "Drama", "Comedy", "Horror", "Documentary", "Sci-Fi", "Action", "Thriller", "Romance", "Animation"];

  const filteredProjects = allProjects
    .filter(project => 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.genre.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(project => selectedGenre === "All" || project.genre === selectedGenre)
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case "oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case "mostFunded":
          return b.fundingReceived - a.fundingReceived;
        case "mostLiked":
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-cinelaunch-background via-cinelaunch-surface to-cinelaunch-background">
      <div className="container px-4 sm:px-6 py-8 md:py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <Badge className="bg-cinelaunch-primary/90 text-white hover:bg-cinelaunch-primary backdrop-blur-sm mb-4">
            Browse Projects
          </Badge>
          <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-cinelaunch-text mb-4">
            Discover Film Projects
          </h1>
          <p className="text-lg md:text-xl text-cinelaunch-text max-w-3xl mx-auto leading-relaxed">
            Find and support innovative film projects that inspire you. Join filmmakers on their journey from concept to screen.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="glass-card border-cinelaunch-primary/30">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cinelaunch-text-muted h-4 w-4" />
                  <Input
                    placeholder="Search for projects, directors, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text placeholder:text-cinelaunch-text-muted"
                  />
                </div>

                {/* Genre Filter */}
                <Select value={selectedGenre} onValueChange={setSelectedGenre}>
                  <SelectTrigger className="w-full lg:w-48 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-cinelaunch-surface border-cinelaunch-primary/30">
                    {genres.map((genre) => (
                      <SelectItem key={genre} value={genre} className="text-cinelaunch-text hover:bg-cinelaunch-primary/10">
                        {genre}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Sort By */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full lg:w-48 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-cinelaunch-surface border-cinelaunch-primary/30">
                    <SelectItem value="newest" className="text-cinelaunch-text hover:bg-cinelaunch-primary/10">Newest First</SelectItem>
                    <SelectItem value="oldest" className="text-cinelaunch-text hover:bg-cinelaunch-primary/10">Oldest First</SelectItem>
                    <SelectItem value="mostFunded" className="text-cinelaunch-text hover:bg-cinelaunch-primary/10">Most Funded</SelectItem>
                    <SelectItem value="mostLiked" className="text-cinelaunch-text hover:bg-cinelaunch-primary/10">Most Liked</SelectItem>
                  </SelectContent>
                </Select>

                {/* Show Filters Button */}
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-cinelaunch-primary/50 text-cinelaunch-text hover:bg-cinelaunch-primary/10"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Show Filters
                </Button>
              </div>

              {/* Genre Badges */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-4 pt-4 border-t border-cinelaunch-primary/20"
                >
                  <p className="text-sm font-medium text-cinelaunch-text mb-2">Quick Filters:</p>
                  <div className="flex flex-wrap gap-2">
                    {genres.map((genre) => (
                      <Badge
                        key={genre}
                        variant={selectedGenre === genre ? "default" : "outline"}
                        className={`cursor-pointer transition-colors ${
                          selectedGenre === genre
                            ? "bg-cinelaunch-primary text-white"
                            : "border-cinelaunch-primary/50 text-cinelaunch-text hover:bg-cinelaunch-primary/10"
                        }`}
                        onClick={() => setSelectedGenre(genre)}
                      >
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-cinelaunch-text-muted">
            Showing {filteredProjects.length} of {allProjects.length} projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link to={`/projects/${project.id}`}>
                <Card className="glass-card border-cinelaunch-primary/30 overflow-hidden group-hover:border-cinelaunch-primary/60 transition-all duration-300 h-full">
                  <div className="relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-cinelaunch-primary/90 text-white backdrop-blur-sm">
                        {project.genre}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center gap-1">
                        <Heart className="h-3 w-3 text-white" />
                        <span className="text-white text-xs">{project.likes}</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-bold text-cinelaunch-text group-hover:text-cinelaunch-primary transition-colors line-clamp-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-cinelaunch-text-muted">
                      Directed by {project.director}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-cinelaunch-text-muted mb-4 line-clamp-3">
                      {project.synopsis}
                    </p>

                    {/* Funding Progress */}
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-cinelaunch-text-muted mb-1">
                        <span>Funded</span>
                        <span>{Math.round((project.fundingReceived / project.budget) * 100)}%</span>
                      </div>
                      <div className="w-full bg-cinelaunch-surface rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-cinelaunch-primary to-cinelaunch-primary/80 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(100, (project.fundingReceived / project.budget) * 100)}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-cinelaunch-text-muted mt-1">
                        <span>₹{project.fundingReceived.toLocaleString()}</span>
                        <span>₹{project.budget.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Project Stats */}
                    <div className="flex justify-between items-center text-xs text-cinelaunch-text-muted">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{project.supporters}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDistanceToNow(new Date(project.createdAt), { addSuffix: true })}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        <span>{project.country}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-xl font-semibold text-cinelaunch-text mb-2">No projects found</h3>
            <p className="text-cinelaunch-text-muted mb-4">
              Try adjusting your search criteria or browse all projects
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedGenre("All");
                setSortBy("newest");
              }}
              className="bg-cinelaunch-primary text-white hover:bg-cinelaunch-primary/90"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
