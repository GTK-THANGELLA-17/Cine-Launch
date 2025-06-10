import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Heart,
  Coffee,
  Star,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface DeveloperModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DeveloperModal = ({ open, onOpenChange }: DeveloperModalProps) => {
  const handleSupportProject = () => {
    const subject = "Support for CineLaunch Project";
    const body =
      "Hi! I'd like to support the CineLaunch project. Please let me know how I can help.";
    window.location.href = `mailto:imgtk17@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleContactCreator = () => {
    const subject = "Contact from CineLaunch User";
    const body =
      "Hi! I found your CineLaunch project and would like to get in touch.";
    window.location.href = `mailto:imgtk17@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/gthangella/",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/g_thangella",
      icon: Twitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/g_thangella_k/",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/918499090369",
      icon: FaWhatsapp,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="center-dialog max-w-lg w-[95vw] mx-auto max-h-[90vh] bg-cinelaunch-surface text-cinelaunch-text border-border p-0 overflow-hidden">
        <ScrollArea className="max-h-[90vh] w-full">
          <div className="p-6">
            <DialogHeader className="space-y-4">
              <DialogTitle className="text-2xl font-bold text-center text-gradient-primary">
                Meet the Developer
              </DialogTitle>
              <DialogDescription asChild>
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center space-y-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-20 rounded-full mx-auto overflow-hidden shadow-md border-2 border-cinelaunch-primary"
                    >
                      <img
                        src="/GTK.JPG"
                        alt="G. Thangella"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-semibold text-cinelaunch-text">
                        G. Thangella
                      </h3>
                      <p className="text-cinelaunch-text-muted">Developer</p>
                    </div>
                    <div className="flex justify-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="bg-cinelaunch-primary/20 text-cinelaunch-primary border-cinelaunch-primary/30">
                        React
                      </Badge>
                      <Badge variant="secondary" className="bg-cinelaunch-primary/20 text-cinelaunch-primary border-cinelaunch-primary/30">
                        Node.js
                      </Badge>
                      <Badge variant="secondary" className="bg-cinelaunch-primary/20 text-cinelaunch-primary border-cinelaunch-primary/30">
                        Film Production
                      </Badge>
                    </div>
                  </motion.div>

                  <Separator className="bg-border" />

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-3"
                  >
                    <h4 className="font-semibold text-cinelaunch-text flex items-center gap-2">
                      <Star className="h-4 w-4 text-cinelaunch-primary animate-pulse" />
                      About CineLaunch
                    </h4>
                    <p className="text-sm text-cinelaunch-text-muted leading-relaxed">
                      CineLaunch is a passion project born from the intersection of
                      technology and filmmaking. Our mission is to democratize film
                      funding and connect talented filmmakers with supporters who
                      believe in their vision.
                    </p>
                  </motion.div>

                  <Separator className="bg-border" />

                  {/* Connect with the Developer */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-3"
                  >
                    <h4 className="font-semibold text-cinelaunch-text">
                      Connect with the Developer
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.name}
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center p-3 rounded-lg bg-cinelaunch-matte/30 hover:bg-cinelaunch-matte/50 transition-all duration-300 group border border-cinelaunch-primary/20"
                        >
                          <social.icon className="h-5 w-5 text-cinelaunch-text-muted group-hover:text-cinelaunch-primary transition-colors" />
                          <span className="text-xs mt-1 text-cinelaunch-text-muted group-hover:text-cinelaunch-primary transition-colors">
                            {social.name}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  <Separator className="bg-border" />

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="space-y-3"
                  >
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={handleSupportProject}
                        className="w-full bg-gradient-to-r from-cinelaunch-primary to-primary hover:from-cinelaunch-primary/90 hover:to-primary/90 text-cinelaunch-background shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Heart className="mr-2 h-4 w-4" />
                        Support This Project
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={handleContactCreator}
                        variant="outline"
                        className="w-full border-cinelaunch-primary text-cinelaunch-primary hover:bg-cinelaunch-primary hover:text-cinelaunch-background transition-all duration-300"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Contact Creator
                      </Button>
                    </motion.div>

                    <div className="flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-cinelaunch-primary/50 text-cinelaunch-text hover:bg-cinelaunch-primary/10 hover:border-cinelaunch-primary transition-all duration-300"
                          onClick={() =>
                            window.open(
                              "https://www.buymeacoffee.com/gthangella",
                              "_blank"
                            )
                          }
                        >
                          <Coffee className="mr-1 h-3 w-3" />
                          Buy Coffee
                        </Button>
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-cinelaunch-primary/50 text-cinelaunch-text hover:bg-cinelaunch-primary/10 hover:border-cinelaunch-primary transition-all duration-300"
                          onClick={() =>
                            window.open(
                              "https://github.com/GTK-THANGELLA-17/cinelaunch",
                              "_blank"
                            )
                          }
                        >
                          <Star className="mr-1 h-3 w-3" />
                          Star on GitHub
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-xs text-center text-cinelaunch-text-muted pt-2"
                  >
                    Made with ❤️ for the filmmaking community
                  </motion.div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
