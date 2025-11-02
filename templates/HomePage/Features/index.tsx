import Image from "@/components/Image";

import { features } from "@/mocks/features";

type FeaturesProps = {
    scrollToRef: any;
};

const Features = ({ scrollToRef }: FeaturesProps) => (
    <div className="relative max-w-[90rem] mx-auto mb-[6.25rem] px-20 2xl:px-10 lg:mb-20 lg:px-6 md:mb-16 md:px-4">
        <div
            className="absolute -top-36 left-0 right-0 md:-top-24"
            ref={scrollToRef}
        ></div>
        <div className="max-w-[30rem] mx-auto mb-20 text-center xl:mb-12 md:mb-8">
            <h2 className="mb-4 text-h2 lg:mb-3 md:mb-2">Features</h2>
            <div className="text-body-xl text-secondary">
                Empowering your business with cutting-edge tools and
                functionalities.
            </div>
        </div>
        <div className="relative columns-2 gap-5 -mb-5 pl-[calc(33.333%+0.5rem)] [&>*:nth-child(5)]:pt-60 lg:pl-0 lg:[&>*:nth-child(5)]:pt-0 lg:[&>*:nth-child(4)]:pt-30 lg:gap-4 lg:-mb-4 md:columns-1 md:[&>*:nth-child(4)]:pt-0">
            {features.map((feature) => (
                <div
                    className="mb-5 first:absolute first:left-0 first:top-[11.25rem] first:w-[calc(33.333%-0.9rem)] lg:mb-4 lg:first:static lg:first:w-full"
                    key={feature.id}
                >
                    <div
                        className="p-8 break-inside-avoid rounded-3xl bg-surface-secondary border border-borderColor xl:px-6 lg:px-8 md:p-6 dark:bg-dark-surface-secondary dark:border-dark-borderColor"
                        key={feature.id}
                    >
                        <div className="relative flex justify-center items-center w-20 h-20 mb-[3.3rem] border-4 border-white rounded-full shadow-[0_0.25rem_0.25rem_0_rgba(0,0,0,0.06)] xl:mb-8 dark:bg-dark-surface-primary dark:border-dark-surface-primary">
                            <div
                                className="absolute inset-0 rounded-full opacity-20"
                                style={{ backgroundColor: feature.color }}
                            ></div>
                            <Image
                                className="relative z-2 w-10"
                                src={feature.image}
                                width={40}
                                height={40}
                                alt=""
                            />
                        </div>
                        <div className="mb-4 text-h3">{feature.title}</div>
                        <div className="text-secondary">{feature.content}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Features;
