import { useState } from "react";
import { cn } from "~/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  priority?: boolean;
}

export function OptimizedImage({ 
  src, 
  alt, 
  className, 
  priority = false,
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      onLoad={() => setIsLoaded(true)}
      {...props}
    />
  );
}