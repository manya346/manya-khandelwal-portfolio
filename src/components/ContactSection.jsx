import {
  Code,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="space-y-8 flex flex-col items-center">
          {/* <h3 className="text-2xl font-semibold mb-6 text-center">
            {" "}
            Contact Information
          </h3> */}

          <div className="grid gap-6 max-w-md mx-auto">
            <div className="flex items-center space-x-6">
              <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium">Email</h4>
                </div>
                <a
                  href="mailto:khandelwalmanya346@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  khandelwalmanya346@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {/* <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div> */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium">Phone</h4>
                </div>
                <a
                  href="tel:+919963115282"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 9963115282
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium">Location</h4>
                </div>
                <span className="text-muted-foreground">Hyderabad, India</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Send className="h-6 w-6 text-primary" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-medium">Social Links</h4>
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/manya-khandelwal-103b01283/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/manya346"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://leetcode.com/manya346/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="LeetCode"
                  >
                    <Code className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
