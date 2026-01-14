
import React from 'react';
import { CANCELLATION_POLICIES, COMPANY_NAME, EMAIL, ADDRESS_MAIN } from '../constants';

const Terms: React.FC = () => {
    return (
        <div className="bg-slate-50 min-h-screen py-20" style={{ paddingTop: 'var(--headerH, 100px)' }}>
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-oswald font-bold text-mountain-blue uppercase mb-4 tracking-tight">
                        Terms & <span className="text-tibetan-red">Policies</span>
                    </h1>
                    <p className="text-slate-500 text-lg uppercase font-oswald tracking-[0.2em]">Legal & Booking Information</p>
                </div>

                <div className="space-y-12">

                    {/* Terms of Service Section */}
                    <section id="terms" className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-oswald font-bold text-mountain-blue mb-6 uppercase tracking-wide border-b pb-4">
                            Terms of Service
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed space-y-4">
                            <p>
                                Welcome to {COMPANY_NAME}. By booking a tour with us, you agree to the following terms and conditions.
                                Our expeditions involve high-altitude motorcycle riding which carries inherent risks. Participants must
                                ensure they are physically fit and possess a valid motorcycle driving license.
                            </p>
                            <p>
                                <strong>Responsibility:</strong> While we provide expert guidance, backup support, and medical safety measures,
                                {COMPANY_NAME} is not liable for delays or alterations in the program due to natural hazards, flight cancellations,
                                accident, breakdown of machinery/transport, weather, sickness, landslides, political closures, or any untoward incidents.
                            </p>
                            <p>
                                <strong>Jurisdiction:</strong> All disputes shall be subject to the jurisdiction of the courts in Leh, Ladakh.
                            </p>
                        </div>
                    </section>

                    {/* Privacy Policy Section */}
                    <section id="privacy" className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-oswald font-bold text-mountain-blue mb-6 uppercase tracking-wide border-b pb-4">
                            Privacy Policy
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-600 font-light leading-relaxed space-y-4">
                            <p>
                                We value your privacy. Any personal information collected (names, contact details, ID copies) is used solely
                                for the purpose of booking your tour, arranging permits (ILP), and ensuring your safety during the expedition.
                            </p>
                            <p>
                                We do not sell or share your data with third parties, except as required by local authorities for permit processing
                                or in case of medical emergency.
                            </p>
                        </div>
                    </section>

                    {/* Booking & Payment Policy (User Provided Text) */}
                    <section id="booking-policy" className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border-t-8 border-golden-yellow">
                        <h2 className="text-2xl font-oswald font-bold text-mountain-blue mb-8 uppercase tracking-wide border-b pb-4 flex items-center">
                            <span className="mr-3">💳</span> Booking & Payment Policy
                        </h2>

                        <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-mountain-blue mb-8">
                            <h3 className="font-oswald font-bold text-lg uppercase mb-3 text-slate-800">Payment Schedule</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                <strong>50% advance payments</strong> in our mentioned below account in <strong>30 days prior</strong> and rest of payment
                                <strong> one week before arrival</strong> the guest else bookings will be released automatically without any further intimation.
                            </p>
                            <div className="bg-white p-4 rounded-lg border border-slate-200 text-sm">
                                <p className="font-bold text-tibetan-red mb-1">📢 IMPORTANT:</p>
                                <p>Please mail us after depositing the payments with a scan copy of the bank receipt to enable us to track your booking.</p>
                                <p className="mt-2 text-slate-500">Email: {EMAIL}</p>
                            </div>
                        </div>

                        <h3 className="font-oswald font-bold text-lg uppercase mb-4 text-slate-800">Cancellation Policy</h3>
                        <p className="text-slate-600 mb-6">All cancellations have to be sent to us by email. The following are the deductions:</p>

                        <div className="overflow-hidden rounded-xl border border-slate-200">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-slate-100 text-slate-700 font-oswald uppercase text-xs tracking-widest">
                                    <tr>
                                        <th className="p-4 border-b border-slate-200">Timeline</th>
                                        <th className="p-4 border-b border-slate-200 text-right">Deduction</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm bg-white divide-y divide-slate-100">
                                    <tr>
                                        <td className="p-4 text-slate-600 font-medium">From booking till 30 days of departure</td>
                                        <td className="p-4 text-right font-bold text-tibetan-red">40% of package cost</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600 font-medium">From 30 to 15 days of departure</td>
                                        <td className="p-4 text-right font-bold text-tibetan-red">60% of package cost</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600 font-medium">From 15 days to 7 days of departure</td>
                                        <td className="p-4 text-right font-bold text-tibetan-red">85% of package cost</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-slate-600 font-medium">Less than 7 Days of departure</td>
                                        <td className="p-4 text-right font-bold text-tibetan-red">100% of package cost</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-xs text-slate-400 uppercase tracking-widest">Address for Correspondence</p>
                            <p className="text-slate-600 font-medium mt-1">{ADDRESS_MAIN}</p>
                        </div>

                    </section>

                </div>
            </div>
        </div>
    );
};

export default Terms;
