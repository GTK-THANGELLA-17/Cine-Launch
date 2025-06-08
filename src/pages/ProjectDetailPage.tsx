
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, Mail, Calendar, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { allProjects } from "@/data/projects";
import { formatDistanceToNow } from "date-fns";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState(null);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  useEffect(() => {
    const foundProject = allProjects.find((p) => p.id === id);
    setProject(foundProject);
  }, [id]);

  const fundingProgress = project ? (project.fundingReceived / project.budget) * 100 : 0;
  const formattedProgress = Math.min(100, Math.round(fundingProgress));
  const timeAgo = project ? formatDistanceToNow(new Date(project.createdAt), { addSuffix: true }) : '';

  const handleSupportSubmit = (amount: number, paymentMethod: string) => {
    console.log("Support submitted:", { amount, paymentMethod });
    
    // Create email content
    const subject = `Support for ${project.title}`;
    const body = `Dear ${project.director},

I would like to support your project "${project.title}" with ₹${amount.toLocaleString()}.

Payment Method: ${paymentMethod}
Project ID: ${project.id}

Please provide payment instructions for completing this contribution.

Best regards,
A Film Enthusiast`;

    // Open default email client
    const mailtoLink = `mailto:${project.email || 'imgtk17@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    
    setIsSupportModalOpen(false);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cinelaunch-background">
        <p className="text-cinelaunch-text">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cinelaunch-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-cinelaunch-primary via-cinelaunch-matte to-cinelaunch-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-cinelaunch-dark via-slate-900 to-cinelaunch-darker">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,215,0,0.05)_0%,transparent_50%)]" />
        </div>

        <div className="container relative px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <Badge className="bg-cinelaunch-gold/90 text-black hover:bg-cinelaunch-gold backdrop-blur-sm mb-4">
              {project.genre}
            </Badge>
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
              {project.synopsis}
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container px-4 sm:px-6 py-8 md:py-12 bg-cinelaunch-background">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card border-cinelaunch-primary/30 bg-cinelaunch-card-bg">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-bold text-cinelaunch-text">
                  About the Film
                </CardTitle>
                <CardDescription className="text-cinelaunch-text-muted">
                  Directed by {project.director}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full rounded-md mb-4"
                />
                <p className="text-cinelaunch-text leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-cinelaunch-text mb-2">
                      Cast
                    </h4>
                    <p className="text-cinelaunch-text-muted">
                      {project.cast}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-cinelaunch-text mb-2">
                      Runtime
                    </h4>
                    <p className="text-cinelaunch-text-muted">
                      {project.duration} minutes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Support Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Funding Progress */}
            <Card className="glass-card border-cinelaunch-primary/30 bg-cinelaunch-card-bg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl font-bold text-cinelaunch-text">
                  Funding Progress
                </CardTitle>
                <CardDescription className="text-cinelaunch-text-muted">
                  {formattedProgress}% funded
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Progress value={formattedProgress} className="h-2" />
                <div className="flex justify-between text-sm">
                  <span className="text-cinelaunch-primary font-semibold">
                    ₹{project.fundingReceived.toLocaleString()} raised
                  </span>
                  <span className="text-cinelaunch-text-muted">
                    of ₹{project.budget.toLocaleString()}
                  </span>
                </div>
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
              </CardContent>
            </Card>
            
            {/* Support Actions */}
            <Card className="glass-card border-cinelaunch-primary/30 bg-cinelaunch-card-bg">
              <CardContent className="p-4 md:p-6 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => setIsSupportModalOpen(true)}
                    className="w-full bg-cinelaunch-primary text-white hover:bg-cinelaunch-primary/90 font-semibold py-3 md:py-4 text-sm md:text-lg shadow-xl shadow-cinelaunch-primary/30 group"
                  >
                    <Heart className="mr-2 h-4 w-5 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                    Support This Project
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={() => setIsContactModalOpen(true)}
                    variant="outline"
                    className="w-full border-cinelaunch-primary/50 text-cinelaunch-primary hover:bg-cinelaunch-primary hover:text-white transition-all duration-300"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Creator
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
            
            {/* Additional Info */}
            <Card className="glass-card border-cinelaunch-primary/30 bg-cinelaunch-card-bg">
              <CardHeader>
                <CardTitle className="text-lg md:text-xl font-bold text-cinelaunch-text">
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-cinelaunch-text text-sm md:text-base">
                  <span className="font-semibold">Genre:</span> {project.genre}
                </p>
                <p className="text-cinelaunch-text text-sm md:text-base">
                  <span className="font-semibold">Release Date:</span> {project.releaseDate}
                </p>
                <p className="text-cinelaunch-text text-sm md:text-base">
                  <span className="font-semibold">Country:</span> {project.country}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Support Modal - Enhanced with ScrollArea for mobile compatibility */}
      <Dialog open={isSupportModalOpen} onOpenChange={setIsSupportModalOpen}>
        <DialogContent className="max-w-md mx-auto bg-cinelaunch-card-bg border-cinelaunch-primary/30 backdrop-blur-md max-h-[90vh] p-0">
          <ScrollArea className="max-h-[90vh] p-6">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-xl font-bold text-cinelaunch-text">
                Support "{project.title}"
              </DialogTitle>
              <DialogDescription className="text-cinelaunch-text-muted">
                Choose your contribution amount and payment method
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Quick Amount Buttons */}
              <div>
                <label className="text-sm font-medium text-cinelaunch-text mb-3 block">
                  Quick Amounts
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[50, 100, 250, 500].map((amount) => (
                    <motion.button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-3 rounded-lg border transition-all duration-200 ${
                        selectedAmount === amount
                          ? 'border-cinelaunch-primary bg-cinelaunch-primary/10 text-cinelaunch-primary'
                          : 'border-cinelaunch-primary/30 text-cinelaunch-text hover:border-cinelaunch-primary/60'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      ₹{amount.toLocaleString()}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div>
                <label className="text-sm font-medium text-cinelaunch-text mb-2 block">
                  Custom Amount
                </label>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
                />
              </div>

              {/* Payment Methods - UPI Only */}
              <div>
                <label className="text-sm font-medium text-cinelaunch-text mb-3 block">
                  Payment Method
                </label>
                <motion.button
                  onClick={() => setSelectedPaymentMethod('upi')}
                  className={`w-full p-3 rounded-lg border transition-all duration-200 flex items-center gap-3 ${
                    selectedPaymentMethod === 'upi'
                      ? 'border-cinelaunch-primary bg-cinelaunch-primary/10'
                      : 'border-cinelaunch-primary/30 hover:border-cinelaunch-primary/60'
                  }`}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">UPI</span>
                  </div>
                  <span className="text-cinelaunch-text">UPI Payment</span>
                </motion.button>
              </div>

              {/* UPI QR Code */}
              {selectedPaymentMethod === 'upi' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-center space-y-3 p-4 border border-cinelaunch-primary/30 rounded-lg bg-cinelaunch-surface/50"
                >
                  <div className="w-32 h-32 bg-white mx-auto rounded-lg flex items-center justify-center">
                    <img 
                      src="/placeholder.svg" 
                      alt="UPI QR Code" 
                      className="w-28 h-28 object-contain"
                    />
                  </div>
                  <p className="text-sm text-cinelaunch-primary font-medium">
                    UPI ID: filmfunding@paytm
                  </p>
                  <p className="text-xs text-cinelaunch-text-muted">
                    Scan QR code or use UPI ID for payment
                  </p>
                </motion.div>
              )}
            </div>

            <DialogFooter className="flex gap-3 pt-6">
              <Button
                variant="outline"
                onClick={() => setIsSupportModalOpen(false)}
                className="border-cinelaunch-primary/30 text-cinelaunch-text hover:bg-cinelaunch-primary/10"
              >
                Cancel
              </Button>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => {
                    const amount = customAmount ? parseInt(customAmount) : selectedAmount;
                    if (amount && selectedPaymentMethod) {
                      handleSupportSubmit(amount, selectedPaymentMethod);
                    }
                  }}
                  disabled={(!selectedAmount && !customAmount) || !selectedPaymentMethod}
                  className="bg-cinelaunch-primary text-white hover:bg-cinelaunch-primary/90"
                >
                  Proceed to Support
                </Button>
              </motion.div>
            </DialogFooter>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Contact Modal - Enhanced with ScrollArea */}
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent className="max-w-md mx-auto bg-cinelaunch-card-bg border-cinelaunch-primary/30 backdrop-blur-md max-h-[90vh] p-0">
          <ScrollArea className="max-h-[90vh] p-6">
            <DialogHeader className="pb-4">
              <DialogTitle className="text-xl font-bold text-cinelaunch-text">
                Contact {project.director}
              </DialogTitle>
              <DialogDescription className="text-cinelaunch-text-muted">
                Send a message to the project creator
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
              />
              <Input
                type="text"
                placeholder="Subject"
                className="bg-cinelaunch-surface border-cinelaunch-primary/30 text-cinelaunch-text"
              />
              <textarea
                placeholder="Your Message"
                className="bg-cinelaunch-surface border border-cinelaunch-primary/30 text-cinelaunch-text w-full h-32 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-cinelaunch-primary/50"
              />
            </div>

            <DialogFooter className="flex gap-3 pt-6">
              <Button
                variant="outline"
                onClick={() => setIsContactModalOpen(false)}
                className="border-cinelaunch-primary/30 text-cinelaunch-text hover:bg-cinelaunch-primary/10"
              >
                Cancel
              </Button>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="bg-cinelaunch-primary text-white hover:bg-cinelaunch-primary/90">
                  Send Message
                </Button>
              </motion.div>
            </DialogFooter>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetailPage;
