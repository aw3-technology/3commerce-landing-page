import Icon from "@/components/Icon";

export const socials = [
    {
        id: "0",
        icon: "facebook",
        url: "https://www.facebook.com/ui8.net/",
    },
    {
        id: "1",
        icon: "instagram",
        url: "https://instagram.com/ui8net/",
    },
    {
        id: "2",
        icon: "twitter",
        url: "https://twitter.com/ui8",
    },
    {
        id: "3",
        icon: "linkedin",
        url: "https://www.linkedin.com/company/ui8",
    },
];

type SocialsProps = {
    className?: string;
};

const Socials = ({ className }: SocialsProps) => (
    <div className={`flex space-x-4 ${className || ""}`}>
        {socials.map((social) => (
            <a
                className="group text-0"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.id}
            >
                <Icon
                    className="fill-gray-400 transition-colors group-hover:fill-gray-900 dark:group-hover:fill-white"
                    name={social.icon}
                />
            </a>
        ))}
    </div>
);

export default Socials;
