import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

// Navigation items
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        "backdrop-blur-md border-b border-transparent",
        isScrolled
          ? "py-3 bg-background/80 shadow-lg border-border/20"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-2xl font-bold text-primary flex items-center gap-2"
              onClick={handleNavLinkClick}
            >
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                FajriTech
              </span>
              <span className="text-foreground/80 font-semibold">
                Portfolio
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-foreground/80 font-medium",
                  "transition-all duration-300 hover:text-primary",
                  "hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/50"
                )}
                onClick={handleNavLinkClick}
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle for Desktop */}
            <div className="ml-4 pl-4 border-l border-border/50">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Theme Toggle for Mobile */}
            <div className="flex items-center">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                "hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50",
                "border border-border hover:border-primary/30",
                "flex items-center justify-center"
              )}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "fixed inset-0 top-0 left-0 w-full h-screen z-40",
            "bg-background/95 backdrop-blur-md transition-all duration-500",
            "flex flex-col items-center justify-center",
            "md:hidden",
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center space-y-8 w-full max-w-xs">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  "text-2xl font-semibold w-full text-center py-4 px-6 rounded-xl",
                  "text-foreground/80 hover:text-primary transition-all duration-300",
                  "hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50",
                  "border border-transparent hover:border-primary/20"
                )}
                onClick={handleNavLinkClick}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Theme Info */}
            <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm text-foreground/60 text-center">
                Theme toggle is available in the top right corner
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
