type SwitchProps = {
    className?: string;
    value: any;
    onChange: any;
};

const Switch = ({ className, value, onChange }: SwitchProps) => (
    <label
        className={`relative block shrink-0 select-none cursor-pointer ${
            className || ""
        }`}
    >
        <input
            className="peer absolute top-0 left-0 opacity-0"
            type="checkbox"
            value={value}
            onChange={onChange}
            checked={value}
        />
        <span className="block w-[2.625rem] h-6 rounded-full border border-borderColor bg-white before:absolute before:top-1/2 before:left-[0.1875rem] before:w-[1.125rem] before:h-[1.125rem] before:-translate-y-1/2 before:bg-primary before:rounded-full before:transition-transform peer-checked:before:translate-x-[1.125rem] dark:bg-dark-surface-primary dark:border-dark-borderColor dark:before:bg-white"></span>
    </label>
);

export default Switch;
