 'use client';
 import { useRouter } from 'next/navigation';
 import { supabase } from '@/lib/supabaseClient';
    import React from 'react';
    import Link from 'next/link'


 const HeroSection: React.FC = () => {
   const router = useRouter();
   const handleQuestionBankClick = async () => {
     const { data: { session } } = await supabase.auth.getSession();
     if (session) router.push('/questionbank');
     else         router.push('/login');
   };
  return (
 <div className="relative min-h-[55vh] flex flex-col justify-center items-center text-center text-white px-4 overflow-hidden">

  {/* 🎥 Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source src="/videos/sat-background.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>


  {/* 🧱 Content */}
  <div className="relative z-20">
    <h1 className="text-4xl md:text-5xl font-bold">
      Your Ultimate Digital <span className="text-yellow-400 ">SAT</span> Question Bank
    </h1>
    <p className="mt-4 text-lg">More than <strong>290</strong> questions</p>
    <div className="mt-6 flex flex-col gap-4 w-full max-w-md mx-auto">
      <button
        onClick={handleQuestionBankClick}
        className="inline-flex h-12 min-h-12 shrink-0 cursor-pointer select-none
                   flex-wrap items-center justify-center rounded-lg px-4
                   text-sm leading-none gap-2 font-semibold
                   transition-colors duration-200 ease-out shadow-sm
                   text-[#1F2955] bg-[#F2F2F2] button-pop"
      >
        SAT Suite Question Bank
      </button>

      <Link
        href="/who-is-tarik-hoca"
        className="inline-flex h-12 min-h-12 cursor-pointer 
                   items-center justify-center rounded-lg px-4
                   text-sm gap-2 font-semibold shadow-sm
                   text-[#1F2955] bg-[#F2F2F2] button-pop"
      >
        Who is Tarık Hoca
      </Link>
      <Link
        href="/pricing"
        className="inline-flex h-12 min-h-12 cursor-pointer 
                   items-center justify-center rounded-lg px-4
                   text-sm gap-2 font-semibold shadow-sm
                   text-[#1F2955] bg-[#F2F2F2] button-pop"
      >
        Pricing
      </Link>
    </div>
  </div>
</div>

  );
};

export default HeroSection;
