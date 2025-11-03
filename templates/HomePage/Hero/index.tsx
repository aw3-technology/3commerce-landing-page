import Image from "@/components/Image";
import Link from "next/link";

type HeroProps = {};

const Hero = ({}: HeroProps) => {
    return (
        <div className="mx-10 mb-18 pt-[4.75rem] px-5 rounded-4xl bg-surface-secondary border border-borderColor lg:mx-6 lg:mb-12 lg:pt-14 md:pt-8 md:mx-4 dark:bg-dark-surface-secondary dark:border-dark-borderColor">
            <div className="max-w-[56rem] mx-auto mb-8 text-center lg:mb-11 md:mb-8">
                <h1 className="mb-4 text-h1 lg:mb-3 md:mb-2">
                    Build Your Online Store in Minutes
                </h1>
                <div className="max-w-[37.5rem] mx-auto mb-10 text-body-xl text-secondary lg:mb-6">
                    Launch and scale your eCommerce business with our powerful platform.
                    Manage inventory, process payments, and grow your sales all in one place.
                </div>
                <Link href="https://app.3commerce.com/sign-in" className="btn">Start Selling Today</Link>
            </div>
            <div className="max-w-[82rem] mx-auto aspect-[1.665] overflow-hidden lg:aspect-[1.55] md:aspect-[1.41]">
                <picture className="w-full dark:hidden">
                    <source srcSet="/images/hero-pic-light.webp" type="image/webp" />
                    <Image
                        className="w-full"
                        width={2152}
                        height={2560}
                        src="/images/hero-pic-light.png"
                        alt=""
                    />
                </picture>
                <picture className="hidden w-full dark:block">
                    <source srcSet="/images/hero-pic-dark.webp" type="image/webp" />
                    <Image
                        className="w-full"
                        width={2179}
                        height={2560}
                        src="/images/hero-pic-dark.png"
                        alt=""
                    />
                </picture>
            </div>
        </div>
    );
};

export default Hero;
