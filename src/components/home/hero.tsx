import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { TypewriterHeading } from './typewriter-heading';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-laptop');
  const headingText = "Expert Laptop Service,\nRight at Your Doorstep";

  return (
    <section className="container pt-20 pb-12 md:pt-32 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <TypewriterHeading text={headingText} />
          <p className="max-w-xl text-lg text-muted-foreground">
            Fast, reliable, and affordable laptop repair, maintenance, and upgrades in Chennai & Medavakkam. We fix it all, so you can get back to work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-semibold">
              <a href="#services">
                Our Services <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <a href="tel:+919855999998">Call Us Now</a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-[3/2] w-full max-w-lg mx-auto md:max-w-none p-1 rounded-xl shadow-2xl overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent before:animate-[shine_4s_linear_infinite] before:opacity-50">
          {heroImage && (
            <div className="relative w-full h-full rounded-[10px] overflow-hidden z-10">
              <Image 
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
