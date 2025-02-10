interface HeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Hero({ title, subtitle, className = "" }: HeroProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-md bg-gradient-to-t from-background to-primary/10 py-20 ${className}`}
    >
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="text-2xl font-light text-foreground">{subtitle}</p>
    </div>
  );
}
