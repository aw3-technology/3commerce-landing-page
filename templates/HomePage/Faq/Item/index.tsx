import { useState } from "react";

type ItemProps = {
    item: any;
};

const Item = ({ item }: ItemProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <div className="border-b border-borderColor dark:border-dark-borderColor">
            <div
                className={`relative py-6 pr-10 text-body-xl font-semibold cursor-pointer tap-highlight-color transition-colors before:absolute before:top-1/2 before:right-1.5 before:-translate-y-1/2 before:w-[0.875rem] before:h-0.5 before:rounded-full before:bg-primary after:absolute after:top-1/2 after:right-3 after:-translate-y-1/2 after:w-0.5 after:h-[0.875rem] after:bg-primary after:rounded-full after:transition-all hover:text-surface-brand lg:py-4 dark:before:bg-white dark:after:bg-white ${
                    visible ? "after:rotate-90" : ""
                }`}
                onClick={() => setVisible(!visible)}
            >
                {item.title}
            </div>
            <div
                className={`-mt-3 pb-6 text-secondary lg:-mt-1 lg:pb-4 ${
                    visible ? "block" : "hidden"
                }`}
            >
                {item.content}
            </div>
        </div>
    );
};

export default Item;
