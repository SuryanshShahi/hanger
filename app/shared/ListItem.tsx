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
  console.log({ isSelected });

  return (
    <li className="group list-none cursor-pointer w-fit" onClick={onClick}>
      <span className={clsx(isSelected && `text-red500 ${activeColor}`)}>
        {name}
      </span>
      <div
        className={clsx(
          "h-[1px] bg-black duration-500 w-0 group-hover:w-[70%]",
          isSelected && `!bg-red500 ${activeColor}`
        )}
      ></div>
    </li>
  );
};

export default ListItem;
