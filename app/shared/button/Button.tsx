import { FC, PropsWithChildren } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./styles";
interface IButton {
  variant?: "gray" | "primary" | "white" | "transparent" | "outline";
  className?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  toolTip?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  noHover?: boolean;
  style?: any;
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  variant,
  className,
  size,
  fullWidth,
  type,
  onClick,
  toolTip,
  isLoading,
  isDisabled,
  noHover,
  style,
}) => {
  return (
    <button
      style={style}
      type={type ?? "button"}
      className={styles.buttonClass(
        fullWidth,
        size,
        className,
        isDisabled,
        noHover
      )}
      onClick={onClick}
      title={toolTip}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="mx-auto h-6 animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
