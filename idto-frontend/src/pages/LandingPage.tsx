import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import pagelogo from "../assets/pagelogo.png";
import logo2 from "../assets/logo2.png";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <section className="font-inter relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#FFFFFF] text-[#131B31] transition-colors duration-500 md:flex-row dark:bg-[#0F162B] dark:text-[#F7F7F8]">
      {/* Top-right logo */}
      <div className="absolute top-6 left-6 md:top-8 md:left-10">
        <img
          key={theme}
          src={theme === "dark" ? logo2 : pagelogo}
          alt="Logo"
          className="h-7 object-contain transition-opacity duration-500 md:h-8"
        />
      </div>

      {/* Left side – Hero Text */}
      <div className="mt-24 flex w-full flex-col justify-center px-8 text-center sm:px-14 md:mt-0 md:w-1/2 md:px-20 md:text-left lg:px-28">
        <h1 className="mb-4 text-[32px] leading-tight font-bold sm:text-[40px] md:text-[48px]">
          Welcome to <span className="text-[#0019FF] dark:text-[#8A95FF]">IDTO</span>
        </h1>

        <p className="mx-auto mb-10 max-w-md text-sm text-[#616675] sm:text-base md:mx-0 dark:text-[#B0B3BC]">
          A modern, secure platform that helps you manage access and identity effortlessly. Sign up
          or log in to continue.
        </p>

        {/* Buttons */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
          <button
            onClick={() => navigate("/signup")}
            className="rounded-lg border border-[#E7E8EA] bg-[#E6E8FF] px-8 py-3 text-sm font-semibold text-[#0019FF] transition-colors duration-300 hover:bg-[#D8DBFF] sm:text-base dark:border-[#2A2F45] dark:bg-[#1C1C2B] dark:text-[#8A95FF] dark:hover:bg-[#272B4A]"
          >
            Sign Up
          </button>

          <button
            onClick={() => navigate("/login")}
            className="rounded-lg border border-[#E7E8EA] bg-transparent px-8 py-3 text-sm font-semibold text-[#131B31] transition-colors duration-300 hover:bg-[#F7F7F8] sm:text-base dark:border-[#2A2F45] dark:text-[#F7F7F8] dark:hover:bg-[#1B2237]"
          >
            Log In
          </button>
        </div>
      </div>

      {/* Right side – Illustration */}
      <div className="hidden w-1/2 items-center justify-center bg-gradient-to-b from-[#0E1320] to-[#1B2237] md:flex">
        <img
          src="/botImage.webp"
          alt="Bot Illustration"
          fetchPriority="high"
          decoding="async"
          className="h-auto w-full object-contain transition-all duration-500"
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black/5 to-transparent dark:from-white/5" />
    </section>
  );
};

export default LandingPage;
