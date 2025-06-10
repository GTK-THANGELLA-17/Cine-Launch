
import { useState } from "react";
import { Link } from "react-router-dom";
import { Film, Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeveloperModal } from "@/components/DeveloperModal";

const Footer = () => {
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-background to-card border-t border-primary/20 relative">
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="container px-4 sm:px-6 py-12 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/home" className="flex items-center gap-2">
              <Film className="h-6 w-6 text-primary animate-pulse" />
              <span className="font-bold text-xl bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                CineLaunch
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering filmmakers worldwide to transform their creative visions into reality through 
              innovative crowdfunding and global community support.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/gthangella/" },
                { icon: Twitter, href: "https://twitter.com/g_thangella" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-primary/10 border border-primary/30 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Explore</h3>
            <nav className="space-y-3">
              {[
                { label: "Featured Projects", href: "/projects" },
                { label: "How to Get Funding", href: "/how-to-get-funding" },
                { label: "Submit Project", href: "/submit-project" },
                { label: "Success Stories", href: "/projects" }
              ].map((link, index) => (
                <div key={index}>
                  <Link
                    to={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-foreground">Support</h3>
            <nav className="space-y-3">
              {[
                { label: "Help Center", href: "/help" },
                { label: "Community Guidelines", href: "/guidelines" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" }
              ].map((link, index) => (
                <div key={index}>
                  <Link
                    to={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by CineLaunch Team
              </p>
              <span className="hidden md:inline">•</span>
              <p>© 2024 CineLaunch. All rights reserved.</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setIsDeveloperModalOpen(true)}
                variant="outline"
                size="sm"
                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 backdrop-blur-sm"
              >
                <Film className="mr-2 h-4 w-4" />
                Meet the Developer
              </Button>
            </div>
          </div>
        </div>
      </div>

      <DeveloperModal 
        open={isDeveloperModalOpen} 
        onOpenChange={setIsDeveloperModalOpen} 
      />
    </footer>
  );
};

export default Footer;
