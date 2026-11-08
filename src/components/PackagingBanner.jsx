import React from 'react';
import { PACKAGING_SIZES } from '../data/flours';
import { Package, Check, Sparkles, Truck } from 'lucide-react';

export default function PackagingBanner({ selectedGlobalSize, onSelectGlobalSize }) {
  return (
    <section id="packaging-section" className="py-14 bg-[#F5EFE6] border-b border-[#E3DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DEC8] text-[#594935] text-xs font-semibold uppercase tracking-wider mb-2">
            <Package className="w-3.5 h-3.5 text-[#8C6D46]" />
            <span>پیکجنگ کے تمام سائزز</span>
          </div>
          <h2 className="font-urdu text-2xl sm:text-3xl font-bold text-[#2C231B]">
            آپ کی گھریلو ضرورت کے مطابق ۴ پائیدار پیکجنگ سائز
          </h2>
          <p className="text-[#6C6154] text-sm sm:text-base mt-2 font-urdu">
            تمام آٹے حفظانِ صحت کے اصولوں کے مطابق سانس لینے والے روایتی کاٹن بیگز اور جیوٹ بوریوں میں محفوظ پیک کیے جاتے ہیں۔
          </p>
        </div>

        {/* 4 Packaging Size Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PACKAGING_SIZES.map((size) => {
            const isSelected = selectedGlobalSize === size.key;
            return (
              <div
                key={size.key}
                onClick={() => onSelectGlobalSize(size.key)}
                className={`relative rounded-2xl p-6 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#FFFFFF] border-[#2D4533] shadow-md ring-2 ring-[#2D4533]/30 -translate-y-1'
                    : 'bg-[#FAF7F2] border-[#E0D5C3] hover:border-[#8C6D46] hover:bg-white hover:shadow-sm'
                }`}
              >
                {size.popular && (
                  <span className="absolute -top-3 right-6 bg-[#C49B55] text-[#1E2B20] text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    سب سے زیادہ مقبول سائز
                  </span>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                    isSelected ? 'bg-[#2D4533] text-white' : 'bg-[#EAE2D2] text-[#4A3D2F]'
                  }`}>
                    {size.key.toUpperCase()}
                  </div>
                  <span className="text-xs font-medium text-[#7D7060] bg-[#EFE9DC] px-2.5 py-1 rounded-md">
                    {size.labelEn}
                  </span>
                </div>

                <h3 className="font-urdu text-xl font-bold text-[#2C231B] text-right mb-1">
                  {size.labelUrdu}
                </h3>
                <p className="text-xs text-[#7A6E5E] text-right mb-4 font-urdu">
                  {size.subUrdu}
                </p>

                <div className="pt-3 border-t border-[#EAE3D4] flex items-center justify-between text-xs text-[#5D5245]">
                  <span className="flex items-center gap-1 text-[#2D4533] font-medium font-urdu">
                    <Truck className="w-3.5 h-3.5" />
                    {size.shippingEst}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-[#2D4533] text-white' : 'bg-[#E5DCCB] text-[#42372A]'
                  }`}>
                    {isSelected ? 'منتخب شدہ' : 'منتخب کریں'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Weight Switcher */}
        <div className="mt-6 text-center text-xs text-[#7A6D5D] bg-[#EDE4D5] rounded-xl py-2.5 px-4 max-w-xl mx-auto border border-[#DDD0BD] font-urdu">
          💡 <strong>آسان طریقہ:</strong> نیچے دی گئی مصنوعات میں آپ کسی بھی آٹے کا الگ الگ وزن (5kg, 15kg, 20kg, 40kg) بھی منتخب کر سکتے ہیں۔
        </div>

      </div>
    </section>
  );
}

