import clsx from "clsx";

const ListItem = ({
  onClick,
  name,
  isSelected,
}: {
  onClick?: () => void;
  name: string;
  isSelected?: boolean;
}) => {
  return (
    <li className="group list-none cursor-pointer w-fit" onClick={onClick}>
      <span className={clsx(isSelected && "text-red500")}>{name}</span>
      <div
        className={clsx(
          "h-[1px] bg-black duration-500 w-0 group-hover:w-[70%]",
          isSelected && "!bg-red500"
        )}
      ></div>
    </li>
  );
};

export default ListItem;
