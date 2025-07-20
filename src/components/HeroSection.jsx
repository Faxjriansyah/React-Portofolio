import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4">
      <div className="container max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between z-10">
        {/* Kiri: Teks */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Pedro</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Machado</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>

        {/* Kanan: Foto */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 opacity-0 animate-fade-in-delay-4">
          <img src="/your-photo.jpg" alt="Your Name" className="rounded-2xl shadow-lg w-64 h-64 object-cover" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
