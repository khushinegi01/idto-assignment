import React from "react";
import googleIcon from "../../assets/googleIcon.png";
import microsoftIcon from "../../assets/microsoftIcon.png";
import pagelogo from "../../assets/pageLogo.png";
import checkingIcon from "../../assets/checkingIcon.png";
import logo2 from "../../assets/logo2.png";
import checkingIcon2 from "../../assets/checkingIcon2.png";
import { useTheme } from "../../context/ThemeContext";

const CheckEmail: React.FC = () => {
  const { theme } = useTheme();
  return (
    <section className="font-inter relative flex min-h-screen w-full flex-col overflow-hidden bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-500 md:flex-row">
      {/* Left Side – Content Section */}
      <div className="relative flex w-full flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 md:w-1/2 md:px-16 md:py-24 lg:px-20">
        {/* Logo */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-8 md:top-8 md:left-10">
          <img
            src={theme === "dark" ? logo2 : pagelogo}
            alt="Page Logo"
            className="h-6 w-auto object-contain sm:h-7 md:h-8"
          />
        </div>

        {/* Main Content */}
        <div className="mx-auto mt-20 w-full max-w-md text-center sm:mt-28 md:mt-0 md:text-left">
          <img
            src={theme === "dark" ? checkingIcon2 : checkingIcon}
            alt="Check inbox"
            className="mx-auto mb-4 h-12 w-12 md:mx-0"
          />

          <h1 className="mb-2 text-[24px] leading-tight font-bold text-[var(--text-color)] sm:text-[28px] md:text-[32px]">
            Check your inbox
          </h1>

          <p className="mb-8 text-sm font-semibold text-[var(--text-secondary)]">
            A sign-in link has been sent to{" "}
            <span className="font-semibold text-[var(--text-color)]">johndoe@idto.ai</span>{" "}
            <span className="cursor-pointer font-semibold text-[var(--accent-text)] hover:underline">
              (change)
            </span>
          </p>

          <p className="mb-10 block text-sm font-medium text-[var(--text-secondary)]">
            Click the link in your email to continue.
          </p>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <hr className="flex-1 border-[var(--border-color)]" />
          </div>

          {/* Resend Section */}
          <p className="mb-1 text-sm font-medium text-[var(--text-secondary)]">
            Didn’t receive the email?
          </p>
          <p className="text-sm font-medium text-[var(--text-secondary)]">
            Please check your spam folder or{" "}
            <span
              className="cursor-pointer font-semibold text-[var(--accent-text)] hover:underline"
              onClick={() => alert("Email Send! Kindly Check Your Inbox")}
            >
              resend it.
            </span>
          </p>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <hr className="flex-1 border-[var(--border-color)]" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3">
            <button
              className="flex items-center justify-center gap-2 rounded-lg border border-[var(--border-color)] py-2.5 transition hover:bg-gray-50"
              onClick={() => alert("Signing in through Google")}
            >
              <span className="text-sm font-bold text-[var(--text-secondary)]">
                Signup with Google
              </span>
              <img src={googleIcon} alt="Google" className="h-5 w-5" />
            </button>

            <button
              className="flex items-center justify-center gap-2 rounded-lg border border-[var(--border-color)] py-2.5 transition hover:bg-gray-50"
              onClick={() => alert("Signing in through Microsoft")}
            >
              <span className="text-sm font-bold text-[var(--text-secondary)]">
                Signup with Microsoft
              </span>
              <img src={microsoftIcon} alt="Microsoft" className="h-5 w-5" />
            </button>
          </div>

          {/* Terms */}
          <p className="mt-6 text-center text-xs text-[var(--text-secondary)] md:text-left">
            By signing-up, you agree to our{" "}
            <a href="#" className="font-medium text-[#8A95FF] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-[#8A95FF] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right Side – Illustration */}
      <div className="hidden w-full items-center justify-center bg-gradient-to-b from-[#101010] to-[#1B2237] md:flex md:w-1/2">
        <img
          src="/botImage.webp"
          alt="Bot Illustration"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-contain transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default CheckEmail;
