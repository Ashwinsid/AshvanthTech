import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Suresh Kumar',
    avatar: 'SK',
    title: 'Incredibly Fast Service!',
    description: 'My laptop was running extremely slow, and they upgraded me to an SSD. The difference is night and day. The service was quick, professional, and very affordable. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    avatar: 'PS',
    title: 'Saved My Data',
    description: 'I thought I had lost all my important files after my hard drive crashed. Ashvanth Technologies not only replaced the drive but also recovered all my data. Lifesavers!',
    rating: 5,
  },
  {
    name: 'Anand Raj',
    avatar: 'AR',
    title: 'Honest and Reliable',
    description: 'I had a complex motherboard issue that another service center said was unfixable. The team here diagnosed and fixed it within two days. Their expertise is top-notch.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
          Real reviews from happy clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="bg-card/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarFallback>{testimonial.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-headline text-lg font-semibold mb-2">{testimonial.title}</p>
              <p className="text-muted-foreground">"{testimonial.description}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
