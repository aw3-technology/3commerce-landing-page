import { useState } from "react";
import Icon from "@/components/Icon";

type NewsletterProps = {};

const Newsletter = ({}: NewsletterProps) => {
    const [email, setEmail] = useState<string>("");

    return (
        <div className="relative z-2 p-20 border border-t-0 border-borderColor bg-white rounded-b-4xl shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,.06)] lg:p-16 md:px-4 dark:bg-gray-800 dark:border-dark-borderColor">
            <h2 className="mb-4 text-h2 text-center lg:mb-3 md:mb-2">
                Join our Newsletter
            </h2>
            <div className="mb-10 text-center text-body-xl text-secondary">
                And stay in touch with us!
            </div>
            <form
                className="relative max-w-[30rem] mx-auto"
                action=""
                onSubmit={() => console.log("Submit")}
            >
                <input
                    className="w-full h-14 pl-6 pr-16 rounded-full border border-borderColor bg-surface-secondary text-base font-medium text-primary outline-none placeholder:text-secondary transition-colors focus:!border-surface-brand dark:bg-dark-surface-secondary dark:border-dark-borderColor dark:text-dark-primary"
                    type="email"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button
                    className="absolute top-1 right-1 bottom-1 w-12 rounded-full bg-surface-brand text-0 transition-colors hover:bg-surface-brand/90"
                    type="submit"
                >
                    <Icon className="fill-white" name="arrow-right" />
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
