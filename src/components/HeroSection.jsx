import { ArrowDown } from "lucide-react";
import { AnimatedButton } from "./ui";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="opacity-0 animate-fade-in-delay-1 text-primary">
              {" "}
              Manya
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Khandelwal
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            Hiii, I’m a full-stack developer, problem solver, basketballer, and
            fashion-forward workaholic in the making. I build powerful, scalable
            apps with React, Django, and PostgreSQL, and I bring as much energy
            to my code as I do to the basketball court (and my wardrobe).
          </p>
        </div>
        <div className="pt-4">
          <AnimatedButton as="a" href="#projects" alwaysAnimate={false}>
            View My Work
          </AnimatedButton>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
