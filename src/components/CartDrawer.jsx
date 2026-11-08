import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Truck, Check, ArrowRight, Phone, Send, Sparkles } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'لاہور',
    notes: ''
  });
  const [isOrdered, setIsOrdered] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = subtotal >= 3000 || subtotal === 0 ? 0 : 250;
  const grandTotal = subtotal + deliveryFee;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const generateWhatsAppMessage = () => {
    let msg = `*🌾 خالص چکی — نیا کسٹمر آرڈر*%0A`;
    msg += `----------------------------%0A`;
    msg += `*کسٹمر کا نام:* ${formData.name || 'کسٹمر'}%0A`;
    msg += `*رابطہ نمبر:* ${formData.phone || 'N/A'}%0A`;
    msg += `*شہر:* ${formData.city}%0A`;
    msg += `*پتہ:* ${formData.address || 'N/A'}%0A`;
    if (formData.notes) msg += `*نوٹ:* ${formData.notes}%0A`;
    msg += `----------------------------%0A`;
    msg += `*آرڈر کی تفصیل:*%0A`;
    
    cartItems.forEach((item, idx) => {
      msg += `${idx + 1}. ${item.nameUrdu} (${item.selectedSize.toUpperCase()}) x ${item.quantity} = Rs. ${(item.price * item.quantity).toLocaleString()}%0A`;
    });

    msg += `----------------------------%0A`;
    msg += `*سب ٹوٹل:* Rs. ${subtotal.toLocaleString()}%0A`;
    msg += `*ڈلیوری چارجز:* ${deliveryFee === 0 ? 'مفت (Free)' : `Rs. ${deliveryFee}`}%0A`;
    msg += `*کل رقم (Grand Total):* Rs. ${grandTotal.toLocaleString()}%0A`;
    msg += `*ادائیگی کا طریقہ:* کیش آن ڈلیوری (Cash on Delivery)%0A`;

    return msg;
  };

  const handleWhatsAppCheckout = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert('برائے مہربانی اپنا نام، موبائل نمبر اور مکمل پتہ درج فرمائیں۔');
      return;
    }
    const msg = generateWhatsAppMessage();
    const url = `https://wa.me/923001234567?text=${msg}`;
    window.open(url, '_blank');
  };

  const handleCODConfirm = () => {
    if (!formData.name || !formData.phone || !formData.address) {
      alert('برائے مہربانی اپنا نام، موبائل نمبر اور مکمل پتہ درج فرمائیں۔');
      return;
    }
    const randNum = 'KC-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randNum);
    setIsOrdered(true);
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Drawer Container */}
      <div 
        className="relative z-10 w-full max-w-xl bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-[#E2D8C6] text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E8DEC9] bg-[#FFFFFF] flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F2ECE1] text-[#4A3E31] transition"
            aria-label="Close Cart"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            <span className="font-urdu text-xl font-bold text-[#2A231C]">
              آپ کی ٹوکری (Shopping Cart)
            </span>
            <div className="w-8 h-8 rounded-full bg-[#2D4533] text-white flex items-center justify-center font-bold text-xs">
              {cartItems.reduce((acc, i) => acc + i.quantity, 0)}
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {isOrdered ? (
            /* Order Success State */
            <div className="text-center py-12 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#2D4533] text-white flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8 text-[#DEB877]" />
              </div>
              <h3 className="font-urdu text-2xl font-bold text-[#2A231C]">
                مبارک ہو! آپ کا آرڈر موصول ہو چکا ہے
              </h3>
              <p className="text-sm text-[#6F6456] font-urdu">
                آپ کا آرڈر نمبر ہے: <strong className="text-[#2D4533]">{orderNumber}</strong>
                <br />
                ہمارا نمائندہ فوری تصدیق کے لیے آپ کے واٹس ایپ / فون پر رابطہ کرے گا۔
              </p>
              <div className="bg-white p-4 rounded-xl border border-[#E2D8C6] text-xs text-[#5D5245] space-y-1 font-urdu text-right">
                <div><strong>نام:</strong> {formData.name}</div>
                <div><strong>فون:</strong> {formData.phone}</div>
                <div><strong>شہر:</strong> {formData.city}</div>
                <div><strong>پتہ:</strong> {formData.address}</div>
                <div className="pt-2 text-left font-bold text-[#2D4533]">
                  ادائیگی کا طریقہ: کیش آن ڈلیوری (COD)
                </div>
              </div>
              <button
                onClick={() => {
                  setIsOrdered(false);
                  onClose();
                }}
                className="mt-4 px-6 py-3 rounded-xl bg-[#2D4533] text-white font-bold text-sm font-urdu"
              >
                شاپنگ جاری رکھیں
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            /* Empty Cart State */
            <div className="text-center py-16 px-4 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EFE9DD] text-[#8C7E6D] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-urdu text-xl font-bold text-[#2C231B]">
                آپ کی ٹوکری خالی ہے
              </h3>
              <p className="text-xs text-[#7A6D5E] font-urdu">
                اپنی گھریلو ضرورت کے مطابق خالص چکی کا آٹا منتخب کریں اور ٹوکری میں شامل کریں۔
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#2D4533] text-white font-bold text-xs font-urdu"
              >
                آٹے کی اقسام دیکھیں
              </button>
            </div>
          ) : (
            /* Cart Items List */
            <>
              {/* Free delivery threshold indicator */}
              <div className="bg-[#EFE9DD] p-3 rounded-xl border border-[#DFD6C3] text-xs font-urdu text-[#4E4336] flex items-center justify-between">
                {subtotal >= 3000 ? (
                  <span className="text-[#2D4533] font-bold flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-[#C49B55]" />
                    مبارک ہو! آپ کا آرڈر فری ہوم ڈلیوری کے لیے اہل ہے۔
                  </span>
                ) : (
                  <span>
                    مزید <strong>Rs. {(3000 - subtotal).toLocaleString()}</strong> کی خریداری پر مفت ڈلیوری حاصل کریں۔
                  </span>
                )}
                <Truck className="w-4 h-4 text-[#2D4533]" />
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.itemKey}
                    className="bg-white p-3.5 rounded-xl border border-[#E8DFC9] flex items-center gap-3"
                  >
                    {/* Remove button */}
                    <button
                      onClick={() => onRemoveItem(item.itemKey)}
                      className="p-1.5 text-[#A39282] hover:text-[#B33A3A] transition"
                      title="آئٹم حذف کریں"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    {/* Price and Quantity */}
                    <div className="text-left min-w-[90px]">
                      <div className="font-bold text-sm text-[#2D4533]">
                        Rs. {(item.price * item.quantity).toLocaleString()}
                      </div>
                      <div className="flex items-center gap-2 mt-1 border border-[#D5C9B6] rounded-lg bg-[#FAF8F5]">
                        <button
                          onClick={() => onUpdateQuantity(item.itemKey, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#4A3D2F]"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-[#2D4533]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.itemKey, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#4A3D2F]"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="flex-1 text-right">
                      <div className="font-urdu font-bold text-sm text-[#2A231C]">
                        {item.nameUrdu}
                      </div>
                      <div className="flex items-center gap-1.5 justify-end text-xs text-[#8C7E6D] mt-0.5">
                        <span className="bg-[#EFE9DD] px-2 py-0.2 rounded font-bold text-[#2D4533]">
                          {item.selectedSize.toUpperCase()} بیگ
                        </span>
                        <span>Rs. {item.price.toLocaleString()} فی پیک</span>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.nameEnglish}
                      className="w-14 h-14 rounded-lg object-cover border border-[#DFD6C3]"
                    />
                  </div>
                ))}
              </div>

              {/* Delivery Address Form */}
              <div className="bg-white p-4 rounded-2xl border border-[#E5DAC6] space-y-3">
                <h4 className="font-urdu text-sm font-bold text-[#2D4533] border-b border-[#F0E9DC] pb-2">
                  🚚 ڈلیوری کی تفصیلات درج کریں:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-bold text-[#6D6254] font-urdu mb-1">
                      آپ کا مکمل نام *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="مثلاً: محمد احمد"
                      className="w-full text-right p-2 rounded-lg bg-[#FAF8F5] border border-[#DCD3C0] text-xs focus:ring-1 focus:ring-[#2D4533] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#6D6254] font-urdu mb-1">
                      موبائل / واٹس ایپ نمبر *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="0300-1234567"
                      className="w-full text-right p-2 rounded-lg bg-[#FAF8F5] border border-[#DCD3C0] text-xs focus:ring-1 focus:ring-[#2D4533] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div className="sm:col-span-1">
                    <label className="block text-[11px] font-bold text-[#6D6254] font-urdu mb-1">
                      شہر *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="لاہور، اسلام آباد وغیرہ"
                      className="w-full text-right p-2 rounded-lg bg-[#FAF8F5] border border-[#DCD3C0] text-xs focus:ring-1 focus:ring-[#2D4533] outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-[#6D6254] font-urdu mb-1">
                      مکمل گلی / گھر کا پتہ *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="مکان نمبر، گلی، علاقہ"
                      className="w-full text-right p-2 rounded-lg bg-[#FAF8F5] border border-[#DCD3C0] text-xs focus:ring-1 focus:ring-[#2D4533] outline-none"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Footer Totals & Checkout Actions */}
        {!isOrdered && cartItems.length > 0 && (
          <div className="p-5 border-t border-[#E8DEC9] bg-[#FFFFFF] space-y-3">
            
            {/* Price Breakdown */}
            <div className="space-y-1.5 text-xs text-[#5D5245]">
              <div className="flex justify-between">
                <span className="font-bold text-[#2D4533]">Rs. {subtotal.toLocaleString()}</span>
                <span className="font-urdu">سب ٹوٹل (اشیاء کی قیمت):</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-[#2D4533]">
                  {deliveryFee === 0 ? 'مفت (Free)' : `Rs. ${deliveryFee}`}
                </span>
                <span className="font-urdu">ڈلیوری چارجز:</span>
              </div>
              <div className="pt-2 border-t border-[#F0E9DC] flex justify-between text-base font-extrabold text-[#2C231B]">
                <span className="text-[#2D4533]">Rs. {grandTotal.toLocaleString()}</span>
                <span className="font-urdu">کل واجب الادا رقم:</span>
              </div>
            </div>

            {/* 2 Checkout Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <button
                onClick={handleWhatsAppCheckout}
                className="py-3 px-3 rounded-xl bg-[#2D4533] hover:bg-[#223527] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow font-urdu"
              >
                <Send className="w-3.5 h-3.5 text-[#DEB877]" />
                <span>واٹس ایپ پر آرڈر بھیجیں</span>
              </button>

              <button
                onClick={handleCODConfirm}
                className="py-3 px-3 rounded-xl bg-[#C49B55] hover:bg-[#B38A45] text-[#1E2B20] font-bold text-xs flex items-center justify-center gap-1.5 shadow font-urdu"
              >
                <Truck className="w-3.5 h-3.5" />
                <span>کیش آن ڈلیوری آرڈر</span>
              </button>
            </div>

            <div className="text-center text-[10px] text-[#8C7E6D] font-urdu">
              🔒 100% محفوظ خریداری • سامان ملنے پر رقم ادا کریں
            </div>

          </div>
        )}

      </div>

    </div>
  );
}

