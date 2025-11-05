import { WhatsAppIcon } from './icons/whatsapp-icon';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919855999998"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 animate-pulse"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
