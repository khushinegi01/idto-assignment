import React from "react";

interface AuthIntroProps {
  title: string;
}
const AuthIntro: React.FC<AuthIntroProps> = ({ title }) => {
  return (
    <section className="font-inter relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#131B31] text-white">
      {/* Background pattern on the right */}
      <img
        src="/side-img.webp"
        alt="Pattern"
        decoding="async"
        className="absolute top-0 right-0 h-full object-cover"
      />

      {/* Logo positioned near top-left */}
      <div className="absolute top-10 left-12 md:top-14 md:left-16">
        <img
          src="/logo.png"
          alt="Logo"
          decoding="async"
          loading="lazy"
          className="h-[78px] w-14 object-contain"
        />
        {/* Center title */}
        <h1 className="title-left z-10 mt-50 text-[72px] leading-none font-bold tracking-tight md:text-[88px]">
          {title}
        </h1>
      </div>
    </section>
  );
};

export default AuthIntro;
