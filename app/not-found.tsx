import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="container-custom text-center py-20">
        <Image
          src="/brand/qimma-logo.svg"
          alt="قمة"
          width={120}
          height={48}
          className="mx-auto mb-8 h-12 w-auto"
        />
        <h1 className="text-8xl md:text-9xl font-bold text-primary/10 font-inter mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          الصفحة غير موجودة
        </h2>
        <p className="text-muted text-lg mb-8 max-w-md mx-auto">
          عذرًا، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="primary">
            العودة للرئيسية
          </Button>
          <Button href="/contact" variant="secondary">
            تواصل معنا
          </Button>
        </div>
      </div>
    </div>
  );
}
