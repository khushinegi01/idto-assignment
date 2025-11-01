import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import googleIcon from "../../assets/googleIcon.png";
import microsoftIcon from "../../assets/microsoftIcon.png";
import pagelogo from "../../assets/pageLogo.png";
import logo2 from "../../assets/logo2.png";
import emailIcon from "../../assets/emailIcon.png";
import passwordIcon from "../../assets/passwordIcon2.webp";
import InputBox from "../Commons/InputBox";
import { setEmail } from "../../store/AuthSlice";
import { useTheme } from "../../context/ThemeContext";

type FormValues = {
  email: string;
  password: string;
};

const EMAIL_REGEX = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onChange" });

  const { theme } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [serverError, setServerError] = useState<string | null>(null);
  const password = watch("password");

  async function fakeLogin(email: string, password: string) {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email.endsWith("@example.com")) {
          reject(new Error("Login failed: unauthorized domain."));
        } else if (password.length < 8) {
          reject(new Error("Password too short."));
        } else {
          resolve();
        }
      }, 1200);
    });
  }

  const onSubmit = async (data: FormValues) => {
    setServerError(null);
    try {
      await fakeLogin(data.email, data.password);
      dispatch(setEmail(data.email));
      navigate("/checkInbox");
    } catch (err: any) {
      setServerError(err?.message || "Something went wrong. Try again.");
    }
  };

  // Password validation feedback
  const passwordChecks = [
    { label: "At least 8 characters", valid: password?.length >= 8 },
    { label: "Contains uppercase letter", valid: /[A-Z]/.test(password || "") },
    { label: "Contains lowercase letter", valid: /[a-z]/.test(password || "") },
    { label: "Contains number", valid: /\d/.test(password || "") },
    { label: "Contains special character", valid: /[@$!%*?&#^]/.test(password || "") },
  ];

  return (
    <section className="font-inter relative flex min-h-screen w-full flex-col overflow-hidden bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-500 md:flex-row">
      {/* Left Side – Form Section */}
      <div className="relative flex w-full flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 md:w-1/2 md:px-16 md:py-24 lg:px-20">
        {/* Logo */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-8 md:top-8 md:left-10">
          <img
            src={theme === "dark" ? logo2 : pagelogo}
            alt="Page Logo"
            className="h-8 w-auto object-contain transition-opacity duration-300 md:h-8"
          />
        </div>

        {/* Form */}
        <div className="mx-auto mt-24 w-full max-w-md sm:mt-28 md:mt-0">
          <h1 className="mb-3 text-[24px] leading-tight font-bold text-[var(--text-color)] sm:mb-2 sm:text-[28px] md:text-[32px]">
            User Login
          </h1>

          <p className="mb-8 text-sm leading-relaxed font-normal text-[var(--muted-text)]">
            We recommend using your{" "}
            <span className="font-normal text-[var(--text-secondary)]">work email</span> — It keeps
            work and life separate.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4 font-normal">
            {/* Email Field */}
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

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="mb-1 block text-sm text-[var(--text-secondary)]">
                Enter your password
              </label>
              <div className="relative">
                <img
                  src={passwordIcon}
                  alt="password"
                  className="pointer-events-none absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-[#616675]"
                />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: PASSWORD_REGEX,
                      message: "Password must meet all requirements",
                    },
                  })}
                  className="w-full rounded-lg border border-[#E7E8EA] bg-[#F7F7F8] py-3 pr-4 pl-10 text-[#1C252E] placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
              )}
              {/* Password Strength Checks */}
              {password && (
                <ul className="mt-3 space-y-1 text-xs">
                  {passwordChecks.map((check) => (
                    <li
                      key={check.label}
                      className={`flex items-center gap-2 ${
                        check.valid ? "text-green-500" : "text-gray-400"
                      }`}
                    >
                      <span
                        className={`inline-block h-2 w-2 rounded-full ${
                          check.valid ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></span>
                      {check.label}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Server Error */}
            {serverError && (
              <div className="rounded border border-red-100 bg-red-50 p-2 text-sm text-red-600">
                {serverError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg border-[#E7E8EA] bg-[#E6E8FF] py-3 text-sm font-medium text-[#0019FF] transition-colors hover:bg-[#E7E8EA] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Logging in..." : "Login →"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <hr className="flex-1 border-[#9296A0]" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-3">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#E7E8EA] py-2.5 transition hover:bg-gray-50"
              onClick={() => alert("Signing in through Google")}
            >
              <span className="text-sm font-medium text-[#616675]">Login with Google</span>
              <img src={googleIcon} alt="Google" className="h-5 w-5" />
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#E7E8EA] py-2.5 transition hover:bg-gray-50"
              onClick={() => alert("Signing in through Microsoft")}
            >
              <span className="text-sm font-medium text-[#616675]">Login with Microsoft</span>
              <img src={microsoftIcon} alt="Microsoft" className="h-5 w-5" />
            </button>
          </div>

          {/* Terms */}
          <p className="mt-6 text-center text-xs text-[#616675]">
            By logging in, you agree to our{" "}
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
      <div className="hidden w-1/2 items-center justify-center bg-gradient-to-b from-[#0E1320] to-[#1B2237] md:flex">
        <img
          src="/botImage.webp"
          alt="Bot Illustration"
          fetchPriority="high"
          decoding="async"
          className="h-auto w-full object-cover transition-all duration-500"
        />
      </div>
    </section>
  );
};

export default LoginForm;
