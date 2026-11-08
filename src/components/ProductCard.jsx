import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Sparkles, Scale, Info } from 'lucide-react';

export default function ProductCard({ product, initialSize = '20kg', onAddToCart, onQuickView }) {
  const [selectedSize, setSelectedSize] = useState(initialSize);
  const [justAdded, setJustAdded] = useState(false);

  const price = product.prices[selectedSize] || product.prices['20kg'];
  const kgNumber = parseInt(selectedSize.replace('kg', ''));
  const perKgPrice = Math.round(price / kgNumber);

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedSize,
      price,
      itemKey: `${product.id}-${selectedSize}`
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E6DEC8] hover:border-[#8C6D46] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group">
      
      {/* Product Image & Badges */}
      <div className="relative h-60 overflow-hidden bg-[#EFE9DD]">
        <img
          src={product.image}
          alt={product.nameEnglish}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 right-3 bg-[#2D4533] text-[#FAF6ED] text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm font-urdu">
            {product.badge}
          </span>
        )}

        {/* Origin Pill */}
        <span className="absolute bottom-3 right-3 bg-[#1F2B21]/80 backdrop-blur-md text-[#E8DCC4] text-[10px] px-2.5 py-0.5 rounded-md border border-[#3E5242] font-urdu">
          📍 {product.origin}
        </span>

        {/* Quick View Button */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-3 left-3 p-2 rounded-full bg-white/90 text-[#3C3227] hover:bg-white hover:text-[#2D4533] shadow-md transition transform -translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
          title="مکمل تفصیلات دیکھیں"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between text-right">
        <div>
          {/* Category Tag */}
          <div className="flex items-center justify-between text-xs text-[#8C7E6D] mb-1">
            <span className="text-[11px] tracking-wide uppercase text-[#8C6D46] font-semibold">
              {product.nameEnglish}
            </span>
          </div>

          {/* Urdu Title */}
          <h3 className="font-urdu text-xl font-bold text-[#2A221A] group-hover:text-[#2D4533] transition-colors leading-snug">
            {product.nameUrdu}
          </h3>

          {/* Urdu Tagline */}
          <p className="text-xs text-[#6B5F52] mt-1.5 font-urdu line-clamp-2 leading-relaxed">
            {product.taglineUrdu}
          </p>
        </div>

        {/* Packaging Selector (5kg, 15kg, 20kg, 40kg) */}
        <div className="mt-4 pt-3 border-t border-[#F0E9DC]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-[#8C7E6D] flex items-center gap-1 font-urdu">
              <Scale className="w-3 h-3" />
              وزن منتخب کریں:
            </span>
            <span className="text-xs font-semibold text-[#2D4533] font-urdu">
              {selectedSize === '5kg' && '5 کلو گرام (کاٹن پیک)'}
              {selectedSize === '15kg' && '15 کلو گرام (فیملی سائز)'}
              {selectedSize === '20kg' && '20 کلو گرام (راشن بیگ)'}
              {selectedSize === '40kg' && '40 کلو گرام (بڑی بوری)'}
            </span>
          </div>

          <div className="grid grid-cols-4 gap-1.5">
            {['5kg', '15kg', '20kg', '40kg'].map((sizeKey) => {
              const active = selectedSize === sizeKey;
              return (
                <button
                  key={sizeKey}
                  type="button"
                  onClick={() => setSelectedSize(sizeKey)}
                  className={`py-1.5 px-1 rounded-lg text-xs font-bold transition-all border ${
                    active
                      ? 'bg-[#2D4533] text-white border-[#2D4533] shadow-sm'
                      : 'bg-[#F7F3EA] text-[#554738] border-[#E2D8C7] hover:border-[#8C6D46] hover:bg-white'
                  }`}
                >
                  {sizeKey.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price & Per-KG Breakdown */}
        <div className="mt-4 flex items-baseline justify-between">
          <div className="text-left">
            <div className="text-xs text-[#8C7E6D]">
              تقریباً <span className="font-semibold text-[#4A3E31]">Rs. {perKgPrice}</span> / کلو
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs text-[#8C7E6D] ml-1 font-urdu">کل قیمت:</span>
            <span className="text-xl font-extrabold text-[#2D4533]">
              Rs. {price.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Action Buttons: Add to Cart & Quick View */}
        <div className="mt-4 grid grid-cols-5 gap-2">
          <button
            onClick={() => onQuickView(product)}
            className="col-span-2 py-2.5 px-2 rounded-xl bg-[#F0E9DC] hover:bg-[#E4DBCA] text-[#4A3E31] text-xs font-semibold transition flex items-center justify-center gap-1 border border-[#DDD3C2] font-urdu"
            title="غذائیت اور مکمل تفصیل دیکھیں"
          >
            <Info className="w-3.5 h-3.5" />
            <span>فوائد و طریقہ</span>
          </button>

          <button
            onClick={handleAdd}
            className={`col-span-3 py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-sm font-urdu ${
              justAdded
                ? 'bg-[#3A6B48] text-white'
                : 'bg-[#2D4533] hover:bg-[#233829] text-[#FAF7F2] hover:shadow'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>شامل ہو گیا!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 text-[#DEB877]" />
                <span>ٹوکری میں ڈالیں</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
}

