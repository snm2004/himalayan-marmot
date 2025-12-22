import React from 'react';
import { HotelDetail } from '../types';

interface HotelDetailsTableProps {
  hotelDetails: HotelDetail[];
  packageTitle: string;
}

const HotelDetailsTable: React.FC<HotelDetailsTableProps> = ({ hotelDetails, packageTitle }) => {
  const totalNights = hotelDetails.reduce((sum, hotel) => sum + hotel.nights, 0);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden mb-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-mountain-blue via-slate-700 to-mountain-blue text-white px-6 py-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M10 10L5 5v10l5-5z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold tracking-wide flex items-center gap-3">
            <span className="text-golden-yellow text-2xl">🏠</span>
            <span>ཁྱིམ་ཚང་། Our Family Stays</span>
          </h3>
          <p className="text-sm opacity-90 mt-1 italic">Where you'll rest your head - carefully chosen by Tsewang's family</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left px-6 py-4 font-oswald font-black text-sm uppercase tracking-wider text-slate-700">
                City
              </th>
              <th className="text-left px-6 py-4 font-oswald font-black text-sm uppercase tracking-wider text-slate-700">
                Hotel
              </th>
              <th className="text-left px-6 py-4 font-oswald font-black text-sm uppercase tracking-wider text-slate-700">
                Room Category
              </th>
              <th className="text-left px-6 py-4 font-oswald font-black text-sm uppercase tracking-wider text-slate-700">
                Meal Plan
              </th>
              <th className="text-center px-6 py-4 font-oswald font-black text-sm uppercase tracking-wider text-slate-700">
                No of Nights
              </th>
            </tr>
          </thead>
          <tbody>
            {hotelDetails.map((hotel, index) => (
              <tr 
                key={index} 
                className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                  index % 2 === 0 ? 'bg-white' : 'bg-slate-25'
                }`}
              >
                <td className="px-6 py-4 font-semibold text-slate-800">
                  {hotel.city}
                </td>
                <td className="px-6 py-4 text-slate-700">
                  <span className="font-medium">{hotel.hotel}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                    hotel.category === 'Deluxe' 
                      ? 'bg-golden-yellow/20 text-golden-yellow border border-golden-yellow/30' 
                      : 'bg-slate-200 text-slate-700 border border-slate-300'
                  }`}>
                    {hotel.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-700 font-medium">
                  {hotel.mealPlan}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[#00bcd4] text-white rounded-full font-bold text-sm">
                    {hotel.nights}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gradient-to-r from-slate-100 to-slate-50 border-t-2 border-slate-200">
              <td colSpan={4} className="px-6 py-4 font-oswald font-black text-slate-800 uppercase tracking-wider">
                Total
              </td>
              <td className="px-6 py-4 text-center">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-mountain-blue text-white rounded-full font-black text-lg">
                  {totalNights}
                </span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Personal Note */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 px-6 py-4 border-t border-slate-200">
        <div className="flex items-start gap-3">
          <span className="text-golden-yellow text-lg mt-0.5">🙏</span>
          <div className="text-sm text-slate-600">
            <p className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <span>A Personal Note from Tsewang:</span>
            </p>
            <div className="bg-white/60 rounded-lg p-3 border-l-4 border-golden-yellow">
              <p className="text-xs italic text-slate-700 leading-relaxed">
                "These aren't just hotels - they're places where my family has stayed, where I know the owners personally.
                If any place is full, I'll find you something even better. That's my promise as your local host."
              </p>
            </div>
            <ul className="space-y-1 text-xs mt-3 text-slate-500">
              <li>• བདེ་འཇགས། All stays personally verified by our family</li>
              <li>• གཙང་མ། Clean, comfortable, and culturally respectful</li>
              <li>• ཟས་ཁང་། Meals prepared with local ingredients when possible</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsTable;