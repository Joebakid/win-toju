// app/components/ui/Loader.tsx

interface LoaderProps {
  /** Additional Tailwind classes for the container */
  className?: string;
  /** Optional text to display below the spinner. Pass empty string "" to hide. */
  text?: string;
  /** If true, the loader will take over the entire screen with a blurred backdrop */
  fullScreen?: boolean;
}

export default function Loader({ 
  className = "", 
  text = "Processing...", 
  fullScreen = false 
}: LoaderProps) {
  
  const loaderContent = (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {/* Industrial Double-Ring Spinner */}
      <div className="relative flex items-center justify-center w-14 h-14">
        {/* Outer Ring (Navy) */}
        <div className="absolute w-full h-full border-4 border-corporate-navy/10 rounded-full"></div>
        <div className="absolute w-full h-full border-4 border-corporate-navy border-t-transparent rounded-full animate-spin"></div>
        
        {/* Inner Ring (Red) rotating in reverse */}
        <div className="absolute w-8 h-8 border-4 border-corporate-red/10 rounded-full"></div>
        <div 
          className="absolute w-8 h-8 border-4 border-corporate-red border-t-transparent rounded-full animate-spin" 
          style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
        ></div>
      </div>

      {/* Pulsing Status Text */}
      {text && (
        <p className="text-xs font-bold tracking-widest text-corporate-navy uppercase animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  // Full-screen overlay mode
  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-corporate-cream/80 backdrop-blur-sm">
        {loaderContent}
      </div>
    );
  }

  // Standard inline mode
  return loaderContent;
}