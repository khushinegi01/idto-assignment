// src/routes/AppRouter.tsx
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeToggle from "../components/Commons/ThemeToggle";
const Signup = lazy(() => import("../pages/Signup"));
const CheckEmail = lazy(() => import("../components/Signup/CheckEmail"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const Login = lazy(() => import("../pages/Login"));
export default function AppRouter() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkInbox" element={<CheckEmail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
