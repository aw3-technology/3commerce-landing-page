import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "block",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "3Commerce - Build Your Online Store in Minutes",
    description: "Launch and scale your eCommerce business with our powerful platform. Manage inventory, process payments, and grow your sales all in one place.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Description no longer than 155 characters */}
                <meta name="description" content="Launch and scale your eCommerce business with 3Commerce. Manage inventory, process payments, and grow your sales all in one place." />
                {/* Product Name */}
                <meta name="product-name" content="3Commerce" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="3Commerce - Build Your Online Store in Minutes" />
                <meta
                    name="twitter:description"
                    content="Launch and scale your eCommerce business with our powerful platform. Manage inventory, process payments, and grow your sales all in one place."
                />
                {/* Twitter Summary card images must be at least 120x120px */}
                <meta
                    name="twitter:image"
                    content="/og-image.png"
                />
                {/* Open Graph data */}
                <meta property="og:title" content="3Commerce - Build Your Online Store in Minutes" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="/og-image.png"
                />
                <meta
                    property="og:description"
                    content="Launch and scale your eCommerce business with our powerful platform. Manage inventory, process payments, and grow your sales all in one place."
                />
                <meta property="og:site_name" content="3Commerce" />
            </head>
            <body
                className={`${inter.variable} bg-surface-primary font-sans text-base text-primary antialiased dark:bg-gray-800 dark:text-dark-primary`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
