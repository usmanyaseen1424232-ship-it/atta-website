import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackagingBanner from './components/PackagingBanner';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import MillProcess from './components/MillProcess';
import NutritionTable from './components/NutritionTable';
import Testimonials from './components/Testimonials';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

import { FLOUR_CATEGORIES, FLOUR_PRODUCTS } from './data/flours';
import { Search, Filter, Sparkles, Wheat, PackageCheck, AlertCircle } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [globalSize, setGlobalSize] = useState('20kg');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Cart operations
  const handleAddToCart = (item) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(i => i.itemKey === item.itemKey);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemKey, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemKey);
      return;
    }
    setCartItems(prev =>
      prev.map(item => item.itemKey === itemKey ? { ...item, quantity: newQuantity } : item)
    );
  };

  const handleRemoveItem = (itemKey) => {
    setCartItems(prev => prev.filter(item => item.itemKey !== itemKey));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((acc, i) => acc + i.quantity, 0);
  }, [cartItems]);

  // Filter & Search Logic
  const filteredProducts = useMemo(() => {
    return FLOUR_PRODUCTS.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        product.nameUrdu.includes(q) ||
        product.nameEnglish.toLowerCase().includes(q) ||
        product.taglineUrdu.includes(q) ||
        product.descriptionUrdu.includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const scrollToProducts = () => {
    const el = document.getElementById('products-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#2C231B] selection:bg-[#E8DCC4] selection:text-[#2A3B2C]">
      
      {/* Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <Hero onExploreClick={scrollToProducts} />

      {/* Packaging Size Options Banner (5, 15, 20, 40 KG) */}
      <PackagingBanner
        selectedGlobalSize={globalSize}
        onSelectGlobalSize={(sizeKey) => setGlobalSize(sizeKey)}
      />

      {/* Main Catalog / Products Section */}
      <main id="products-section" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE2D2] text-[#4A3D2F] text-xs font-semibold uppercase tracking-wider mb-2">
            <Wheat className="w-3.5 h-3.5 text-[#2D4533]" />
            <span>ہمارا مکمل آرگینک کیٹلاگ</span>
          </div>
          <h2 className="font-urdu text-3xl sm:text-4xl font-bold text-[#2A231C]">
            ۱۴ مختلف قدرتی اجناس اور روایتی آٹے
          </h2>
          <p className="text-sm sm:text-base text-[#6F6456] mt-2 font-urdu">
            ہر آٹے کے کارڈ پر مطلوبہ پیکجنگ (5kg, 15kg, 20kg, 40kg) منتخب کریں اور تازہ ترین قیمت ملاحظہ کریں۔
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-3xl border border-[#E4DAC7] shadow-sm mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row-reverse gap-4 items-center justify-between">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="آٹے یا اناج کا نام تلاش کریں..."
                className="w-full text-right pr-10 pl-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#DFD5C2] text-xs sm:text-sm focus:ring-2 focus:ring-[#2D4533] outline-none font-urdu"
              />
              <Search className="w-4 h-4 text-[#8C7E6D] absolute right-3.5 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-2.5 text-xs text-[#8C7E6D] hover:text-[#2D4533]"
                >
                  صاف کریں
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-end w-full md:w-auto">
              {FLOUR_CATEGORIES.map(cat => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`py-2 px-3.5 rounded-xl text-xs font-bold transition-all border font-urdu ${
                      isActive
                        ? 'bg-[#2D4533] text-white border-[#2D4533] shadow-sm'
                        : 'bg-[#FAF8F5] text-[#554738] border-[#DFD5C2] hover:border-[#8C6D46] hover:bg-white'
                    }`}
                  >
                    <span>{cat.labelUrdu}</span>
                    <span className="text-[10px] block opacity-75 font-normal">{cat.labelEn}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Active filter summary bar */}
          <div className="pt-2 border-t border-[#F2ECE1] flex items-center justify-between text-xs text-[#7A6D5D] font-urdu">
            <div>
              دستیاب اقسام: <strong className="text-[#2D4533]">{filteredProducts.length}</strong> میں سے ۱۴
            </div>
            {activeCategory !== 'all' || searchQuery ? (
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="text-[#8C6D46] hover:underline font-bold"
              >
                فلٹرز ختم کریں (Reset All)
              </button>
            ) : (
              <span className="text-[11px] text-[#8C7E6D]">
                تمام آٹے روزانہ صبح تازہ پیسے جاتے ہیں
              </span>
            )}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                initialSize={globalSize}
                onAddToCart={handleAddToCart}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E2D8C6] p-8">
            <AlertCircle className="w-12 h-12 text-[#8C6D46] mx-auto mb-3" />
            <h3 className="font-urdu text-xl font-bold text-[#2A231C]">
              کوئی آٹا نہیں ملا
            </h3>
            <p className="text-xs text-[#6F6456] mt-1 font-urdu">
              برائے مہربانی تلاش کا لفظ تبدیل کریں یا تمام اقسام پر کلک کریں۔
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2 rounded-xl bg-[#2D4533] text-white text-xs font-bold font-urdu"
            >
              تمام آٹے دیکھیں
            </button>
          </div>
        )}

      </main>

      {/* Traditional Mill Story & Cold-Stone Process Section */}
      <MillProcess />

      {/* Interactive Health & Nutrition Comparison Chart */}
      <NutritionTable onSelectProduct={(p) => setQuickViewProduct(p)} />

      {/* Customer Reviews & Trust Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />

      {/* Quick View / Nutritional Details Modal */}
      {quickViewProduct && (
        <ProductModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
