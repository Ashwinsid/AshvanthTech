import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Wrench, ShieldCheck, Cpu } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Laptop Repair',
    description: 'From broken screens to motherboard issues, we provide comprehensive repair services for all major laptop brands. We serve all over Chennai.',
  },
  {
    icon: ShieldCheck,
    title: 'General Maintenance',
    description: 'Keep your laptop running smoothly with our regular maintenance services, including cleaning, software updates, and performance optimization.',
  },
  {
    icon: Cpu,
    title: 'Hardware Upgrades',
    description: 'Boost your laptop\'s performance with RAM, SSD, and other hardware upgrades. We are the top choice for laptop service in Medavakkam.',
  },
];

export function Services() {
  return (
    <section id="services" className="container py-12 md:py-20">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Services</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
          We offer a wide range of services to meet all your laptop needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
