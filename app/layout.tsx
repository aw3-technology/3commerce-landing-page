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
    title: "Saas landing",
    description: "Production-ready SaaS landing page template",
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
                <meta name="description" content="Symbol" />
                {/* Product Name */}
                <meta name="product-name" content="Symbol" />
                {/* Twitter Card data */}
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ui8" />
                <meta name="twitter:title" content="Symbol" />
                <meta
                    name="twitter:description"
                    content="Production-ready SaaS landing page template"
                />
                <meta name="twitter:creator" content="@ui8" />
                {/* Twitter Summary card images must be at least 120x120px */}
                <meta
                    name="twitter:image"
                    content="%PUBLIC_URL%/twitter-card.png"
                />
                {/* Open Graph data for Facebook */}
                <meta property="og:title" content="Symbol" />
                <meta property="og:type" content="Article" />
                <meta
                    property="og:url"
                    content="https://ui8.net/rudee/products/symbol-saas-platform-landing-page"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/fb-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Production-ready SaaS landing page template"
                />
                <meta property="og:site_name" content="Symbol" />
                <meta property="fb:admins" content="132951670226590" />
                {/* Open Graph data for LinkedIn */}
                <meta property="og:title" content="Symbol" />
                <meta
                    property="og:url"
                    content="https://ui8.net/rudee/products/symbol-saas-platform-landing-page"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/linkedin-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Production-ready SaaS landing page template"
                />
                {/* Open Graph data for Pinterest */}
                <meta property="og:title" content="Symbol" />
                <meta
                    property="og:url"
                    content="https://ui8.net/rudee/products/symbol-saas-platform-landing-page"
                />
                <meta
                    property="og:image"
                    content="%PUBLIC_URL%/pinterest-og-image.png"
                />
                <meta
                    property="og:description"
                    content="Production-ready SaaS landing page template"
                />
            </head>
            <body
                className={`${inter.variable} bg-surface-primary font-sans text-base text-primary antialiased dark:bg-gray-800 dark:text-dark-primary`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
