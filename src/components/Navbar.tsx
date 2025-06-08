
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Film } from "lucide-react";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Animation variants
  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { 
        duration: 0.3,
        yoyo: Infinity,
        ease: "easeInOut" 
      }
    }
  };

  const textVariants = {
    initial: { backgroundPosition: "0% center" },
    animate: { 
      backgroundPosition: ["0% center", "100% center", "0% center"],
      transition: { 
        duration: 8,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 360, transition: { duration: 1 } }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-2">
          <motion.div
            variants={logoVariants}
            initial="initial"
            whileHover="hover"
            className="flex items-center gap-2"
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <Film className="h-6 w-6 text-primary" />
            </motion.div>
            <motion.span 
              variants={textVariants}
              initial="initial"
              animate="animate"
              className="font-display font-bold text-xl bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              CineLaunch
            </motion.span>
          </motion.div>
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <motion.button
                onClick={toggleMenu}
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>

            {isMenuOpen && (
              <motion.div 
                className="absolute top-full left-0 right-0 bg-background border-b border-border"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="container px-4 py-4 flex flex-col gap-4">
                  <Link 
                    to="/projects" 
                    className="px-3 py-2 hover:bg-secondary rounded-md transition-colors text-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Browse Projects
                  </Link>
                  <Link 
                    to="/how-to-get-funding" 
                    className="px-3 py-2 hover:bg-secondary rounded-md transition-colors text-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How to Get Funding
                  </Link>
                  <Link 
                    to="/submit-project" 
                    className="px-3 py-2 hover:bg-secondary rounded-md transition-colors text-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Submit Project
                  </Link>
                  <Link 
                    to="/projects" 
                    className="px-3 py-2 hover:bg-secondary rounded-md transition-colors text-foreground hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Success Stories
                  </Link>
                </div>
              </motion.div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-6">
            <div className="flex gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects" className="text-foreground hover:text-primary transition-colors">
                  Browse Projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/how-to-get-funding" className="text-foreground hover:text-primary transition-colors">
                  How to Get Funding
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/submit-project" className="text-foreground hover:text-primary transition-colors">
                  Submit Project
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/projects" className="text-foreground hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </motion.div>
            </div>
            <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
