import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const blogPosts = [
  {
    id: 1,
    title: '5 Signs Your Laptop Needs a Service',
    description: 'Is your laptop slowing down or acting up? Here are five key indicators that it\'s time for a professional check-up.',
    imageId: 'blog-1',
    slug: '5-signs-your-laptop-needs-a-service',
    content: `
      <p>Is your once-speedy laptop now crawling at a snail's pace? Do you find yourself waiting endlessly for applications to load? These are common frustrations that many laptop users experience. More often than not, these are clear indicators that your device is crying out for a professional service. Here are five signs to watch out for:</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Frequent Freezing or Crashing</h3>
      <p>If your laptop freezes or crashes unexpectedly, it could be a sign of software conflicts, malware, or even failing hardware. A professional can diagnose the root cause and resolve it.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Overheating</h3>
      <p>A laptop that feels unusually hot to the touch is a major red flag. Overheating can damage internal components. This is often caused by dust buildup in the cooling system, which a technician can safely clean.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">3. Loud Noises</h3>
      <p>Your laptop's fan should be relatively quiet. If you hear grinding or rattling noises, it could mean the fan is failing or there's a problem with your hard drive.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">4. Battery Drains Quickly</h3>
      <p>While all batteries degrade over time, a sudden drop in battery life can indicate a problem. A service can determine if you need a new battery or if other factors are at play.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">5. Slow Performance</h3>
      <p>A general slowdown can be caused by many things, from a full hard drive to malware. A tune-up can optimize your system and get it running like new again.</p>
      <p class="mt-6">If you're in Chennai or Medavakkam and notice any of these signs, don't wait for the problem to get worse. Contact Ashvanth Technologies for a comprehensive laptop service.</p>
    `
  },
  {
    id: 2,
    title: 'SSD vs. HDD: Which Upgrade is Right for You?',
    description: 'We break down the differences between Solid State Drives and Hard Disk Drives to help you make an informed decision.',
    imageId: 'blog-2',
    slug: 'ssd-vs-hdd-which-upgrade-is-right-for-you',
    content: `
      <p>One of the most effective ways to boost your laptop's performance is by upgrading its storage drive. The two main types are Hard Disk Drives (HDDs) and Solid State Drives (SSDs). But which one is the right choice for you?</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">Hard Disk Drives (HDDs)</h3>
      <p>HDDs are the traditional storage devices that use spinning platters to read and write data. They are known for their large storage capacities and lower cost per gigabyte, making them a great option for storing large files like movies and photo libraries.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">Solid State Drives (SSDs)</h3>
      <p>SSDs use flash memory to store data, similar to a USB drive. They have no moving parts, which makes them faster, more durable, and more energy-efficient than HDDs. Upgrading to an SSD can dramatically reduce boot times and make your entire system feel more responsive.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">The Verdict</h3>
      <p>For most users, upgrading to an SSD is the best way to improve overall performance. If you need a large amount of storage and are on a tight budget, an HDD might still be a good choice, or you could consider a dual-drive setup. At Ashvanth Technologies, we can help you choose the perfect upgrade for your needs and budget.</p>
    `
  },
  {
    id: 3,
    title: 'The Importance of Regular Laptop Maintenance',
    description: 'Learn why proactive maintenance can save you money and extend the life of your device. A key service in Chennai.',
    imageId: 'blog-3',
    slug: 'the-importance-of-regular-laptop-maintenance',
    content: `
      <p>Think of regular laptop maintenance like getting a tune-up for your car. It's a proactive measure that can prevent major problems down the road, saving you time, money, and stress. Here's why it's so important:</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">Extends Lifespan</h3>
      <p>Regular cleaning of internal components, especially the cooling system, prevents overheating, which is a leading cause of hardware failure. This can significantly extend the life of your laptop.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">Improves Performance</h3>
      <p>Over time, your laptop can get bogged down by junk files, fragmented data, and unnecessary startup programs. A maintenance service cleans this up, leading to faster boot times and smoother operation.</p>
      <h3 class="font-headline text-xl font-bold mt-6 mb-2">Enhances Security</h3>
      <p>Keeping your operating system and software up to date is crucial for security. Regular maintenance ensures you have the latest security patches, protecting you from viruses and malware.</p>
      <p class="mt-6">At Ashvanth Technologies in Chennai, our general maintenance service is a small investment that pays huge dividends in the long run. Keep your device in peak condition with our expert help.</p>
    `
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  const postImage = PlaceHolderImages.find(p => p.id === post?.imageId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="container max-w-4xl py-12 md:py-20">
      {postImage && (
        <div className="relative aspect-video mb-8 rounded-xl overflow-hidden">
          <Image
            src={postImage.imageUrl}
            alt={postImage.description}
            fill
            className="object-cover"
            data-ai-hint={postImage.imageHint}
            priority
          />
        </div>
      )}
      <h1 className="font-headline text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground text-lg mb-8">{post.description}</p>
      <div
        className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
