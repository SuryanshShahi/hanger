import clsx from "clsx";

const styles = {
  buttonClass: (
    fullWidth?: boolean,
    size?: string,
    className?: string,
    isDisabled?: boolean,
    noHover?: boolean
  ) =>
    clsx(
      "h-max text-white bg-[#763235] duration-500 p-2 px-5",
      fullWidth && "w-full",
      {
        "p-1 text-base": size === "md",
        "p-3 text-sm": size === "sm",
        "p-3 text-lg": size === "lg",
      },
      className,
      isDisabled && "cursor-not-allowed bg-gray-200 !text-[#A3A3A3]",
      noHover && "lg:hover:transition-none",
      !isDisabled && "hover:bg-[#763235]/90 hover:!text-white"
    ),
};

export default styles;
