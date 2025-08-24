
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Calculate parallax effect
  const backgroundY = scrollY * 0.5;
  const contentY = scrollY * 0.2;
  
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.jsdelivr.net/gh/BuildMediaStrategies/ucl-cancer-assets@f77912b55381fd3137d3035de4cf65d41829dac4/AJ19_4-17.jpg')",
          transform: `translateY(${backgroundY}px)`,
          backgroundPosition: `center ${50 + scrollY * 0.05}%`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      
      {/* Content */}
      <div
        className="relative h-full flex flex-col justify-center items-center text-center px-4"
        style={{ transform: `translateY(${contentY}px)` }}
      >
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {t.hero.title}
          </h1>
          <div className="bg-black/60 rounded-md px-4 py-2 mb-8" aria-label="About Cure Cancer at UCL">
            <p className="font-serif text-lg sm:text-xl font-medium leading-relaxed max-w-3xl mx-auto text-white">
              {t.hero.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="heroSolid" className="min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/booking">{t.hero.bookStay}</Link>
            </Button>
            <Button asChild variant="hero" size="lg" className="min-w-[200px] rounded-full transform transition-all duration-300 hover:translate-y-[-2px]">
              <Link to="/apartments">{t.hero.exploreApartments}</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated wave */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <svg 
          className="absolute bottom-0 w-full h-24 fill-white dark:fill-background"
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-50"
          />
          <path 
            d="M0,37.1L40,34.5C80,32,160,27,240,29.6C320,32,400,42,480,42.9C560,44,640,35,720,32.1C800,30,880,34,960,40.8C1040,47,1120,56,1200,56.6C1280,57,1360,48,1400,43.3L1440,39.1L1440,74L1400,74C1360,74,1280,74,1200,74C1120,74,1040,74,960,74C880,74,800,74,720,74C640,74,560,74,480,74C400,74,320,74,240,74C160,74,80,74,40,74L0,74Z"
            className="animate-wave opacity-100 [animation-delay:-4s]"
          />
        </svg>
      </div>
    </section>
  );
}
