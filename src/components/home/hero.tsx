import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-laptop');

  return (
    <section className="container pt-20 pb-12 md:pt-32 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Expert Laptop Service,
            <br />
            Right at Your Doorstep
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Fast, reliable, and affordable laptop repair, maintenance, and upgrades in Chennai & Medavakkam. We fix it all, so you can get back to work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="font-semibold">
              <a href="#diagnose">
                Diagnose Your Problem <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-semibold">
              <a href="tel:09855999998">Call Us Now</a>
            </Button>
          </div>
        </div>
        <div className="relative aspect-[3/2] w-full max-w-lg mx-auto md:max-w-none">
          {heroImage && (
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
