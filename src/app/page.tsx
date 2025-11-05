import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { DiagnosisTool } from '@/components/home/diagnosis-tool';
import { BlogSection } from '@/components/home/blog-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Separator className="my-12 md:my-16" />
      <DiagnosisTool />
      <Separator className="my-12 md:my-16" />
      <BlogSection />
    </>
  );
}
