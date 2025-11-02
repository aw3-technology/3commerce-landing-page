import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./templates/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "4xl": { max: "1899px" },
            // => @media (max-width: 1719px) { ... }
            "2xl": { max: "1419px" },
            // => @media (max-width: 1419px) { ... }
            xl: { max: "1179px" },
            // => @media (max-width: 1179px) { ... }
            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }
            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }
            sm: { max: "480px" },
            // => @media (max-width: 480px) { ... }
        },
        extend: {
            colors: {
                primary: "#272B30",
                secondary: "#6F767E",
                alternative: "#FFFFFF",
                surface: {
                    primary: "#FFFFFF",
                    secondary: "#F7F7F7",
                    brand: "#2A85FF",
                    dark: "#272B30",
                    dark2: "#1F2328",
                },
                borderColor: "#E0E0E0",
                "dark-primary": "#FFFFFF",
                "dark-secondary": "#6F767E",
                "dark-alternative": "#272B30",
                "dark-surface": {
                    primary: "#272B30",
                    secondary: "#1F2328",
                    brand: "#2A85FF",
                    dark: "#1F2328",
                    dark2: "#272B30",
                },
                "dark-borderColor": "#353B43",
                gray: {
                    0: "#FFFFFF",
                    50: "#F7F7F7",
                    200: "#E0E0E0",
                    400: "#A6A9A9",
                    600: "#6F767E",
                    700: "#353B43",
                    800: "#272B30",
                    900: "#1F2328",
                },
            },
            zIndex: {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
            },
            spacing: {
                0.25: "0.0625rem",
                0.75: "0.1875rem",
                4.5: "1.125rem",
                5.5: "1.375rem",
                6.5: "1.75rem",
                7.5: "1.875rem",
                8.5: "2.125rem",
                9.5: "2.375rem",
                13: "3.25rem",
                15: "3.75rem",
                17: "4.25rem",
                18: "4.5rem",
                19: "4.75rem",
                21: "5.25rem",
                22: "5.5rem",
                26: "6.5rem",
                30: "7.5rem",
                34: "8.5rem",
                38: "9.5rem",
                42: "10.5rem",
                54: "13.5rem",
                58: "14.5rem",
            },
            transitionDuration: {
                DEFAULT: "200ms",
            },
            transitionTimingFunction: {
                DEFAULT: "linear",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            borderWidth: {
                DEFAULT: "0.0625rem",
                0: "0",
                2: "0.125rem",
                4: "0.25rem",
                8: "0.5rem",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
            },
            fontSize: {
                0: ["0px", "0px"],
                base: ["1rem", "1.75rem"],
                xl: ["1.25rem", "2rem"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({
                html: {
                    "@apply text-[1.125rem] 4xl:text-[1rem]": {},
                },
            });
            addComponents({
                ".btn": {
                    "@apply inline-flex items-center justify-center h-14 border border-surface-brand bg-surface-brand rounded-full px-6 font-semibold text-base text-white transition-colors disabled:opacity-20 disabled:pointer-events-none hover:bg-surface-brand/90 hover:border-surface-brand/90":
                        {},
                },
                ".btn svg": {
                    "@apply fill-inherit first:mr-2.5 last:ml-2.5": {},
                },
                ".btn-stroke": {
                    "@apply btn border-borderColor bg-transparent text-primary hover:!bg-surface-brand hover:!border-surface-brand hover:!text-white dark:border-dark-borderColor dark:text-white":
                        {},
                },
                ".btn-stroke-light": {
                    "@apply btn bg-transparent border-dark-borderColor text-dark-primary hover:!bg-surface-brand hover:!border-surface-brand hover:!text-white":
                        {},
                },
                ".text-h1": {
                    "@apply text-[4.5rem] leading-[5.125rem] font-bold xl:text-[3.5rem] xl:leading-[4rem] md:text-[2.25rem] md:leading-[2.875rem]":
                        {},
                },
                ".text-h2": {
                    "@apply text-[3rem] leading-[3.5rem] font-bold xl:text-[2.5rem] xl:leading-[3rem] md:text-[2rem] md:leading-[2.75rem]":
                        {},
                },
                ".text-h3": {
                    "@apply text-[1.5rem] leading-[1.75rem] font-semibold": {},
                },
                ".text-body-xl": {
                    "@apply text-xl xl:text-[1.125rem] xl:leading-[1.75rem] md:text-[1rem]":
                        {},
                },
            });
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },
            });
        }),
    ],
};
