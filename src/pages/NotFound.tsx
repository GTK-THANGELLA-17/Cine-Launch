
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cinelaunch-darker">
      <div className="text-center px-4">
        <h1 className="text-4xl font-display font-bold mb-4 text-gradient-gold">404</h1>
        <p className="text-xl text-white mb-6">Oops! This scene didn't make the final cut.</p>
        <Button asChild className="bg-cinelaunch-gold text-black hover:bg-cinelaunch-gold/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
