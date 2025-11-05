
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().regex(/^\+91\d{10}$/, {
    message: "Phone number must be in the format +91XXXXXXXXXX.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "+91",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, phone, message } = values;
    const whatsappMessage = `Hello, I'm ${name}. My phone number is ${phone}. I need help with: ${message}`;
    const whatsappUrl = `https://wa.me/919855999998?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  }

  return (
    <section id="contact" className="container py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-muted-foreground mb-8">Tell us what you need—we reply fast.</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+91…" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you need?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Laptop repair / New PC / accessory / sales..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full font-semibold">Send via WhatsApp</Button>
            </form>
          </Form>
        </div>
        <div className="relative rounded-xl overflow-hidden aspect-video md:aspect-auto">
           <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.118933226467!2d80.20387061528699!3d12.96425099086053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d8b8a8b8b8b%3A0xad5zfvCREF75uApN9!2sAshvanth%20Technologies!5e0!3m2!1sen!2sin!4v1620831191069!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={false}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ashvanth Technologies Location"
            className='absolute top-0 left-0 w-full h-full'
          ></iframe>
        </div>
      </div>
    </section>
  );
}
