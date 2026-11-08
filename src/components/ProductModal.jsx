import React, { useState } from 'react';
import { X, Check, ShoppingBag, Leaf, Sparkles, Scale, HeartHandshake } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('20kg');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const price = product.prices[selectedSize] || product.prices['20kg'];
  const kgNumber = parseInt(selectedSize.replace('kg', ''));
  const perKgPrice = Math.round(price / kgNumber);
  const totalPrice = price * quantity;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart({
        ...product,
        selectedSize,
        price,
        itemKey: `${product.id}-${selectedSize}`
      });
    }
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      
      {/* Modal Container */}
      <div 
        className="relative bg-[#FAF8F5] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#E5DCCB] my-8 text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] text-[#4A3D2F] shadow-sm transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12">
          
          {/* Left / Top Image Showcase */}
          <div className="md:col-span-5 relative bg-[#EDE4D5] min-h-[280px] md:min-h-full">
            <img
              src={product.image}
              alt={product.nameEnglish}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-4 right-4 left-4 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#DEB877] block">
                {product.millingType}
              </span>
              <div className="font-urdu text-lg font-bold">
                {product.origin}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between text-xs text-[#8C6D46] font-semibold mb-1">
                {product.badge && (
                  <span className="bg-[#2D4533] text-white text-[11px] px-2.5 py-0.5 rounded-full font-urdu">
                    {product.badge}
                  </span>
                )}
                <span>{product.nameEnglish}</span>
              </div>
              <h2 className="font-urdu text-2xl sm:text-3xl font-bold text-[#2A231C]">
                {product.nameUrdu}
              </h2>
              <p className="text-xs text-[#7A6E5E] mt-1 font-urdu leading-relaxed">
                {product.taglineUrdu}
              </p>
            </div>

            {/* Detailed Description */}
            <p className="text-xs sm:text-sm text-[#4E4439] leading-relaxed font-urdu bg-[#F2ECDF] p-3.5 rounded-xl border border-[#E3D7C3]">
              {product.descriptionUrdu}
            </p>

            {/* Health Benefits List */}
            <div>
              <h4 className="text-xs font-bold text-[#2D4533] uppercase tracking-wider mb-2 font-urdu">
                ✨ غذائی فوائد و خصوصیات:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#524639] font-urdu">
                {product.benefitsUrdu.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 justify-end">
                    <span>{b}</span>
                    <Check className="w-3.5 h-3.5 text-[#3E6B48] flex-shrink-0 mt-0.5" />
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutrition Specs mini-bar */}
            <div className="bg-[#FFFFFF] p-3 rounded-xl border border-[#E8DEC8]">
              <div className="text-[11px] font-bold text-[#7A6D5D] mb-1.5 text-right font-urdu">
                غذائی اجزاء (فی ۱۰۰ گرام):
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className="bg-[#FAF7F2] p-1.5 rounded-lg border border-[#EDE4D5]">
                  <div className="text-[10px] text-[#8C7E6D]">کیلوریز</div>
                  <div className="font-bold text-[#2D4533]">{product.nutrition.calories}</div>
                </div>
                <div className="bg-[#FAF7F2] p-1.5 rounded-lg border border-[#EDE4D5]">
                  <div className="text-[10px] text-[#8C7E6D]">پروٹین</div>
                  <div className="font-bold text-[#2D4533]">{product.nutrition.protein}</div>
                </div>
                <div className="bg-[#FAF7F2] p-1.5 rounded-lg border border-[#EDE4D5]">
                  <div className="text-[10px] text-[#8C7E6D]">فائبر</div>
                  <div className="font-bold text-[#2D4533]">{product.nutrition.fiber}</div>
                </div>
                <div className="bg-[#FAF7F2] p-1.5 rounded-lg border border-[#EDE4D5]">
                  <div className="text-[10px] text-[#8C7E6D]">کاربز</div>
                  <div className="font-bold text-[#2D4533]">{product.nutrition.carbs}</div>
                </div>
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-[#8C7E6D] font-urdu">
                  تقریباً <strong>Rs. {perKgPrice}</strong> فی کلو
                </span>
                <span className="text-xs font-bold text-[#2C231B] font-urdu">
                  پیکجنگ سائز منتخب کریں:
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['5kg', '15kg', '20kg', '40kg'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition border ${
                      selectedSize === sz
                        ? 'bg-[#2D4533] text-white border-[#2D4533] shadow'
                        : 'bg-[#FFFFFF] text-[#4A3D2F] border-[#DFD5C2] hover:border-[#8C6D46]'
                    }`}
                  >
                    {sz.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="pt-2 border-t border-[#E8DEC8] flex items-center gap-3">
              <div className="flex items-center border border-[#D5C8B4] rounded-xl bg-white overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-[#4A3D2F] hover:bg-[#F2ECDF] font-bold"
                >
                  -
                </button>
                <span className="px-3 py-2 text-xs font-bold text-[#2D4533] min-w-[32px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-[#4A3D2F] hover:bg-[#F2ECDF] font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow font-urdu ${
                  added
                    ? 'bg-[#3A6B48] text-white'
                    : 'bg-[#2D4533] hover:bg-[#223527] text-white'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>کارٹ میں شامل کر دیا گیا!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-[#DEB877]" />
                    <span>
                      ٹوکری میں شامل کریں — Rs. {totalPrice.toLocaleString()}
                    </span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

