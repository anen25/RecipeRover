import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-md border-b border-light-border z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-soft" : "bg-white/80"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-brand-primary">아는마케팅</div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-secondary hover:text-brand-primary transition-colors font-medium"
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-secondary hover:text-brand-primary transition-colors font-medium"
            >
              회사소개
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-secondary hover:text-brand-primary transition-colors font-medium"
            >
              포트폴리오
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-secondary hover:text-brand-primary transition-colors font-medium"
            >
              문의
            </button>
          </div>
          
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-brand-primary hover:bg-blue-700 text-white shadow-md hover:shadow-lg transition-all transform hover:scale-105"
          >
            프로젝트 문의
          </Button>
        </div>
      </div>
    </nav>
  );
}
