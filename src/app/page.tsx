import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { BlogSection } from '@/components/home/blog-section';
import { Separator } from '@/components/ui/separator';
import { ContactSection } from '@/components/home/contact-section';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Separator className="my-12 md:my-16" />
      <BlogSection />
      <Separator className="my-12 md:my-16" />
      <ContactSection />
    </>
  );
}
