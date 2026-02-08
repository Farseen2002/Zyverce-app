import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                "oled-black": "#030303",
                "luxury-cream": "#FAF3E1",
                "neon-blue": "#87C3FF",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                aurora: {
                    "0%": { backgroundPosition: "50% 50%, 50% 50%" },
                    "100%": { backgroundPosition: "350% 50%, 350% 50%" },
                },
                "pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 10px rgba(135, 195, 255, 0.2)" },
                    "50%": { boxShadow: "0 0 20px rgba(135, 195, 255, 0.6)" },
                },
            },
            animation: {
                aurora: "aurora 60s linear infinite",
                "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            fontFamily: {
                display: ['var(--font-display)', 'sans-serif'],
                sans: ['var(--font-sans)', 'sans-serif'],
            }
        },
    },
    plugins: [],
};
export default config;
