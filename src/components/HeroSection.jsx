import { ArrowDown } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* Kiri: Teks */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary block md:inline">
              <Typewriter
                words={[
                  "Fajriansyah",
                  "Web Developer",
                  "IT Enthusiast",
                  "IT Support",
                ]}
                loop={0} // infinite loop
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I'm Fajriansyah, a Web Developer who enjoys creating websites that
            are simple to use, visually appealing, and built with care.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Kanan: Foto */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 opacity-0 animate-fade-in-delay-4">
          <img
            src="/fajriansyah.png"
            alt="Your Name"
            className="rounded-2xl  w-64 h-64 object-cover"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
