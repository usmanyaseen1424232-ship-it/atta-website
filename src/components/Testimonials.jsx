import React from 'react';
import { TESTIMONIALS } from '../data/flours';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="reviews-section" className="py-20 bg-[#FAF8F5] border-b border-[#E3DACB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DEC8] text-[#554737] text-xs font-semibold uppercase tracking-wider mb-2">
            <Star className="w-3.5 h-3.5 text-[#C49B55] fill-[#C49B55]" />
            <span>ہمارے قابلِ قدر کسٹمرز کے تاثرات</span>
          </div>
          <h2 className="font-urdu text-3xl sm:text-4xl font-bold text-[#2A231C]">
            ۲۵ ہزار سے زائد گھرانوں کا بھروسہ
          </h2>
          <p className="text-sm sm:text-base text-[#6F6456] mt-2 font-urdu">
            دیکھیے وہ لوگ کیا کہتے ہیں جنہوں نے خالص چکی کے روایتی آٹے کو اپنے دسترخوان کا حصہ بنایا۔
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E8DFC9] shadow-sm hover:shadow-md transition flex flex-col justify-between text-right relative"
            >
              <Quote className="w-8 h-8 text-[#E2D8C6] absolute top-6 left-6" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 justify-end">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#C49B55] fill-[#C49B55]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#4E4336] leading-relaxed font-urdu mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="pt-4 border-t border-[#F2ECE1]">
                <div className="font-urdu text-base font-bold text-[#2C231B] flex items-center justify-end gap-1.5">
                  <CheckCircle className="w-4 h-4 text-[#3E6B48]" />
                  <span>{review.name}</span>
                </div>
                <div className="text-xs text-[#8C7E6D] mt-0.5 font-urdu">
                  {review.city}
                </div>
                <span className="inline-block mt-2 text-[11px] font-bold text-[#2D4533] bg-[#EFE9DD] px-2.5 py-0.5 rounded-full font-urdu">
                  {review.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

