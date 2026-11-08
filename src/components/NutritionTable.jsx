import React, { useState } from 'react';
import { FLOUR_PRODUCTS } from '../data/flours';
import { Sparkles, HeartPulse, Shield, Flame, Activity } from 'lucide-react';

export default function NutritionTable({ onSelectProduct }) {
  const [activeGoal, setActiveGoal] = useState('all');

  const goals = [
    { id: 'all', labelUrdu: 'تمام اقسام کا موازنہ', labelEn: 'All Grains' },
    { id: 'diabetes', labelUrdu: 'شوگر اور ذیابیطس فرینڈلی', labelEn: 'Low GI / Sugar Control' },
    { id: 'protein', labelUrdu: 'ہائی پروٹین اور فٹنس', labelEn: 'High Protein (>15g)' },
    { id: 'glutenfree', labelUrdu: '100% گلوٹن فری', labelEn: 'Gluten Free' },
    { id: 'weightloss', labelUrdu: 'وزن کم کرنا و ہائی فائبر', labelEn: 'Weight Loss' },
  ];

  const filteredFlours = FLOUR_PRODUCTS.filter(flour => {
    if (activeGoal === 'all') return true;
    if (activeGoal === 'glutenfree') return flour.category === 'glutenfree' || flour.id === 'yellow-maize' || flour.id === 'pearl-millet-bajra';
    if (activeGoal === 'protein') return parseFloat(flour.nutrition.protein) >= 15;
    if (activeGoal === 'diabetes') return ['multigrain', 'barley-jau', 'buckwheat-kuttu', 'gram-besan'].includes(flour.id);
    if (activeGoal === 'weightloss') return ['barley-jau', 'rolled-oats-flour', 'singhara-chestnut', 'multigrain'].includes(flour.id);
    return true;
  });

  return (
    <section id="nutrition-section" className="py-20 bg-[#F5EFE6] border-b border-[#E3DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E6DEC8] text-[#554737] text-xs font-semibold uppercase tracking-wider mb-2">
            <Activity className="w-3.5 h-3.5 text-[#2D4533]" />
            <span>طبی و غذائی چارٹ</span>
          </div>
          <h2 className="font-urdu text-3xl sm:text-4xl font-bold text-[#2A231C]">
            اپنی صحت اور ڈائٹ کے مطابق بہترین آٹے کا انتخاب کریں
          </h2>
          <p className="text-sm sm:text-base text-[#6F6456] mt-2 font-urdu">
            تمام غذائی اجزاء لیبارٹری ٹیسٹ شدہ اور خالص دیسی اناج کے قدرتی تناسب پر مبنی ہیں۔
          </p>
        </div>

        {/* Goal Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {goals.map((g) => {
            const active = activeGoal === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setActiveGoal(g.id)}
                className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all border font-urdu ${
                  active
                    ? 'bg-[#2D4533] text-white border-[#2D4533] shadow'
                    : 'bg-[#FAF8F5] text-[#554737] border-[#DFD6C3] hover:border-[#8C6D46] hover:bg-white'
                }`}
              >
                <span>{g.labelUrdu}</span>
                <span className="block text-[10px] opacity-75 font-normal">{g.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="bg-[#FFFFFF] rounded-2xl overflow-hidden border border-[#E3D9C7] shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead className="bg-[#EDE5D6] text-[#4A3E31] border-b border-[#DFD5C2]">
                <tr>
                  <th className="py-3.5 px-4 font-urdu font-bold">آٹا اور اناج کا نام</th>
                  <th className="py-3.5 px-4 font-urdu font-bold">غذائی درجہ</th>
                  <th className="py-3.5 px-4 font-urdu font-bold">پروٹین (فی 100g)</th>
                  <th className="py-3.5 px-4 font-urdu font-bold">فائبر (چوکر)</th>
                  <th className="py-3.5 px-4 font-urdu font-bold">کیلوریز</th>
                  <th className="py-3.5 px-4 font-urdu font-bold">سب سے بہترین استعمال</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F2ECE1]">
                {filteredFlours.map((flour) => (
                  <tr key={flour.id} className="hover:bg-[#FAF8F5] transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#2A231C]">
                      <div className="flex items-center gap-3 justify-end">
                        <div className="text-right">
                          <div className="font-urdu text-sm sm:text-base font-bold text-[#2C231B]">{flour.nameUrdu}</div>
                          <div className="text-[11px] text-[#8C7E6D]">{flour.nameEnglish}</div>
                        </div>
                        <img
                          src={flour.image}
                          alt={flour.nameEnglish}
                          className="w-10 h-10 rounded-lg object-cover border border-[#E0D5C3]"
                        />
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-block bg-[#F0E9DC] text-[#4A3D2F] px-2.5 py-0.5 rounded-full text-xs font-urdu font-medium">
                        {flour.badge}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#2D4533]">
                      {flour.nutrition.protein}
                    </td>
                    <td className="py-3.5 px-4 text-[#8C6D46] font-semibold">
                      {flour.nutrition.fiber}
                    </td>
                    <td className="py-3.5 px-4 text-[#6E6354]">
                      {flour.nutrition.calories}
                    </td>
                    <td className="py-3.5 px-4 text-[#5D5244] font-urdu text-xs">
                      {flour.suitableFor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}

