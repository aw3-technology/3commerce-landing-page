"use client";

import { useRef } from "react";
import Layout from "@/components/Layout";
import Hero from "./Hero";
import Clients from "./Clients";
import Features from "./Features";
import Pricing from "./Pricing";
import Faq from "./Faq";
// import Reviews from "./Reviews";
import Download from "./Download";
import Newsletter from "./Newsletter";

const HomePage = () => {
    const scrollToFeatures = useRef<any>(null);
    const scrollToPricing = useRef<any>(null);
    const scrollToFaq = useRef<any>(null);
    const scrollToDownload = useRef<any>(null);

    const navigation = [
        {
            id: "0",
            title: "Features",
            anchor: scrollToFeatures,
        },
        {
            id: "1",
            title: "Pricing",
            anchor: scrollToPricing,
        },
        {
            id: "2",
            title: "FAQ",
            anchor: scrollToFaq,
        },
        {
            id: "3",
            title: "Downloads",
            anchor: scrollToDownload,
        },
    ];

    return (
        <Layout navigation={navigation}>
            <Hero />
            <Clients />
            <Features scrollToRef={scrollToFeatures} />
            <Pricing scrollToRef={scrollToPricing} />
            <Faq scrollToRef={scrollToFaq} />
            {/* <Reviews /> */}
            <Download scrollToRef={scrollToDownload} />
            <Newsletter />
        </Layout>
    );
};

export default HomePage;
