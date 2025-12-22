
import React from 'react';
import { BANK_DETAILS, CANCELLATION_POLICIES } from '../constants';

const Payments: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-oswald font-bold text-mountain-blue uppercase mb-4 tracking-tight">
            BOOKING & <span className="text-tibetan-red">PAYMENTS</span>
          </h1>
          <p className="text-slate-500 text-lg uppercase font-oswald tracking-[0.2em]">Official Secure Booking Channels</p>
        </div>

        <div className="grid gap-12">
          {/* Payment Terms Section */}
          <div className="bg-mountain-blue p-8 md:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
             <h2 className="text-3xl font-oswald font-bold text-golden-yellow mb-8 border-b border-white/10 pb-4 uppercase">
               PAYMENT TERMS
             </h2>
             <div className="space-y-6">
                <div className="flex items-start space-x-4">
                   <div className="bg-white/10 p-3 rounded-xl text-2xl">⏳</div>
                   <div>
                      <p className="font-oswald font-bold text-xl uppercase tracking-wide">50% Advance Payment</p>
                      <p className="font-light opacity-80 mt-1">To be paid within 30 days of tour booking to confirm your batch and bike.</p>
                   </div>
                </div>
                <div className="flex items-start space-x-4">
                   <div className="bg-white/10 p-3 rounded-xl text-2xl">🗓️</div>
                   <div>
                      <p className="font-oswald font-bold text-xl uppercase tracking-wide">Full Payment Deadline</p>
                      <p className="font-light opacity-80 mt-1">The remaining balance must be cleared at least 1 week before your arrival date.</p>
                   </div>
                </div>
                <div className="flex items-start space-x-4">
                   <div className="bg-white/10 p-3 rounded-xl text-2xl">⚠️</div>
                   <div>
                      <p className="font-oswald font-bold text-xl uppercase tracking-wide">Auto-Release Rule</p>
                      <p className="font-light opacity-80 mt-1">Bookings without cleared full payments 1 week prior will be released automatically without further intimation.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* Bank Section */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden">
            <h2 className="text-3xl font-oswald font-bold text-mountain-blue mb-10 border-b border-slate-100 pb-4 uppercase">
              BANK ACCOUNT DETAILS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg">
               <div className="group">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2 group-hover:text-tibetan-red transition-colors">Account Name</p>
                 <p className="font-oswald font-bold text-2xl text-slate-800 tracking-tight uppercase">{BANK_DETAILS.accountName}</p>
               </div>
               <div className="group">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2 group-hover:text-tibetan-red transition-colors">Account Number</p>
                 <p className="font-bold text-slate-800 text-3xl font-oswald tracking-tighter">{BANK_DETAILS.accountNo}</p>
               </div>
               <div className="group">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2 group-hover:text-tibetan-red transition-colors">Bank Name</p>
                 <p className="font-oswald font-bold text-2xl text-slate-800 tracking-tight uppercase">{BANK_DETAILS.bank}</p>
               </div>
               <div className="group">
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2 group-hover:text-tibetan-red transition-colors">IFSC Code</p>
                 <p className="font-bold text-slate-800 text-3xl font-oswald tracking-tighter">{BANK_DETAILS.ifsc}</p>
               </div>
            </div>
            <div className="mt-16 p-8 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200 text-center">
               <p className="text-slate-500 font-light leading-relaxed max-w-xl mx-auto">
                 Kindly email us a scan copy or screenshot of the bank receipt at <strong className="text-mountain-blue">himalayanmarmot19@gmail.com</strong> or WhatsApp <strong className="text-mountain-blue">+91 6006114260</strong> to enable us to track your booking.
               </p>
            </div>
          </div>

          {/* Policy Section */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-200">
            <h2 className="text-3xl font-oswald font-bold text-tibetan-red mb-10 uppercase tracking-tight">
              CANCELLATION POLICY
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-slate-900 text-white font-oswald uppercase text-xs tracking-widest">
                  <tr>
                    <th className="p-6 rounded-tl-[1.5rem]">Cancellation Timeline</th>
                    <th className="p-6 text-right rounded-tr-[1.5rem]">Deduction Percent</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {CANCELLATION_POLICIES.map((p, i) => (
                    <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition">
                      <td className="p-6 font-medium text-slate-600 uppercase tracking-wide">{p.period}</td>
                      <td className="p-6 text-right font-black text-tibetan-red text-xl font-oswald">{p.deduction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-12 space-y-4 text-slate-400 font-bold uppercase tracking-[0.1em] text-[10px]">
              <p>• All cancellations must be formal and sent via email.</p>
              <p>• Deductions are calculated on the total tour cost.</p>
              <p>• Himalayan Marmot reserves the right to adjust batches for safety.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
