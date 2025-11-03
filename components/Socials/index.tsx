import Icon from "@/components/Icon";

export const socials = [
    {
        id: "0",
        icon: "facebook",
        url: "https://x.com/aw3_xyz",
    },
    {
        id: "1",
        icon: "instagram",
        url: "https://x.com/aw3_xyz",
    },
    {
        id: "2",
        icon: "twitter",
        url: "https://x.com/aw3_xyz",
    },
    {
        id: "3",
        icon: "linkedin",
        url: "https://x.com/aw3_xyz",
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
