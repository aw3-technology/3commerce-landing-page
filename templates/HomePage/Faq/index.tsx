import Item from "./Item";

import { faqs } from "@/mocks/faqs";

type FaqProps = {
    scrollToRef: any;
};

const Faq = ({ scrollToRef }: FaqProps) => (
    <div className="relative mb-40 px-10 xl:mb-30 lg:mb-24 lg:px-6 md:mb-16 md:px-4">
        <div
            className="absolute -top-36 left-0 right-0 md:-top-24"
            ref={scrollToRef}
        ></div>
        <div className="mb-12 text-center md:mb-8">
            <h2 className="mb-4 text-h2 lg:mb-3 md:mb-2">FAQ</h2>
            <div className="text-body-xl text-secondary">
                Got questions? Check-out our SaaS-tastic answers!
            </div>
        </div>
        <div className="max-w-[66.5rem] mx-auto">
            {faqs.map((item) => (
                <Item item={item} key={item.id} />
            ))}
        </div>
    </div>
);

export default Faq;
