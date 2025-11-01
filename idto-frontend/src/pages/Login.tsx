import { useEffect, useState } from "react";
import AuthIntro from "../components/AuthIntro";
import LoginForm from "../components/Login/LoginForm";

export default function Login() {
  const [showLoader, setShowLoader] = useState(true);
  const [fadeClass, setFadeClass] = useState("opacity-100");

  useEffect(() => {
    // Show preloader first
    const timer = setTimeout(() => {
      // Start fading out
      setFadeClass("opacity-0");
      // Fully remove after animation completes
      setTimeout(() => setShowLoader(false), 600);
    }, 1800); // stays visible for ~1.8s

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-inter relative min-h-screen w-full overflow-hidden bg-[var(--bg-color)]">
      {/* Preloader */}
      {showLoader && (
        <div
          className={`absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-[#0E1320] to-[#1B2237] text-white transition-opacity duration-700 ease-in-out ${fadeClass}`}
        >
          <AuthIntro title="Login" />
        </div>
      )}

      {/* Main content */}
      <div
        className={`transition-opacity duration-700 ease-in-out ${
          showLoader ? "opacity-0" : "opacity-100"
        }`}
      >
        <LoginForm />
      </div>
    </div>
  );
}
