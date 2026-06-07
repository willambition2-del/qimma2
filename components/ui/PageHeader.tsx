import Badge from "@/components/ui/Badge";

interface PageHeaderProps {
  title: React.ReactNode;
  description: string;
  badge?: string;
  imageSrc?: string;
}

export default function PageHeader({ 
  title, 
  description, 
  badge, 
  imageSrc = "/images/hero/slide-2.png" 
}: PageHeaderProps) {
  return (
    <section className="relative flex items-center overflow-hidden bg-neutral-900 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none" 
        style={{ backgroundImage: `url(${imageSrc})` }} 
      />
      
      {/* Dark overlay for excellent text contrast */}
      <div className="absolute inset-0 bg-primary-dark/85 z-5" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10" />

      {/* Content */}
      <div className="relative container-custom text-center z-20">
        {badge && (
          <Badge variant="light" className="mb-6 border-white/20 bg-white/10 text-white">
            {badge}
          </Badge>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Bottom Gradient fading into white background */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}
