import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '5 Signs Your Laptop Needs a Service',
    description: 'Is your laptop slowing down or acting up? Here are five key indicators that it\'s time for a professional check-up.',
    imageId: 'blog-1',
    slug: '#',
  },
  {
    id: 2,
    title: 'SSD vs. HDD: Which Upgrade is Right for You?',
    description: 'We break down the differences between Solid State Drives and Hard Disk Drives to help you make an informed decision.',
    imageId: 'blog-2',
    slug: '#',
  },
  {
    id: 3,
    title: 'The Importance of Regular Laptop Maintenance',
    description: 'Learn why proactive maintenance can save you money and extend the life of your device. A key service in Chennai.',
    imageId: 'blog-3',
    slug: '#',
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">From Our Blog</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
          Tips, tricks, and insights from our team of laptop experts.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          const postImage = PlaceHolderImages.find((p) => p.id === post.imageId);
          return (
            <Link href={post.slug} key={post.id} className="block group">
              <Card className="overflow-hidden h-full transition-shadow hover:shadow-xl bg-card">
                {postImage && (
                  <div className="relative aspect-video">
                    <Image
                      src={postImage.imageUrl}
                      alt={postImage.description}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      data-ai-hint={postImage.imageHint}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <CardTitle className="font-headline text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
