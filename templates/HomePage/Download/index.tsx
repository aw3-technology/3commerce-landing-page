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
                    Ready to Start?
                </h2>
                <div className="mb-10 text-body-xl text-secondary">
                    Get an easiest access and download now.
                </div>
                <div className="flex max-w-[20.75rem] mx-auto mb-10 space-x-4">
                    {downloadOptions.map((button) => (
                        <button
                            className={twMerge(
                                `flex flex-col items-center flex-1 px-4 py-6 rounded-2xl border transition-all hover:bg-surface-dark2 tap-highlight-color dark:hover:bg-dark-surface-dark2 ${
                                    activeId === button.id
                                        ? "border-surface-brand !bg-[#3C4249] shadow-[0_0_0.8125rem_0.1875rem_rgba(42,133,255,.5)]"
                                        : "border-transparent"
                                }`
                            )}
                            key={button.id}
                            onClick={() => setActiveId(button.id)}
                        >
                            <Icon
                                className="w-5 h-5 mb-4 fill-white"
                                name={button.icon}
                            />
                            <div className="leading-6 font-semibold">
                                {button.title}
                            </div>
                        </button>
                    ))}
                </div>
                <button className="btn">Download Now</button>
            </div>
        </div>
    );
};

export default Download;
