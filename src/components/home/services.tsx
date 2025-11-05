import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Wrench, ShoppingCart } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Wrench,
    title: 'Repairs & Upgrades',
    description: 'Laptop/desktop repair, SSD/RAM upgrades, OS install, data backup & recovery.',
  },
  {
    icon: ShoppingCart,
    title: 'Sales & Accessories',
    description: 'New & refurbished laptops/desktops, printers, keyboards, mice, cables.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-12 md:py-20">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1593640408182-01c74c7d62dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Laptop repair service"
          fill
          className="object-cover"
          data-ai-hint="laptop repair service"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Services</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
            We offer a wide range of services to meet all your laptop needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 transition-transform transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm">
              <div className="mb-4 bg-primary/10 p-4 rounded-full">
                <service.icon className="h-10 w-10 text-primary" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
