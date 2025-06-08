
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Film, Upload, Send, Camera, FileText, DollarSign, Calendar, MapPin, Users, Target, Mail } from "lucide-react";
import { currencies } from "@/data/currencies";

const SubmitProjectPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    email: "",
    phone: "",
    genre: "",
    synopsis: "",
    description: "",
    budget: "",
    currency: "INR", // Default to INR
    targetAudience: "",
    duration: "",
    releaseDate: "",
    country: "",
    language: "",
    cast: "",
    crew: "",
    productionStage: "",
    fundingGoal: "",
    pitch: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get selected currency details
    const selectedCurrency = currencies.find(c => c.code === formData.currency);
    const currencySymbol = selectedCurrency ? selectedCurrency.symbol : "₹";
    
    // Create email content
    const subject = `Film Project Submission: ${formData.title}`;
    const body = `Dear CineLaunch Team,

I would like to submit my film project for consideration on your platform.

PROJECT DETAILS:
===============
Title: ${formData.title}
Director: ${formData.director}
Genre: ${formData.genre}
Synopsis: ${formData.synopsis}

CONTACT INFORMATION:
===================
Email: ${formData.email}
Phone: ${formData.phone}
Country: ${formData.country}

PROJECT SPECIFICATIONS:
======================
Budget: ${currencySymbol}${formData.budget} (${formData.currency})
Duration: ${formData.duration} minutes
Language: ${formData.language}
Target Audience: ${formData.targetAudience}
Expected Release Date: ${formData.releaseDate}

CAST & CREW:
============
Cast: ${formData.cast}
Crew: ${formData.crew}

PRODUCTION DETAILS:
==================
Current Stage: ${formData.productionStage}
Funding Goal: ${currencySymbol}${formData.fundingGoal} (${formData.currency})

PROJECT DESCRIPTION:
===================
${formData.description}

PITCH:
======
${formData.pitch}

MEDIA FILES:
============
Please find attached:
- Poster image
- Teaser/trailer (if available)
- Pitch deck presentation

Best regards,
${formData.director}`;

    // Open default email client
    const mailtoLink = `mailto:imgtk17@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

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
            <Film className="mr-2 h-4 w-4" />
            Submit Your Project
          </Badge>
          <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-cinelaunch-text mb-4">
            Submit Your Film Project
          </h1>
          <p className="text-lg md:text-xl text-cinelaunch-text-muted max-w-3xl mx-auto leading-relaxed">
            Share your cinematic vision with our community. Fill out the details below to get your project featured on CineLaunch.
          </p>
        </motion.div>

        {/* Project Media Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Card className="glass-card border-cinelaunch-primary/30">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-cinelaunch-text flex items-center gap-2">
                <Upload className="h-5 w-5 text-cinelaunch-primary" />
                Project Media Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-cinelaunch-primary/10 border border-cinelaunch-primary/30 rounded-lg p-4">
                <p className="text-cinelaunch-text font-medium mb-2">
                  📧 Media Submission Process:
                </p>
                <p className="text-cinelaunch-text-muted text-sm leading-relaxed">
                  After submitting your project details using the form below, you will be redirected to send an email to <strong className="text-cinelaunch-text">imgtk17@gmail.com</strong>. 
                  Please attach the following files to your email:
                </p>
                <ul className="list-disc list-inside mt-3 text-cinelaunch-text-muted text-sm space-y-1">
                  <li>Poster image (JPG/PNG, max 5MB)</li>
                  <li>Teaser/trailer video (if available)</li>
                  <li>Pitch deck presentation (PDF format)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Basic Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="glass-card border-cinelaunch-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-cinelaunch-text flex items-center gap-2">
                    <Film className="h-5 w-5 text-cinelaunch-primary" />
                    Basic Information
                  </CardTitle>
                  <CardDescription className="text-cinelaunch-text-muted">
                    Essential details about your film project
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-cinelaunch-text font-medium">Project Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter your film title"
                      className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="director" className="text-cinelaunch-text font-medium">Director Name *</Label>
                    <Input
                      id="director"
                      value={formData.director}
                      onChange={(e) => handleInputChange("director", e.target.value)}
                      placeholder="Your full name"
                      className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-cinelaunch-text font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-cinelaunch-text font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                    />
                  </div>

                  <div>
                    <Label htmlFor="genre" className="text-cinelaunch-text font-medium">Genre *</Label>
                    <Select value={formData.genre} onValueChange={(value) => handleInputChange("genre", value)}>
                      <SelectTrigger className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text">
                        <SelectValue placeholder="Select genre" />
                      </SelectTrigger>
                      <SelectContent className="bg-cinelaunch-surface border-cinelaunch-primary/30">
                        {["Drama", "Comedy", "Horror", "Documentary", "Sci-Fi", "Action", "Thriller", "Romance", "Animation", "Fantasy", "Crime", "Adventure"].map((genre) => (
                          <SelectItem key={genre} value={genre} className="text-cinelaunch-text hover:bg-cinelaunch-primary/10">
                            {genre}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glass-card border-cinelaunch-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-cinelaunch-text flex items-center gap-2">
                    <FileText className="h-5 w-5 text-cinelaunch-primary" />
                    Project Details
                  </CardTitle>
                  <CardDescription className="text-cinelaunch-text-muted">
                    Tell us about your film's story and vision
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="synopsis" className="text-cinelaunch-text font-medium">Synopsis *</Label>
                    <Textarea
                      id="synopsis"
                      value={formData.synopsis}
                      onChange={(e) => handleInputChange("synopsis", e.target.value)}
                      placeholder="Brief summary of your film (2-3 sentences)"
                      className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text min-h-[80px]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-cinelaunch-text font-medium">Detailed Description *</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Detailed description of your film, its themes, and unique aspects"
                      className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text min-h-[120px]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="targetAudience" className="text-cinelaunch-text font-medium">Target Audience</Label>
                    <Input
                      id="targetAudience"
                      value={formData.targetAudience}
                      onChange={(e) => handleInputChange("targetAudience", e.target.value)}
                      placeholder="e.g., Young adults, Families, Art house cinema lovers"
                      className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="duration" className="text-cinelaunch-text font-medium">Duration (minutes)</Label>
                      <Input
                        id="duration"
                        type="number"
                        value={formData.duration}
                        onChange={(e) => handleInputChange("duration", e.target.value)}
                        placeholder="90"
                        className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                      />
                    </div>

                    <div>
                      <Label htmlFor="language" className="text-cinelaunch-text font-medium">Language</Label>
                      <Input
                        id="language"
                        value={formData.language}
                        onChange={(e) => handleInputChange("language", e.target.value)}
                        placeholder="English, Hindi, etc."
                        className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="releaseDate" className="text-cinelaunch-text font-medium">Expected Release Date</Label>
                      <Input
                        id="releaseDate"
                        type="date"
                        value={formData.releaseDate}
                        onChange={(e) => handleInputChange("releaseDate", e.target.value)}
                        className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                      />
                    </div>

                    <div>
                      <Label htmlFor="country" className="text-cinelaunch-text font-medium">Country</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange("country", e.target.value)}
                        placeholder="India, USA, etc."
                        className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Funding Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="glass-card border-cinelaunch-primary/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cinelaunch-text flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-cinelaunch-primary" />
                  Funding Details
                </CardTitle>
                <CardDescription className="text-cinelaunch-text-muted">
                  Budget and funding information for your project
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="currency" className="text-cinelaunch-text font-medium">Currency *</Label>
                    <Select value={formData.currency} onValueChange={(value) => handleInputChange("currency", value)}>
                      <SelectTrigger className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent className="bg-cinelaunch-surface border-cinelaunch-primary/30">
                        {currencies.map((currency) => (
                          <SelectItem key={currency.code} value={currency.code} className="text-cinelaunch-text hover:bg-cinelaunch-primary/10">
                            {currency.symbol} {currency.code} - {currency.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-cinelaunch-text font-medium">Total Budget *</Label>
                    <Input
                      id="budget"
                      type="number"
                      value={formData.budget}
                      onChange={(e) => handleInputChange("budget", e.target.value)}
                      placeholder="500000"
                      className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="fundingGoal" className="text-cinelaunch-text font-medium">Funding Goal</Label>
                    <Input
                      id="fundingGoal"
                      type="number"
                      value={formData.fundingGoal}
                      onChange={(e) => handleInputChange("fundingGoal", e.target.value)}
                      placeholder="200000"
                      className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="productionStage" className="text-cinelaunch-text font-medium">Current Production Stage</Label>
                  <Select value={formData.productionStage} onValueChange={(value) => handleInputChange("productionStage", value)}>
                    <SelectTrigger className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text">
                      <SelectValue placeholder="Select current stage" />
                    </SelectTrigger>
                    <SelectContent className="bg-cinelaunch-surface border-cinelaunch-primary/30">
                      {["Concept Development", "Script Writing", "Pre-Production", "Production", "Post-Production", "Completed"].map((stage) => (
                        <SelectItem key={stage} value={stage} className="text-cinelaunch-text hover:bg-cinelaunch-primary/10">
                          {stage}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cast & Crew */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="glass-card border-cinelaunch-primary/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cinelaunch-text flex items-center gap-2">
                  <Users className="h-5 w-5 text-cinelaunch-primary" />
                  Cast & Crew
                </CardTitle>
                <CardDescription className="text-cinelaunch-text-muted">
                  Information about your team and talent
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cast" className="text-cinelaunch-text font-medium">Main Cast</Label>
                  <Textarea
                    id="cast"
                    value={formData.cast}
                    onChange={(e) => handleInputChange("cast", e.target.value)}
                    placeholder="List main actors and their roles"
                    className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                  />
                </div>

                <div>
                  <Label htmlFor="crew" className="text-cinelaunch-text font-medium">Key Crew Members</Label>
                  <Textarea
                    id="crew"
                    value={formData.crew}
                    onChange={(e) => handleInputChange("crew", e.target.value)}
                    placeholder="Cinematographer, Producer, Editor, etc."
                    className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Pitch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="glass-card border-cinelaunch-primary/30">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-cinelaunch-text flex items-center gap-2">
                  <Target className="h-5 w-5 text-cinelaunch-primary" />
                  Your Pitch
                </CardTitle>
                <CardDescription className="text-cinelaunch-text-muted">
                  Why should people support your film?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="pitch" className="text-cinelaunch-text font-medium">Project Pitch *</Label>
                  <Textarea
                    id="pitch"
                    value={formData.pitch}
                    onChange={(e) => handleInputChange("pitch", e.target.value)}
                    placeholder="Explain why your film is unique, what makes it special, and why people should support it. This is your chance to convince potential supporters!"
                    className="mt-1 bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text min-h-[120px]"
                    required
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Button
              type="submit"
              className="bg-gradient-to-r from-cinelaunch-primary to-cinelaunch-primary/80 text-white hover:from-cinelaunch-primary/90 hover:to-cinelaunch-primary/70 font-semibold py-3 px-8 text-lg shadow-xl shadow-cinelaunch-primary/30"
            >
              <Send className="mr-2 h-5 w-5" />
              Submit Project
            </Button>
            <p className="text-sm text-cinelaunch-text-muted mt-4">
              You'll be redirected to send an email with your project details
            </p>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default SubmitProjectPage;
