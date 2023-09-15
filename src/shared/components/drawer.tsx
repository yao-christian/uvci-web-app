"use client";

import ReactModernDrawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  direction?: "left" | "right" | "bottom" | "top";
  width?: number;
} & React.HTMLAttributes<HTMLElement>;

const Drawer: React.FC<PropsType> = ({
  children,
  isOpen,
  direction = "left",
  onClose,
  width,
  ...restProps
}) => {
  return (
    <ReactModernDrawer
      open={isOpen}
      onClose={onClose}
      direction={direction}
      size={width}
      {...restProps}
    >
      <div>{children}</div>
    </ReactModernDrawer>
  );
};

export default Drawer;
