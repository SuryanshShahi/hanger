import clsx from "clsx";

const ListItem = ({
  onClick,
  name,
  isSelected,
  activeColor,
}: {
  onClick?: () => void;
  name: string;
  isSelected?: boolean;
  activeColor?: string;
}) => {
  return (
    <li className="group list-none cursor-pointer w-fit" onClick={onClick}>
      <span className={clsx(isSelected && `text-[#763235] font-black ${activeColor}`)}>
        {name}
      </span>
      <div
        className={clsx(
          "h-[1px] bg-black duration-500 w-0 group-hover:w-[70%]",
          isSelected && `!bg-[#763235] ${activeColor}`
        )}
      ></div>
    </li>
  );
};

export default ListItem;
