import { useThemeAnimations } from "@/hooks/use-theme-animations";
import { cn } from "@/lib/utils";

export const AnimatedCard = ({
  children,
  className,
  alwaysAnimate = false,
}) => {
  const { shouldAnimate } = useThemeAnimations();

  return (
    <div
      className={cn(
        "rounded-lg p-4",
        className,
        (alwaysAnimate || shouldAnimate) && "card-hover gradient-border",
        "transition-all duration-300"
      )}
    >
      {children}
    </div>
  );
};
