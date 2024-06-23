import { FC, PropsWithChildren } from 'react';
import styles from './styles';

interface IModal {
  btnName?: string;
  className?: string;
  onClose?: () => void;
}

const Modal: FC<PropsWithChildren<IModal>> = ({
  className,
  onClose,
  children,
}) => {
  return (
    <div className={styles.modal}>
      <div className={styles.wrapper} onClick={onClose}></div>
      <div className={styles.body(className)}>{children}</div>
    </div>
  );
};

export default Modal;
