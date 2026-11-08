import React from 'react';
import { MILL_STORY } from '../data/flours';
import { Sparkles, ShieldCheck, HeartPulse, CheckCircle2, XCircle } from 'lucide-react';

export default function MillProcess() {
  return (
    <section id="process-section" className="py-20 bg-[#FAF7F2] border-b border-[#E3DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5DCCB] text-[#554737] text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C49B55]" />
            <span>ہماری چکی کا روایتی طریقہ کار</span>
          </div>
          <h2 className="font-urdu text-3xl sm:text-4xl font-bold text-[#2A231C] leading-snug">
            {MILL_STORY.headingUrdu}
          </h2>
          <p className="text-sm sm:text-base text-[#6F6456] mt-3 font-urdu">
            {MILL_STORY.subheadingUrdu}
          </p>
        </div>

        {/* 3 Process Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {MILL_STORY.points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E8DFC9] shadow-sm hover:shadow-md transition text-right flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2D4533] text-[#FAF7F2] font-bold text-lg flex items-center justify-center mb-5 ml-auto shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="font-urdu text-xl font-bold text-[#2C231B] mb-3">
                  {pt.titleUrdu}
                </h3>
                <p className="text-xs sm:text-sm text-[#5D5245] leading-relaxed font-urdu">
                  {pt.descUrdu}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2ECE1] flex items-center justify-end gap-1.5 text-xs text-[#2D4533] font-bold font-urdu">
                <span>100% مستند قدرتی اصول</span>
                <CheckCircle2 className="w-4 h-4 text-[#C49B55]" />
              </div>
            </div>
          ))}
        </div>

        {/* Direct Comparison: Stone Chakki vs Commercial Roller Mill */}
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-10 border border-[#E2D8C6] shadow-sm">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#C49B55] uppercase tracking-wider font-urdu">علمی فرق جانیے</span>
            <h3 className="font-urdu text-2xl font-bold text-[#2A221A] mt-1">
              خالص پتھر کی چکی بمقابلہ بازاری صنعتی رولر مل
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E6DEC9] text-[#786C5D]">
                  <th className="py-3 px-4 font-urdu font-bold">پیمانہ / خصوصیت</th>
                  <th className="py-3 px-4 font-urdu font-bold text-[#2D4533] bg-[#F1EBDD]/60 rounded-t-lg">
                    خالص روایتی چکی (Khaalis Chakki)
                  </th>
                  <th className="py-3 px-4 font-urdu font-bold text-[#8C3A3A]">
                    عام بازاری مل کا سفید فائن آٹا
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0E9DC]">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#3B3227] font-urdu">درجہ حرارت (پسائی کا درجہ)</td>
                  <td className="py-3.5 px-4 text-[#2D4533] font-bold bg-[#F1EBDD]/40 font-urdu">
                    30°C سے 35°C (ٹھنڈا، وٹامنز جلتے نہیں)
                  </td>
                  <td className="py-3.5 px-4 text-[#8C3A3A] font-urdu">
                    85°C سے 90°C (گرم پسائی، تمام جراثیم ضائع)
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#3B3227] font-urdu">قدرتی چوکر اور چھان</td>
                  <td className="py-3.5 px-4 text-[#2D4533] font-bold bg-[#F1EBDD]/40 font-urdu">
                    100% سلامت (فائبر، مائیکرو نیوٹرینٹس موجود)
                  </td>
                  <td className="py-3.5 px-4 text-[#8C3A3A] font-urdu">
                    چھان اور چوکر مکمل چھان کر الگ کر دی جاتی ہے
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#3B3227] font-urdu">کیمیکل اور بلیچنگ ایجنٹس</td>
                  <td className="py-3.5 px-4 text-[#2D4533] font-bold bg-[#F1EBDD]/40 font-urdu">
                    زیرو فیصد (0% Chemicals, Pure)
                  </td>
                  <td className="py-3.5 px-4 text-[#8C3A3A] font-urdu">
                    سفید چمک لانے کے لیے بینزوئل پیرو آکسائیڈ کی ملاوٹ
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-[#3B3227] font-urdu">نظامِ ہاضمہ اور پیٹ پر اثر</td>
                  <td className="py-3.5 px-4 text-[#2D4533] font-bold bg-[#F1EBDD]/40 font-urdu">
                    انتہائی ہلکا، آنتوں کو صاف کرے اور قبض ختم کرے
                  </td>
                  <td className="py-3.5 px-4 text-[#8C3A3A] font-urdu">
                    آنتوں میں چپک کر گیس اور معدے کے مسائل پیدا کرے
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}

