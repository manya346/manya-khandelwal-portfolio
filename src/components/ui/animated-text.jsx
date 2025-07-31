import { useThemeAnimations } from "@/hooks/use-theme-animations";
import { cn } from "@/lib/utils";

export const AnimatedText = ({
  children,
  className,
  alwaysAnimate = false,
}) => {
  const { shouldAnimate } = useThemeAnimations();

  return (
    <span
      className={cn(
        className,
        (alwaysAnimate || shouldAnimate) && "text-glow",
        "transition-all duration-300"
      )}
    >
      {children}
    </span>
  );
};
