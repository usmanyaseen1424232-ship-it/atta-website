import React, { useState } from 'react';
import { ShoppingBag, Phone, Menu, X, Wheat, Sparkles } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'products-section', labelUrdu: 'تمام آٹے', labelEn: 'Flour Catalog' },
    { id: 'packaging-section', labelUrdu: 'پیکجنگ سائز', labelEn: 'Packaging Sizes' },
    { id: 'process-section', labelUrdu: 'روایتی چکی کا طریقہ', labelEn: 'Milling Process' },
    { id: 'nutrition-section', labelUrdu: 'غذائی موازنہ', labelEn: 'Nutrition Chart' },
    { id: 'reviews-section', labelUrdu: 'کسٹمر ریویوز', labelEn: 'Reviews' },
  ];

  const handleScrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/90 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
      {/* Top Banner Notice */}
      <div className="bg-[#2D4533] text-[#E8DCC4] text-xs md:text-sm py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
        <span>100% پتھر کی دھیمی چکی کا تازہ پسا آٹا — پورے پاکستان میں فری ہوم ڈلیوری 20kg اور 40kg پر</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 rounded-full bg-[#EFE8DC] border border-[#D5C7B2] flex items-center justify-center shadow-inner text-[#2D4533]">
              <Wheat className="w-7 h-7" />
            </div>
            <div className="flex flex-col text-right">
              <div className="flex items-center gap-2">
                <span className="font-serif-display text-2xl font-bold text-[#2A231C] tracking-tight">KHAALIS</span>
                <span className="text-xl font-bold text-[#8C6D46] font-urdu">خالص چکی</span>
              </div>
              <span className="text-[11px] tracking-wider uppercase text-[#6B6258] font-medium">Stone-Ground Organic Flours</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-[#4A4036] hover:text-[#2D4533] text-sm font-medium transition-colors hover:underline underline-offset-8 decoration-[#8C6D46]"
              >
                <span>{link.labelUrdu}</span>
                <span className="text-[11px] text-[#8C7E6E] block opacity-80">{link.labelEn}</span>
              </button>
            ))}
          </nav>

          {/* Actions: Phone/WhatsApp & Cart */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923001234567?text=السلام علیکم! مجھے خالص چکی کے آٹے کے بارے میں معلومات اور آرڈر کرنا ہے۔"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-[#EAE2D2] text-[#2D4533] hover:bg-[#DDD2C0] transition text-xs font-semibold border border-[#D0C2AC]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>0300-1234567</span>
            </a>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#2D4533] text-[#FBF9F5] hover:bg-[#233829] shadow-sm hover:shadow transition"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-[#DDC8A4]" />
              <span className="text-sm font-semibold hidden sm:inline">ٹوکری / Cart</span>
              {cartCount > 0 && (
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#B8873B] text-white text-xs font-bold ring-2 ring-[#2D4533]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 md:hidden text-[#4A4036] hover:text-[#2D4533]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F5EE] border-b border-[#E2D9C8] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className="w-full text-right py-2.5 px-3 rounded-lg hover:bg-[#EDE5D5] text-[#3A3127] font-medium text-base flex justify-between items-center"
            >
              <span className="text-xs text-[#8C7E6E]">{link.labelEn}</span>
              <span className="font-urdu text-lg">{link.labelUrdu}</span>
            </button>
          ))}
          <div className="pt-2 border-t border-[#E2D9C8]">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#2D4533] text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#DDC8A4]" />
              <span>ڈائریکٹ واٹس ایپ کال و آرڈر</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

