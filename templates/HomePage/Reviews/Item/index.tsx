import Image from "@/components/Image";
import Icon from "@/components/Icon";

type ItemProps = {
    item: any;
};

const Item = ({ item }: ItemProps) => {
    return (
        <div className="flex flex-col p-6 bg-surface-secondary border border-borderColor rounded-3xl -tracking-[0.01em] first:mb-5 first:-ml-[8rem] first:mr-[8rem] dark:bg-dark-surface-secondary dark:border-dark-borderColor">
            <div className="flex items-center mb-4">
                <div className="shrink-0 w-12 mr-3">
                    <Image
                        className="w-full h-full object-cover rounded-full opacity-100"
                        src={item.avatar}
                        width={48}
                        height={48}
                        alt=""
                    />
                </div>
                <div className="grow">
                    <div className="mb-1.5 text-[0.875rem] leading-4 font-semibold">
                        {item.author}
                    </div>
                    <div className="text-xs leading-4 text-secondary">
                        {item.position}
                    </div>
                </div>
                <Icon
                    className="shrink-0 ml-6 fill-gray-400"
                    name={item.icon}
                />
            </div>
            <div className="h-[6rem] mb-auto text-sm leading-6 overflow-hidden">
                {item.content}
            </div>
            <div className="mt-4 text-xs leading-4 text-secondary">
                {item.date}
            </div>
        </div>
    );
};

export default Item;
