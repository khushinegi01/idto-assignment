
# idto.ai Frontend Assignment

A modern, responsive, and accessible Signup and Login interface built with React, TypeScript, Vite, and Tailwind CSS.
This project focuses on clean UI design, state management, performance optimization, and smooth user experience.


## Overview

This project is a frontend implementation of idto.ai’s authentication flow, designed as part of the technical assignment.
It demonstrates best practices in UI structure, lazy loading, responsive layouts, and performance tuning.

The interface includes:

* Signup page (email-based entry)
* Check Inbox page (email verification prompt)
* Login page (password input and validation)
* Light/Dark theme toggle
* Optimized images for improved load performance
* Redux state management for email persistence
* Reusable components built with Tailwind CSS and TypeScript


## Tech Stack

| Purpose            | Technology                                  |
| ------------------ | ------------------------------------------- |
| Framework          | React 18 + Vite                             |
| Language           | TypeScript                                  |
| Styling            | Tailwind CSS v4                             |
| State Management   | Redux Toolkit                               |
| Form Handling      | React Hook Form                             |
| Icons              | Lucide React                                |
| Build Optimization | Vite (RollDown)                             |
| Animations         | Tailwind Transitions & Custom CSS Keyframes |


## Installation and Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd idto-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

> The app will start on [http://localhost:5173](http://localhost:5173)

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```


## Project Flow

### Summary

1. **Landing / Signup Page**
   The user enters their email and clicks “Continue.”
   A mock magic link is simulated, and the app navigates to the inbox instruction page.

2. **Check Inbox Page**
   Displays a message asking the user to check their email for a login link.
   Includes an option to resend the link.

3. **Login Page**
   Allows the user to sign in using their credentials with validation feedback.

4. **Theme Toggle**
   Users can switch between Light and Dark themes.
   The chosen theme is saved and remembered for future visits.

5. **Experience**
   The interface loads quickly, transitions smoothly, and is fully responsive across devices.


### For Technical Evaluators

**Routing**

* Implemented with `react-router-dom` using `React.lazy` and `Suspense` for route-based code splitting.
* Includes fallback loader using the `<AuthIntro>` preloader component.

**State Management**

* Uses Redux Toolkit to manage and persist authentication data such as email across routes.

**Form Validation**

* `react-hook-form` handles validation with regex and live feedback.
* Input fields are reusable through a common `InputBox` component.

**Theme Context**

* Light/Dark mode is managed globally using a React Context (`ThemeContext`).
* The theme is stored in `localStorage` and applied via CSS variables dynamically.

**Performance Optimization**

* Preloaded and compressed images for faster rendering.
* Defined image dimensions to prevent layout shifts.
* Lazy-loaded routes to reduce bundle size.
* Applied `fetchpriority="high"` for the main LCP image.
* Smooth transitions and consistent UI animations.


## Folder Structure

```
idto-frontend/
├── public/
│   ├── botImage.webp
│   ├── side-img.webp
│   ├── logo.png
│   └── logo2.png
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Commons/
│   │   ├── Signup/
│   │   └── Login/
│   ├── context/
│   ├── pages/
│   ├── router/
│   ├── store/
│   ├── main.tsx
│   └── index.css
└── package.json
```


## Performance Practices Implemented

| Optimization             | Description                                     |
| ------------------------ | ----------------------------------------------- |
| Lazy Loading             | Components and routes load only when needed     |
| Code Splitting           | Reduces initial JavaScript bundle size          |
| Preload & Fetch Priority | Improves LCP by prioritizing critical images    |
| Responsive Images        | WebP format and appropriate dimensions          |
| Theme Persistence        | Remembers user theme preference                 |
| Reusable Components      | Reduces repetition and improves maintainability |
| Accessibility            | Proper labels, alt text, and focus states       |
| CSS Transitions          | Smooth and consistent visual feedback           |


## Lighthouse Scores (Local Test)

| Metric         | Score |
| -------------- | ----- |
| Performance    | 77    |
| Accessibility  | 100   |
| Best Practices | 100   |
| SEO            | 92    |


## Conclusion

This project demonstrates:

* A clean, modular React architecture
* A smooth user flow across signup, login, and theme changes
* Strong focus on accessibility and visual polish
* Awareness of real-world frontend performance requirements


## Author

**Khushi Negi**
Frontend Developer


