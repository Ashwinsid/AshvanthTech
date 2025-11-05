import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Wrench, ShoppingCart } from 'lucide-react';

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
    <section id="services" className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Services</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
          We offer a wide range of services to meet all your laptop needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-8 transition-transform transform hover:-translate-y-2 bg-card">
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
    </section>
  );
}
