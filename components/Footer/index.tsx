import Logo from "@/components/Logo";
import ToggleTheme from "@/components/ToggleTheme";
import Socials from "@/components/Socials";

type FooterProps = {};

const Footer = ({}: FooterProps) => (
    <div className="-mt-8 pt-28 px-10 pb-20 bg-surface-secondary lg:pt-26 lg:pb-18 md:pt-20 md:pb-12 dark:bg-dark-surface-secondary">
        <div className="max-w-[66.5rem] mx-auto lg:max-w-[39.25rem]">
            <div className="flex items-center mb-10 md:flex-col md:mb-6">
                <Logo className="mr-3 md:mr-0 md:mb-6" />
                <ToggleTheme className="border-borderColor md:mb-6 dark:border-dark-borderColor" />
                <div className="flex space-x-4 ml-auto md:ml-0">
                    <a
                        className="text-sm leading-6 font-medium text-primary transition-colors hover:!text-surface-brand dark:text-dark-primary"
                        href="https://ui8.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policy
                    </a>
                    <a
                        className="text-sm leading-6 font-medium text-primary transition-colors hover:!text-surface-brand dark:text-dark-primary"
                        href="https://ui8.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Terms of Service
                    </a>
                </div>
            </div>
            <div className="flex items-center md:flex-col">
                <Socials />
                <div className="ml-auto text-sm leading-6 font-medium text-secondary md:ml-0 md:mt-6">
                    @ 2023 Symbol, Inc. All rights reserved
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
