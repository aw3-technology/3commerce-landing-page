import { useState } from "react";
import Switch from "@/components/Switch";
import Item from "./Item";

import { pricing } from "@/mocks/pricing";

type PricingProps = {
    scrollToRef: any;
};

const Pricing = ({ scrollToRef }: PricingProps) => {
    const [monthly, setMonthly] = useState<boolean>(false);

    return (
        <div className="relative mx-10 mb-20 px-10 py-20 border border-borderColor bg-surface-secondary rounded-4xl xl:px-6 lg:mx-0 lg:mb-16 lg:py-16 md:px-4 dark:bg-dark-surface-secondary dark:border-dark-borderColor">
            <div
                className="absolute -top-22 left-0 right-0 md:-top-10"
                ref={scrollToRef}
            ></div>
            <div className="max-w-[37.5rem] mx-auto mb-18 text-center xl:mb-12 md:mb-8">
                <h2 className="mb-3.5 text-h2 lg:mb-3 md:mb-2">Pricing</h2>
                <div className="mb-8 text-body-xl text-secondary lg:mb-6">
                    Transparent and flexible options tailored to suit your
                    needs.
                </div>
                <div className="flex justify-center items-center">
                    <div className="font-medium leading-6">Monthly</div>
                    <Switch
                        className="mx-6"
                        value={monthly}
                        onChange={() => setMonthly(!monthly)}
                    />
                    <div className="font-medium leading-6">Yearly</div>
                    <div className="ml-2 p-1 bg-[#B5E4CA] rounded text-xs leading-none font-semibold text-primary">
                        SAVE 20%
                    </div>
                </div>
            </div>
            <div className="flex max-w-[66.5rem] mx-auto space-x-5 lg:block lg:space-x-0 lg:space-y-4">
                {pricing.map((item) => (
                    <Item item={item} key={item.id} monthly={monthly} />
                ))}
            </div>
        </div>
    );
};

export default Pricing;
