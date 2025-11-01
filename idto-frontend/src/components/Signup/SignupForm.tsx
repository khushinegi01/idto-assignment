import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../assets/googleIcon.png";
import microsoftIcon from "../../assets/microsoftIcon.png";
import logo2 from "../../assets/logo2.png";
import pagelogo from "../../assets/pageLogo.png";
import emailIcon from "../../assets/emailIcon.png";
import InputBox from "../Commons/InputBox";
import { setEmail } from "../../store/AuthSlice";
import { useTheme } from "../../context/ThemeContext";

type FormValues = {
  email: string;
};

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const SignupForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);

  async function fakeSendMagicLink(email: string) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email.endsWith("@example.com")) {
          reject(new Error("Disposable email addresses are not allowed."));
        } else {
          resolve();
        }
      }, 1200);
    });
  }

  const onSubmit = async (data: FormValues) => {
    setServerError(null);
    try {
      await fakeSendMagicLink(data.email);
      dispatch(setEmail(data.email));
      navigate("/checkInbox");
    } catch (err: any) {
      setServerError(err?.message || "Something went wrong. Try again.");
    }
  };

  return (
    <section className="font-inter relative flex min-h-screen w-full flex-col overflow-hidden bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-500 md:flex-row">
      
      <div className="relative flex w-full flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 md:w-1/2 md:px-16 md:py-24 lg:px-20">
        
        <div className="absolute top-4 left-4 sm:top-6 sm:left-8 md:top-8 md:left-10">
          <img
            src={theme === "dark" ? logo2 : pagelogo}
            alt="Page Logo"
            className="h-6 w-auto object-contain sm:h-7 md:h-8"
          />
        </div>

        {/* Centered Form */}
        <div className="mx-auto mt-24 w-full max-w-md sm:mt-28 md:mt-0">
          <h1 className="mb-3 text-[24px] leading-tight font-bold text-[var(--text-color)] sm:mb-2 sm:text-[28px] md:text-[32px]">
            Sign up for Free
          </h1>

          <p className="mb-8 text-sm leading-relaxed font-normal text-[var(--muted-text)]">
            We recommend using your{" "}
            <span className="font-normal text-[var(--text-secondary)]">work email</span> - It keeps
            work and life separate.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 font-normal">
            <div>
              <InputBox
                id="email"
                label="Enter your work email"
                icon={emailIcon}
                placeholder="johndoe@idto.ai"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Please enter a valid email address",
                  },
                })}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby="email-error"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <p className="block text-sm font-normal text-[var(--text-secondary)]">
              No password required. You’ll receive a sign-in link
            </p>

            {serverError && (
              <div className="rounded border border-red-100 bg-red-50 p-2 text-sm text-red-600">
                {serverError}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg border border-[var(--border-color)] bg-[var(--accent-bg)] py-3 text-sm font-bold text-[var(--accent-text)] transition-colors hover:bg-[var(--border-color)] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Continue →"}
            </button>
          </form>

          
          <div className="my-6 flex items-center gap-4">
            <hr className="flex-1 border-[#E7E8EA]" />
          </div>

          
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#E7E8EA] py-2.5 transition hover:bg-gray-50"
              onClick={() => alert("Signing in through Google")}
            >
              <span className="text-sm font-bold text-[var(--text-secondary)]">
                Signup with Google
              </span>
              <img src={googleIcon} alt="Google" className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#E7E8EA] py-2.5 transition hover:bg-gray-50"
              onClick={() => alert("Signing in through Microsoft")}
            >
              <span className="text-sm font-bold text-[var(--text-secondary)]">
                Signup with Microsoft
              </span>
              <img src={microsoftIcon} alt="Microsoft" className="h-5 w-5" />
            </button>
          </div>

          <p className="mt-6 text-center text-xs font-medium text-[var(--text-secondary)]">
            By signing-up, you agree to our{" "}
            <a href="#" className="font-medium text-[var(--accent-text)] hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="font-medium text-[var(--accent-text)] hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      
      <div className="hidden w-full items-center justify-center bg-gradient-to-b from-[#101010] to-[#1B2237] md:flex md:w-1/2">
        <img
          src="/botImage.webp"
          alt="Bot Illustration"
          fetchPriority="high"
          decoding="async"
          className="h-auto w-full object-contain transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default SignupForm;
