import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-3xl font-semibold">
              Developer with Drive, Design, and a Bit of Drama (the good kind).
            </h3>
            <p className="text-muted-foreground">
              Currently pursuing my B.Tech in Computer Science with a
              specialization in Cyber Security from Shiv Nadar University,
              Chennai (yes, I’ve survived the sun *and* the sems).I bring
              curiosity, clean code, and a good cup of coffee (yes, I'm a coffee
              person).
            </p>
            <p className="text-muted-foreground">
              I think in code — if I see a feature, my first thought is: “how
              did they build that?” I spot problems and instinctively map out
              solutions. Outside tech, I’m a basketball player, food lover,
              fashion enthusiast, and extrovert who thrives on good ideas and
              great conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {""}
                Get in Touch
              </a>
              <a
                href="/manya-khandelwal-resume-25.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colours duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">Web Developement</h4>
                  <p className="text-muted-foreground">
                    I'm fluent in React, Django REST Framework, PostgreSQL, and
                    Tailwind CSS, building full-stack applications that are both
                    scalable and sleek.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">
                    People + Product Minded
                  </h4>
                  <p className="text-muted-foreground">
                    Strong communication, collaborative spirit, and a clear
                    focus on user needs — I love working with teams, and turning
                    ideas into working software.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-semibold text-lg">
                    Cybersecurity Awareness
                  </h4>
                  <p className="text-muted-foreground">
                    With a specialization in Cyber Security, I bake security
                    into the dev process — mindful of vulnerabilities and best
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
