import React from 'react';
import { Wheat, Phone, MapPin, Mail, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1C281F] text-[#EDE4D5] border-t border-[#314535] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2D3E31] text-right">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 justify-end">
              <div className="text-right">
                <span className="font-serif-display text-2xl font-bold text-white tracking-tight">KHAALIS</span>
                <span className="text-xl font-bold text-[#DEB877] font-urdu mr-2">خالص چکی</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#293B2D] border border-[#405645] flex items-center justify-center text-[#DEB877]">
                <Wheat className="w-5 h-5" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#BDB09E] leading-relaxed font-urdu">
              خالص چکی کا مشن ہر پاکستانی گھرانے تک 100% ملاوٹ سے پاک، پتھر کی روایتی ٹھنڈی چکی کا پسا ہوا تازہ آٹا پہنچانا ہے۔ ہم اناج سے چوکر اور قدرتی غذائیت ہرگز الگ نہیں کرتے۔
            </p>

            <div className="flex flex-wrap gap-2 justify-end pt-2">
              <span className="bg-[#243427] text-[#DEB877] text-[11px] font-bold px-3 py-1 rounded-full border border-[#394E3D] font-urdu">
                🌿 100% نیچرل اناج
              </span>
              <span className="bg-[#243427] text-[#DEB877] text-[11px] font-bold px-3 py-1 rounded-full border border-[#394E3D] font-urdu">
                🛡️ زیرو پریزرویٹو
              </span>
              <span className="bg-[#243427] text-[#DEB877] text-[11px] font-bold px-3 py-1 rounded-full border border-[#394E3D] font-urdu">
                📦 5, 15, 20, 40 KG پیکنگ
              </span>
            </div>
          </div>

          {/* Col 3: Popular Flours */}
          <div className="space-y-3">
            <h4 className="font-urdu text-base font-bold text-white border-b border-[#304334] pb-2">
              مشہور اقسام
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A896] font-urdu">
              <li>خالص چکی گندم آٹا (Whole Wheat)</li>
              <li>7-گرین ملٹی گرین آٹا (Multigrain)</li>
              <li>مکئی کا دیسی آٹا (Yellow Corn)</li>
              <li>جو کا آٹا و تلبینہ (Barley Flour)</li>
              <li>خالص دیسی چنے کا بیسن (Besan)</li>
              <li>گلوٹن فری آرٹیسن بلینڈ (Gluten Free)</li>
            </ul>
          </div>

          {/* Col 4: Packaging Sizes */}
          <div className="space-y-3">
            <h4 className="font-urdu text-base font-bold text-white border-b border-[#304334] pb-2">
              دستیاب پیکجنگ
            </h4>
            <ul className="space-y-2 text-xs text-[#B5A896] font-urdu">
              <li><strong>5 کلو گرام:</strong> کاٹن ایکو بیگ (ٹرائل پیک)</li>
              <li><strong>15 کلو گرام:</strong> خاندانی پندرہ روزہ سائز</li>
              <li><strong>20 کلو گرام:</strong> معیاری ماہانہ راشن بیگ (فری ڈلیوری)</li>
              <li><strong>40 کلو گرام:</strong> روایتی چکی بوری (ہول سیل ریٹ)</li>
            </ul>
          </div>

          {/* Col 5: Delivery & Contact */}
          <div className="space-y-3">
            <h4 className="font-urdu text-base font-bold text-white border-b border-[#304334] pb-2">
              رابطہ و ہوم ڈلیوری
            </h4>
            <div className="space-y-2.5 text-xs text-[#B5A896] font-urdu">
              <div className="flex items-center gap-2 justify-end">
                <span>0300-1234567 / 0321-7654321</span>
                <Phone className="w-4 h-4 text-[#DEB877]" />
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span>orders@khaalis-chakki.pk</span>
                <Mail className="w-4 h-4 text-[#DEB877]" />
              </div>
              <div className="flex items-start gap-2 justify-end">
                <span>چکی روڈ، نزد رائیونڈ روڈ، لاہور، پنجاب</span>
                <MapPin className="w-4 h-4 text-[#DEB877] flex-shrink-0 mt-0.5" />
              </div>
            </div>

            <div className="pt-2 text-[11px] text-[#9E9080] font-urdu">
              🚚 <strong>ڈلیوری کوریج:</strong> لاہور، اسلام آباد، راولپنڈی، کراچی، فیصل آباد، ملتان اور 40+ دیگر شہر۔
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row-reverse items-center justify-between text-xs text-[#8C7E6D] font-urdu gap-3">
          <div>
            © 2026 خالص چکی آرگینکس (Khaalis Chakki). جملہ حقوق محفوظ ہیں۔
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>بنایا گیا روایتی خلوص اور خالص معیار کے ساتھ</span>
            <Heart className="w-3.5 h-3.5 text-[#C49B55] fill-[#C49B55]" />
          </div>
        </div>

      </div>
    </footer>
  );
}

