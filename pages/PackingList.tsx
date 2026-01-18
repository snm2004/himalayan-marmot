
import React, { useState, useEffect } from 'react';

// Config
const MONTHS = ['May', 'June', 'July', 'August', 'September', 'October'];
const DURATIONS = ['Short (5-7 Days)', 'Standard (8-10 Days)', 'Long (12+ Days)'];
const RIDER_TYPES = ['Solo Rider', 'Pillion', 'SUV / Cab'];

interface PackingItem {
    id: string;
    label: string;
    category: string;
    requiredFor: string[]; // 'all' or specific months/types
    isChecked: boolean;
}

const BASE_ITEMS: PackingItem[] = [
    // DOCUMENTS
    { id: 'doc-1', label: 'Driving License (Original + Copies)', category: 'Documents', requiredFor: ['all'], isChecked: false },
    { id: 'doc-2', label: 'Inner Line Permit (ILP)', category: 'Documents', requiredFor: ['all'], isChecked: false },
    { id: 'doc-3', label: 'Medical Insurance Card', category: 'Documents', requiredFor: ['all'], isChecked: false },
    { id: 'doc-4', label: 'Emergency Contact Numbers (Laminated)', category: 'Documents', requiredFor: ['all'], isChecked: false },

    // RIDING GEAR
    { id: 'gear-1', label: 'CE Level 2 Riding Jacket', category: 'Riding Gear', requiredFor: ['Solo Rider', 'Pillion'], isChecked: false },
    { id: 'gear-2', label: 'Waterproof Riding Gloves (2 Pairs)', category: 'Riding Gear', requiredFor: ['Solo Rider', 'Pillion'], isChecked: false },
    { id: 'gear-3', label: 'Knee Guards / Bionic Knees', category: 'Riding Gear', requiredFor: ['Solo Rider', 'Pillion'], isChecked: false },
    { id: 'gear-4', label: 'Full Face Helmet (DOT/ISI)', category: 'Riding Gear', requiredFor: ['Solo Rider', 'Pillion'], isChecked: false },
    { id: 'gear-5', label: 'Balaclava (Skull Cap)', category: 'Riding Gear', requiredFor: ['Solo Rider', 'Pillion'], isChecked: false },
    { id: 'gear-6', label: 'Raincoat / Poncho', category: 'Riding Gear', requiredFor: ['all'], isChecked: false }, // Everyone needs rain protection in July/Aug

    // CLOTHING
    { id: 'cloth-1', label: 'Heavy Thermals (Top + Bottom)', category: 'Clothing', requiredFor: ['all'], isChecked: false },
    { id: 'cloth-2', label: 'Fleece Jacket', category: 'Clothing', requiredFor: ['all'], isChecked: false },
    { id: 'cloth-3', label: 'Quick Dry T-Shirts', category: 'Clothing', requiredFor: ['all'], isChecked: false },
    { id: 'cloth-4', label: 'UV Sunglasses', category: 'Clothing', requiredFor: ['all'], isChecked: false },

    // MEDICAL
    { id: 'med-1', label: 'Diamox (Acetazolamide) - Consult Doctor', category: 'Medical Kit', requiredFor: ['all'], isChecked: false },
    { id: 'med-2', label: 'Camphor (Kapoor) - Helps breathing', category: 'Medical Kit', requiredFor: ['all'], isChecked: false },
    { id: 'med-3', label: 'ORS Packets (Hydration is key)', category: 'Medical Kit', requiredFor: ['all'], isChecked: false },
    { id: 'med-4', label: 'Pain Relief Spray (Volini/Moov)', category: 'Medical Kit', requiredFor: ['all'], isChecked: false },

    // TECH
    { id: 'tech-1', label: 'Power Bank (20,000 mAh)', category: 'Gadgets', requiredFor: ['all'], isChecked: false },
    { id: 'tech-2', label: 'BSNL Postpaid SIM (Only network that works)', category: 'Gadgets', requiredFor: ['all'], isChecked: false },
    { id: 'tech-3', label: 'Offline Maps Downloaded (Google/Maps.me)', category: 'Gadgets', requiredFor: ['all'], isChecked: false },
];

const EXTENDED_ITEMS: PackingItem[] = [
    { id: 'ext-1', label: 'Portable Oxygen Can', category: 'Medical Kit', requiredFor: ['all'], isChecked: false },
    { id: 'ext-2', label: 'Spare Key for Bike', category: 'Spares', requiredFor: ['Solo Rider'], isChecked: false },
    { id: 'ext-3', label: 'Chain Lube & Clean Spay', category: 'Spares', requiredFor: ['Solo Rider'], isChecked: false },
    { id: 'ext-4', label: 'Action Camera + Mounts', category: 'Gadgets', requiredFor: ['all'], isChecked: false },
];

const PackingList: React.FC = () => {
    const [step, setStep] = useState(1);
    const [preferences, setPreferences] = useState({
        month: 'June',
        duration: 'Standard (8-10 Days)',
        riderType: 'Solo Rider'
    });

    const [items, setItems] = useState<PackingItem[]>([]);


    useEffect(() => {
        document.title = 'Interactive Packing List | Himalayan Marmot';
        // Load saved state
        const saved = localStorage.getItem('himalayan_packing_list');
        if (saved) {
            setItems(JSON.parse(saved));
            setStep(2);
        }
    }, []);

    const generateList = () => {
        let newList = [...BASE_ITEMS];

        // Logic: Add cold weather gear for early/late season
        if (['May', 'October'].includes(preferences.month)) {
            newList.push({ id: 'cold-1', label: 'Down Feather Jacket (-10°C rated)', category: 'Clothing', requiredFor: ['all'], isChecked: false });
            newList.push({ id: 'cold-2', label: 'Hand Warmer Packets', category: 'Medical Kit', requiredFor: ['all'], isChecked: false });
        }

        // Logic: Monsoon gear
        if (['July', 'August'].includes(preferences.month)) {
            newList.push({ id: 'rain-1', label: 'Waterproof Overshoes / Gaiters', category: 'Riding Gear', requiredFor: ['Solo Rider', 'Pillion'], isChecked: false });
            newList.push({ id: 'rain-2', label: 'Waterproof Bag Covers', category: 'Gadgets', requiredFor: ['all'], isChecked: false });
        }

        // Logic: Long trip extras
        if (preferences.duration === 'Long (12+ Days)') {
            newList = [...newList, ...EXTENDED_ITEMS];
        }

        // Filter by rider type (some items might be excluded if logic required, currently logic adds to 'requiredFor')
        // For now we just dump everything that matches 'all' or specific type
        newList = newList.filter(item => item.requiredFor.includes('all') || item.requiredFor.includes(preferences.riderType));

        setItems(newList);
        setStep(2);
        window.scrollTo(0, 0);
    };

    const toggleItem = (id: string) => {
        const updated = items.map(item => item.id === id ? { ...item, isChecked: !item.isChecked } : item);
        setItems(updated);
        localStorage.setItem('himalayan_packing_list', JSON.stringify(updated));
    };

    const resetList = () => {
        localStorage.removeItem('himalayan_packing_list');
        setStep(1);
        setItems([]);
    };

    const calculateProgress = () => {
        const checked = items.filter(i => i.isChecked).length;
        return Math.round((checked / items.length) * 100) || 0;
    };

    const categories = Array.from(new Set(items.map(i => i.category)));

    return (
        <div className="min-h-screen bg-slate-50 pt-[120px] pb-20">

            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-oswald font-black text-mountain-blue uppercase mb-4 tracking-tighter">
                        PACK YOUR <span className="text-tibetan-red">BAGS</span>
                    </h1>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm md:text-base">
                        Smart Checklist for your Ladakh Expedition
                    </p>
                </div>

                {step === 1 ? (
                    <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-12 border border-slate-100 max-w-2xl mx-auto animate-fade-in-up">
                        <h2 className="text-2xl font-oswald font-bold text-slate-800 mb-8 text-center uppercase">Tell us about your trip</h2>

                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">When are you going?</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {MONTHS.map(m => (
                                        <button
                                            key={m}
                                            onClick={() => setPreferences({ ...preferences, month: m })}
                                            className={`py-3 rounded-xl text-sm font-bold transition-all ${preferences.month === m ? 'bg-mountain-blue text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                        >
                                            {m}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Trip Duration</label>
                                <div className="space-y-2">
                                    {DURATIONS.map(d => (
                                        <button
                                            key={d}
                                            onClick={() => setPreferences({ ...preferences, duration: d })}
                                            className={`w-full py-3 px-4 rounded-xl text-left text-sm font-bold transition-all flex justify-between items-center ${preferences.duration === d ? 'bg-mountain-blue text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                        >
                                            {d}
                                            {preferences.duration === d && <span>✓</span>}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">You are a...</label>
                                <div className="grid grid-cols-3 gap-2">
                                    {RIDER_TYPES.map(t => (
                                        <button
                                            key={t}
                                            onClick={() => setPreferences({ ...preferences, riderType: t })}
                                            className={`py-3 rounded-xl text-sm font-bold transition-all ${preferences.riderType === t ? 'bg-mountain-blue text-white shadow-lg scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={generateList}
                                className="w-full bg-[#25D366] text-white py-5 rounded-2xl font-black font-oswald text-xl uppercase tracking-[0.2em] shadow-xl hover:bg-green-600 transition-all transform hover:scale-[1.02] active:scale-95 mt-6"
                            >
                                GENERATE MY LIST
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="animate-fade-in-up">
                        {/* Progress Bar */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100 mb-8 sticky top-[100px] z-30">
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <h3 className="text-xl font-oswald font-bold text-mountain-blue">PACKING PROGRESS</h3>
                                    <p className="text-xs text-slate-500 font-bold uppercase">{calculateProgress()}% READY FOR LADAKH</p>
                                </div>
                                <button onClick={resetList} className="text-xs font-bold text-red-500 hover:underline">START OVER</button>
                            </div>
                            <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-linear-to-r from-mountain-blue to-cyan-500 transition-all duration-500"
                                    style={{ width: `${calculateProgress()}%` }}
                                ></div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            {categories.map(cat => {
                                const catItems = items.filter(i => i.category === cat);
                                const allChecked = catItems.every(i => i.isChecked);

                                return (
                                    <div key={cat} className={`bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border-l-[6px] transition-all ${allChecked ? 'border-green-400 opacity-60' : 'border-golden-yellow'}`}>
                                        <h3 className="text-2xl font-oswald font-bold uppercase mb-6 flex items-center">
                                            {cat}
                                            {allChecked && <span className="ml-3 text-green-500 text-lg">✅ DONE</span>}
                                        </h3>
                                        <div className="space-y-3">
                                            {catItems.map(item => (
                                                <div
                                                    key={item.id}
                                                    onClick={() => toggleItem(item.id)}
                                                    className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${item.isChecked ? 'bg-slate-50 text-slate-400' : 'bg-slate-50 hover:bg-blue-50 text-slate-800'}`}
                                                >
                                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 transition-all ${item.isChecked ? 'bg-green-500 border-green-500' : 'border-slate-300'}`}>
                                                        {item.isChecked && <span className="text-white text-xs font-bold">✓</span>}
                                                    </div>
                                                    <span className={`font-bold text-sm md:text-base ${item.isChecked ? 'line-through decoration-2' : ''}`}>
                                                        {item.label}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12 text-center bg-mountain-blue text-white p-8 rounded-[2rem]">
                            <h2 className="text-2xl font-oswald font-bold uppercase mb-4">All Packed?</h2>
                            <p className="mb-6 opacity-80">Make sure to verify your documents twice! We can't wait to see you in Leh.</p>
                            <button onClick={() => window.print()} className="bg-white text-mountain-blue px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-golden-yellow transition-colors">
                                Print CheckList
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PackingList;
