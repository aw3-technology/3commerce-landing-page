import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Logo from "@/components/Logo";
import ToggleTheme from "@/components/ToggleTheme";
import Socials from "@/components/Socials";

type NavigationType = {
    id: string;
    title: string;
    anchor: any;
};

type HeaderProps = {
    navigation?: NavigationType[];
};

const Header = ({ navigation }: HeaderProps) => {
    const [headerStyle, setHeaderStyle] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    const toggleMenu = () => {
        setVisible(!visible);
        if (visible) {
            enablePageScroll();
        } else {
            disablePageScroll();
        }
    };

    const closeMenu = () => {
        setVisible(false);
        enablePageScroll();
    };

    useScrollPosition(({ currPos }) => {
        setHeaderStyle(currPos.y <= -1);
    });

    useEffect(() => {
        setHeaderStyle(window.scrollY > 1);
    }, []);

    const handleClick = (anchor: any) => {
        setVisible(false);
        enablePageScroll();
        anchor.current.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-10 py-8 bg-surface-primary transition-all dark:bg-gray-800 2xl:py-5 md:py-4 ${
                headerStyle ? "!py-4 shadow-xl md:!py-2" : ""
            }`}
        >
            <div className="flex items-center max-w-[90rem] mx-auto px-10 lg:px-6 md:px-4">
                <Logo className="mr-auto xl:mr-6 lg:mr-auto" />
                <div
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:relative xl:top-auto xl:left-auto xl:translate-x-0 xl:translate-y-0 xl:mr-auto lg:mr-0 lg:fixed lg:top-0 lg:right-0 lg:bottom-0 lg:z-10 lg:flex lg:flex-col lg:w-80 lg:pt-30 lg:px-8 lg:pb-10 lg:translate-x-full lg:bg-white lg:transition-transform dark:lg:bg-dark-surface-dark ${
                        visible ? "lg:!translate-x-0" : ""
                    }`}
                >
                    <div className="flex lg:flex-col lg:items-start">
                        {navigation?.map((button) => (
                            <button
                                className="mr-2 px-6 py-4 leading-6 font-medium last:mr-0 transition-colors tap-highlight-color hover:text-surface-brand lg:p-0 lg:text-xl lg:mb-8 lg:last:mb-0"
                                key={button.id}
                                onClick={() => handleClick(button.anchor)}
                            >
                                {button.title}
                            </button>
                        ))}
                    </div>
                    <Socials className="hidden lg:flex lg:mt-auto lg:!space-x-6" />
                </div>
                <ToggleTheme />
                <button className="btn-stroke ml-4 md:hidden">
                    Call To Action
                </button>
                <button
                    className={`hidden relative z-20 flex-col justify-center items-start w-14 h-14 px-[1.1875rem] ml-4 border border-borderColor rounded-full tap-highlight-color before:w-4 before:h-0.5 before:bg-primary before:rounded-full after:bg-primary before:transition-all after:w-2 after:h-0.5 after:rounded-full after:transition-all lg:flex md:w-13 md:h-13 md:px-[1.0625rem] dark:border-dark-borderColor dark:before:bg-dark-primary dark:after:bg-dark-primary ${
                        visible
                            ? "before:rotate-45 before:translate-y-[0.37rem] after:-rotate-45 after:!w-4 after:-translate-y-[0.37rem]"
                            : ""
                    }`}
                    onClick={toggleMenu}
                >
                    <span
                        className={`w-3 h-0.5 my-1 bg-primary rounded-full transition-all dark:bg-dark-primary ${
                            visible ? "w-0 opacity-0" : ""
                        }`}
                    ></span>
                </button>
            </div>
            <div
                className={twMerge(
                    `hidden fixed inset-0 z-5 bg-primary/90 lg:block lg:invisible lg:opacity-0 lg:transition-all ${
                        visible ? "lg:visible lg:opacity-100" : ""
                    }`
                )}
                onClick={closeMenu}
            ></div>
        </header>
    );
};

export default Header;
