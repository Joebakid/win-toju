import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-6 bg-background">
      <div className="max-w-md w-full space-y-8 text-center">
        
        {/* Typography Hierarchy */}
        <div className="space-y-4">
          <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            Error 404
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Page not found
          </h1>
        </div>

        {/* Refined Copy */}
        <p className="text-base text-muted-foreground leading-relaxed">
          The page you are looking for doesn't exist or has been moved. 
          Please check the URL or return to the homepage to find what you need.
        </p>

        {/* Action Area */}
        <div className="pt-4 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-11 px-8 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98]"
          >
            <svg 
              className="mr-2 h-4 w-4" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              viewBox="0 0 24 24"
            >
              <path d="m15 18-6-6 6-6"/>
            </svg>
            Return to homepage
          </Link>
        </div>

        {/* Subtle Decorative Element */}
        <div className="pt-12">
          <div className="w-12 h-[1px] bg-border mx-auto opacity-50" />
        </div>
        
      </div>
    </div>
  );
}