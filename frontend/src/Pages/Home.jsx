import React from 'react';


const services = [
    { icon: "🩺", title: "General Checkup", desc: "Routine wellness exams to keep your dog healthy year-round." },
    { icon: "💉", title: "Vaccinations", desc: "Full vaccine schedules tailored to your dog's age and lifestyle." },
    { icon: "🦷", title: "Dental Care", desc: "Professional cleaning and oral health monitoring." },
];
const testimonials = [
    { name: "Sarah M.", text: "My golden retriever has never been happier. The team truly cares.", dog: "🐕" },
    { name: "James O.", text: "Fast, gentle, and so professional. Highly recommend PawCare.", dog: "🐩" },
    { name: "Amina K.", text: "They treated my rescue pup like their own. Absolutely wonderful.", dog: "🦮" },
];
function Home() {
    return (
        <section className="font-serif bg-white text-[#2c1a0e] min-h-screen overflow-x-hidden pt-[110px]">
            <div className="text-center px-6 pt-20 pb-16 ">
                <span className="inline-block bg-[#f5ede0] text-[#c8845a] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
                    Trusted by 2,000+ dog owners
                </span>
        
                <h1 className="h1 text-4xl md:text-6xl font-bold leading-tight mb-5">
                    Care that feels like <br />
                <span className="text-[#c8845a] italic">home.</span>
                </h1>
        
                <p className="text-[#9a7b65] text-base md:text-lg leading-relaxed max-w-md mx-auto mb-10">
                    Gentle, expert veterinary treatment for your best friend.Because they deserve nothing less.
                </p>
        
                <div className="flex gap-4 justify-center mb-14 flex-wrap">
                <button className="bg-[#c8845a] hover:bg-[#a0622e] text-white rounded-full px-8 py-3 text-sm font-semibold transition-colors duration-200">
                    Book Appointment
                </button>
                <button className="border border-[#c8845a] text-[#c8845a] hover:bg-[#f5ede0] rounded-full px-8 py-3 text-sm font-semibold transition-colors duration-200">
                    Learn More →
                </button>
                </div>
        
            
                <div className="flex gap-4 justify-center flex-wrap">
                {[
                    { num: "12+", label: "Years of Care" },
                    { num: "98%", label: "Happy Patients" },
                    { num: "24/7", label: "Emergency Line" },
                ].map(s => (
                    <div key={s.label} className="bg-white border border-[#f5ede0] rounded-2xl px-8 py-5 shadow-sm flex flex-col items-center gap-1">
                    <span className="text-2xl font-bold text-[#c8845a]">{s.num}</span>
                    <span className="text-xs text-[#9a7b65]">{s.label}</span>
                    </div>
                ))}
                </div>
            </div>
        
            
            <article className="max-w-5xl mx-auto px-6 py-20">
                <p className="text-xs tracking-widest uppercase text-[#c8845a] font-semibold mb-2">
                What We Offer
                </p>
                <h2 className="h1 text-2xl md:text-4xl font-bold mb-12 leading-snug">
                Simple. Caring. Expert.
                </h2>
        
                <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {services.map(s => (
                    <article key={s.title} className="bg-[#fdf8f3] rounded-2xl p-8 hover:shadow-md transition-shadow duration-200">
                    <span className="text-4xl block mb-4">{s.icon}</span>
                    <h3 className="h1 text-base font-bold mb-2">{s.title}</h3>
                    <p className="text-sm text-[#9a7b65] leading-relaxed">{s.desc}</p>
                    </article>
                ))}
                </article>
            </article>
        
            {/* ── TESTIMONIALS ── */}
            <article className="bg-[#fdf8f3] py-20 px-6">
                <article className="max-w-5xl mx-auto">
                <p className="text-xs tracking-widest uppercase text-[#c8845a] font-semibold mb-2">
                    What Owners Say
                </p>
                <h2 className="h1 text-2xl md:text-4xl font-bold mb-12 leading-snug">
                    They came. They trusted. They stayed.
                </h2>
        
                <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {testimonials.map(t => (
                    <article key={t.name} className="bg-white rounded-2xl p-7 border border-[#f5ede0]">
                        <span className="text-3xl block mb-4">{t.dog}</span>
                        <p className="h1 text-sm text-[#2c1a0e] leading-relaxed italic mb-4">"{t.text}"</p>
                        <span className="text-xs text-[#9a7b65] font-semibold">— {t.name}</span>
                    </article>
                    ))}
                </article>
                </article>
            </article>
        
            {/* ── CTA BANNER ── */}
            <article className="bg-[#c8845a] text-center py-20 px-6">
                <h2 className="text-[#c8845a] text-2xl md:text-4xl font-bold  mb-3">
                Ready to give your dog the best care?
                </h2>
                <p className="text-[#9a7b65] text-sm mb-8">First visit consultation is always free.</p>
                <button className="bg-white text-[#c8845a] hover:bg-[#fdf8f3] rounded-full px-10 py-4 text-sm font-bold transition-colors duration-200">
                Book Now — It's Free
                </button>
            </article>
        
            {/* ── FOOTER ── */}
            <article className="px-6 py-8 border-t border-[#f5ede0] flex flex-wrap items-center justify-between gap-4">
                <span className="text-base font-bold text-[#c8845a]">🐾 PawCare</span>
                <p className="text-xs text-[#9a7b65]">© 2025 PawCare Veterinary Clinic. All rights reserved.</p>
                <article className="flex gap-2">
            
                    <button className="text-xs text-[#9a7b65] hover:text-[#c8845a] px-3 py-1 transition-colors duration-200">
                    1
                    </button>
                
                </article>
            </article>
            
        </section>
    )
}

export default Home