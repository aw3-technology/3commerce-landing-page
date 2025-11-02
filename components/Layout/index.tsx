import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
    navigation?: any;
    children: React.ReactNode;
};

const Layout = ({ navigation, children }: LayoutProps) => {
    const pathname = usePathname();

    useEffect(() => {
        clearQueueScrollLocks();
        enablePageScroll();
    }, [pathname]);

    return (
        <div className="min-h-screen pt-30 2xl:pt-24 md:pt-[5.25rem] overflow-hidden">
            <Header navigation={navigation} />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
