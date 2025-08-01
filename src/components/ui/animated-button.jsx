import { useThemeAnimations } from "@/hooks/use-theme-animations";
import { cn } from "@/lib/utils";

export const AnimatedButton = ({
  children,
  className,
  alwaysAnimate = false,
  as: Component = "button",
  ...props
}) => {
  const { shouldAnimate } = useThemeAnimations();

  return (
    <Component
      className={cn(
        className,
        (alwaysAnimate || shouldAnimate) && "cosmic-button",
        !shouldAnimate &&
          "px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 active:scale-95"
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
