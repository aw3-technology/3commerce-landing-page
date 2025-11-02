import { useColorMode } from "@chakra-ui/color-mode";
import { twMerge } from "tailwind-merge";
import Icon from "@/components/Icon";

type ToggleThemeProps = {
    className?: string;
};

const ToggleTheme = ({ className }: ToggleThemeProps) => {
    const { colorMode, setColorMode } = useColorMode();

    const items = [
        {
            icon: "sun",
            active: colorMode === "light",
            onClick: () => setColorMode("light"),
        },
        {
            icon: "moon",
            active: colorMode === "dark",
            onClick: () => setColorMode("dark"),
        },
    ];

    return (
        <div
            className={twMerge(
                `flex p-[0.1875rem] bg-surface-secondary border border-transparent rounded-full dark:bg-dark-surface-secondary ${
                    className || ""
                }`
            )}
        >
            {items.map((item, index) => (
                <button
                    className={`group w-8 h-8 mr-1 border rounded-full text-0 last:mr-0 transition-colors tap-highlight-color ${
                        item.active
                            ? "border-borderColor bg-surface-primary dark:bg-dark-surface-primary dark:border-dark-borderColor"
                            : "border-transparent bg-transparent"
                    }`}
                    key={index}
                    onClick={item.onClick}
                >
                    <Icon
                        className={`w-4 h-4 transition-colors group-hover:fill-primary dark:group-hover:fill-dark-primary ${
                            item.active
                                ? "fill-primary dark:fill-dark-primary"
                                : "fill-secondary"
                        }`}
                        name={item.icon}
                    />
                </button>
            ))}
        </div>
    );
};

export default ToggleTheme;
