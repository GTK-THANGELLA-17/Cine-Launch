
import { Suspense, lazy, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout";
import { ThemeProvider } from "./components/ThemeProvider";
import { LoadingSplash } from "./components/LoadingSplash";
import Index from "./pages/Index";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const HowToGetFundingPage = lazy(() => import("./pages/HowToGetFundingPage"));
const SubmitProjectPage = lazy(() => import("./pages/SubmitProjectPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="cinelaunch-theme">
        <TooltipProvider>
          <Toaster />
          <AnimatePresence mode="wait">
            <LoadingSplash isLoading={isLoading} />
          </AnimatePresence>
          
          {!isLoading && (
            <BrowserRouter>
              <Layout>
                <Suspense fallback={
                  <div className="min-h-screen bg-cinelaunch-background flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cinelaunch-primary"></div>
                  </div>
                }>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:id" element={<ProjectDetailPage />} />
                    <Route path="/how-to-get-funding" element={<HowToGetFundingPage />} />
                    <Route path="/submit-project" element={<SubmitProjectPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </Layout>
            </BrowserRouter>
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
