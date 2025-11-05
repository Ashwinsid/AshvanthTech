import { Laptop, MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-card py-12 mt-16">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Laptop className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">
              Ashvanth Technologies
            </span>
          </Link>
          <p className="text-muted-foreground">
            Your trusted partner for all laptop services in Chennai and Medavakkam.
          </p>
        </div>

        <div className="md:mx-auto">
          <h3 className="font-headline font-semibold mb-4 text-foreground">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
            <li><a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
          </ul>
        </div>
        
        <div className="md:ml-auto">
          <h3 className="font-headline font-semibold mb-4 text-foreground">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span className="text-muted-foreground">
                123 Tech Street, Medavakkam,<br />Chennai, Tamil Nadu 600100
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-1 text-primary shrink-0" />
              <a href="tel:+919855999998" className="text-muted-foreground hover:text-foreground transition-colors">
                +91 98559 99998
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-4 w-4 mt-1 text-primary shrink-0" />
              <span className="text-muted-foreground">
                Mon - Sat: 10:00 AM - 8:00 PM
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container text-center mt-8 pt-8 border-t border-border/40">
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Ashvanth Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
