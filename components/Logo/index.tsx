import Link from "next/link";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => {
    return (
        <Link
            className={`flex shrink-0 w-12 opacity-100 outline-none ${
                className || ""
            }`}
            href="/"
        >
            <Image
                className="w-full opacity-100 hidden dark:block"
                src="/images/logo-light.svg"
                width={48}
                height={48}
                alt="Synapse"
                priority
            />
            <Image
                className="w-full opacity-100 dark:hidden"
                src="/images/logo-dark.svg"
                width={48}
                height={48}
                alt="Synapse"
                priority
            />
        </Link>
    );
};

export default Logo;
