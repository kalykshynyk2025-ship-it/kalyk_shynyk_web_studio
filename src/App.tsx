import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { AdvantagesSection } from './components/AdvantagesSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InteractiveModal } from './components/InteractiveModal';
import { InquiryModal } from './components/InquiryModal';
import { ServiceItem } from './types';

export default function App() {
  const [previewItem, setPreviewItem] = useState<ServiceItem | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-red-600 selection:text-white flex flex-col">
      {/* Top sticky navigation bar */}
      <Navbar onOpenInquiry={() => setInquiryModalOpen(true)} />

      {/* Main Hero Section with Rhombus Ornament */}
      <main className="flex-1">
        <HeroSection onOpenInquiry={() => setInquiryModalOpen(true)} />

        {/* Services & Portfolio Grid (4 items with real links & preview) */}
        <ServicesGrid onPreview={(item) => setPreviewItem(item)} />

        {/* Why Choose "КАЛЫК ШЫНЫК" Advantages */}
        <AdvantagesSection />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Contacts Section with Telegram / WhatsApp / Phone / Email */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Live Interactive Iframe Preview Modal */}
      <InteractiveModal
        item={previewItem}
        onClose={() => setPreviewItem(null)}
      />

      {/* Order / Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
      />
    </div>
  );
}
