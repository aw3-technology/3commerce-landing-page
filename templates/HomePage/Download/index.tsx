import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

const downloadOptions = [
    {
        id: "0",
        title: "PC",
        icon: "pc",
    },
    {
        id: "1",
        title: "Mac",
        icon: "mac",
    },
    {
        id: "2",
        title: "Web",
        icon: "web",
    },
];

type DownloadProps = {
    scrollToRef: any;
};

const Download = ({ scrollToRef }: DownloadProps) => {
    const [activeId, setActiveId] = useState<string>("0");

    return (
        <div className="relative max-w-[90rem] mx-auto px-10 lg:px-0">
            <div className="p-18 bg-surface-dark rounded-3xl text-center text-white lg:p-16 md:px-4 dark:bg-dark-surface-dark">
                <div
                    className="absolute -top-22 left-0 right-0 md:-top-16"
                    ref={scrollToRef}
                ></div>
                <h2 className="mb-4 text-h2 lg:mb-3 md:mb-2">
                    Ready to Start Selling?
                </h2>
                <div className="mb-10 text-body-xl text-secondary">
                    Launch your online store today. No credit card required.
                </div>
                <button className="btn">Start Your Free Trial</button>
            </div>
        </div>
    );
};

export default Download;
