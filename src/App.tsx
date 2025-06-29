
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchProvider } from "@/contexts/SearchContext";
import Index from "./pages/Index";
import TechnologySkills from "./pages/TechnologySkills";
import DesignSkills from "./pages/DesignSkills";
import BusinessSkills from "./pages/BusinessSkills";
import CreativeSkills from "./pages/CreativeSkills";
import AllTechDomains from "./pages/AllTechDomains";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <SearchProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/technology-skills" element={<TechnologySkills />} />
            <Route path="/design-skills" element={<DesignSkills />} />
            <Route path="/business-skills" element={<BusinessSkills />} />
            <Route path="/creative-skills" element={<CreativeSkills />} />
            <Route path="/all-tech-domains" element={<AllTechDomains />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SearchProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
