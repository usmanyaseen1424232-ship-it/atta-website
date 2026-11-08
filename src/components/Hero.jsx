import React from 'react';
import { ShieldCheck, Truck, Sparkles, ArrowDown, Leaf, HeartHandshake } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  return (
    <section className="relative overflow-hidden bg-[#243327] text-[#FAF7F2] py-16 md:py-24 border-b border-[#3D5241]">
      {/* Background with warm rustic overlay */}
      <div className="absolute inset-0 z-0 opacity-25 mix-blend-overlay">
        <img
          src="/images/hero_chakki.jpg"
          alt="Traditional Chakki Stone Flour Mill"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E2C21] via-[#243327]/90 to-[#2E4132]/80 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            
            {/* Top Organic Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#354B3A] border border-[#4D6953] text-[#D8C7A5] text-xs sm:text-sm font-medium shadow-sm">
              <Leaf className="w-4 h-4 text-[#C49B55]" />
              <span>100% خالص، بغیر کیمیکل اور قدرتی چھان سے بھرپور</span>
            </div>

            {/* Urdu Main Title */}
            <h1 className="font-urdu text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.3] text-[#FAF6ED] tracking-wide">
              روایتی پتھر کی چکی کا پسا
              <br />
              <span className="text-[#DEB877] font-serif-display font-normal italic">خالص اور صحت بخش </span>
              آٹا
            </h1>

            {/* Subtitles (Urdu & English) */}
            <p className="text-[#D3C7B6] text-base sm:text-lg max-w-2xl mx-auto lg:mr-0 leading-relaxed">
              ہم تیز رفتار مشینوں کی بجائے پرانے وقتوں کی طرح دھیمی رفتار پتھر پر اناج پیستے ہیں، تاکہ گندم کے قدرتی حیاتین اور چوکر سلامت رہیں۔ 14 منفرد دیسی اناج، 5 کلو سے 40 کلو تک محفوظ کاٹن و جیوٹ پیکنگ میں۔
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row-reverse gap-4 justify-center lg:justify-start pt-2">
              <button
                onClick={onExploreClick}
                className="px-7 py-4 rounded-xl bg-[#C49B55] hover:bg-[#B38A45] text-[#1E2B20] font-bold text-base shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-urdu"
              >
                <span>تمام 14 اقسام دیکھیں</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/923001234567?text=السلام علیکم! مجھے خالص چکی کے آٹے کا آرڈر کرنا ہے۔ برائے مہربانی ریٹ لسٹ بھیج دیں۔"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl bg-[#2D4533] hover:bg-[#38543F] text-[#FAF6ED] border border-[#4E6C55] font-semibold text-base transition flex items-center justify-center gap-2 font-urdu"
              >
                <span>براہ راست واٹس ایپ آرڈر</span>
              </a>
            </div>

            {/* Feature Pills */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-right">
              <div className="bg-[#1C271E]/60 p-3 rounded-xl border border-[#3A4E3E]">
                <div className="text-xl font-bold text-[#DEB877]">14+</div>
                <div className="text-xs text-[#B8AA97] font-urdu">مختلف دیسی اجناس</div>
              </div>
              <div className="bg-[#1C271E]/60 p-3 rounded-xl border border-[#3A4E3E]">
                <div className="text-xl font-bold text-[#DEB877]">5-40 KG</div>
                <div className="text-xs text-[#B8AA97] font-urdu">پیکجنگ سائزز</div>
              </div>
              <div className="bg-[#1C271E]/60 p-3 rounded-xl border border-[#3A4E3E]">
                <div className="text-xl font-bold text-[#DEB877]">100%</div>
                <div className="text-xs text-[#B8AA97] font-urdu">پتھر کی ٹھنڈی پسائی</div>
              </div>
              <div className="bg-[#1C271E]/60 p-3 rounded-xl border border-[#3A4E3E]">
                <div className="text-xl font-bold text-[#DEB877]">زیرو</div>
                <div className="text-xs text-[#B8AA97] font-urdu">کیمیکل و ملاوٹ</div>
              </div>
            </div>

          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#526B57] bg-[#2C3E30]/70 p-4 shadow-2xl backdrop-blur-sm">
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
                <img
                  src="/images/wheat_flour.jpg"
                  alt="Fresh Stone-Ground Whole Wheat Atta"
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A261C] via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 left-4 text-right bg-[#1A261C]/80 backdrop-blur-md p-4 rounded-xl border border-[#3E5242]">
                  <span className="text-xs font-semibold text-[#DEB877] uppercase tracking-wider block">روایتی معیار</span>
                  <div className="font-urdu text-lg font-bold text-[#FAF7F2]">100% خالص چکی گندم آٹا</div>
                  <p className="text-xs text-[#C8BCAE] mt-1 font-urdu">
                    سنہری گندم کی بالیوں سے تازہ تیار شدہ، مکمل چھان سلامت۔
                  </p>
                </div>
              </div>

              {/* Delivery Guarantee strip */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#D8C9B5] px-2 py-1">
                <span className="flex items-center gap-1.5 font-urdu">
                  <ShieldCheck className="w-4 h-4 text-[#DEB877]" />
                  خالص پن کی 100% واپسی گارنٹی
                </span>
                <span className="flex items-center gap-1.5 font-urdu">
                  <Truck className="w-4 h-4 text-[#DEB877]" />
                  محفوظ ہوم ڈلیوری
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

