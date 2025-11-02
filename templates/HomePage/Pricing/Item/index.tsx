import Icon from "@/components/Icon";

type ItemProps = {
    item: any;
    monthly: boolean;
};

const Item = ({ item, monthly }: ItemProps) => (
    <div
        className={`flex flex-col flex-1 p-8 rounded-3xl shadow-[0_0.25rem_1.25rem_0_rgba(0,0,0,.06)] xl:px-6 lg:px-8 md:p-6 ${
            item.popular
                ? "bg-gray-800 text-white dark:bg-dark-surface-primary"
                : "bg-white text-primary dark:bg-dark-surface-primary dark:text-dark-primary"
        }`}
    >
        <div className="flex justify-between items-start">
            <div className="mb-2 text-body-xl font-semibold">{item.title}</div>
            {item.popular && (
                <div className="p-1 bg-[#FFBC99] rounded text-xs font-semibold leading-none uppercase text-gray-800">
                    MOST POPULAR
                </div>
            )}
        </div>
        <div className="mb-2 text-[3.5rem] leading-[4rem] font-bold md:text-[2.25rem] md:leading-[2.875rem]">
            ${monthly ? item.priceYearly : item.priceMonthly}
        </div>
        <div className="mb-8 text-secondary md:mb-4">
            {monthly ? "per year" : "per month"}
        </div>
        <div
            className={`mb-10 text-body-xl xl:text-base md:mb-6 ${
                item.popular ? "text-gray-600" : "text-secondary"
            }`}
        >
            {item.description}
        </div>
        <div className="grow mb-auto">
            {item.parameters.map((parameter: any, index: number) => (
                <div
                    className={`flex items-start mb-4 pb-4 border-b last:mb-0 md:mb-3 md:pb-3 md:text-sm md:leading-6 ${
                        item.popular
                            ? "border-gray-700"
                            : "border-borderColor dark:border-gray-700"
                    }`}
                    key={index}
                >
                    <Icon
                        className="shrink-0 mt-0.5 mr-4 fill-surface-brand md:mt-0"
                        name="check"
                    />
                    {parameter}
                </div>
            ))}
        </div>
        <button
            className={`btn-stroke w-full mt-10 lg:mt-8 md:mt-6 ${
                item.popular ? "btn-stroke-light" : "btn-stroke"
            }`}
        >
            Call To Action
        </button>
    </div>
);

export default Item;
