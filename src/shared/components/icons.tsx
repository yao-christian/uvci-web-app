import {
  FiX,
  FiAlignLeft,
  FiAlignCenter,
  FiAlignJustify,
} from "react-icons/fi";

//CloseIcon
type CloseIconPropsType = {
  size?: number;
};

export const CloseIcon: React.FC<CloseIconPropsType> = ({ size = 25 }) => {
  return <FiX size={size} />;
};

// LeftMenuIcon
type LeftMenuIconPropsType = {
  size?: number;
};

export const LeftMenuIcon: React.FC<LeftMenuIconPropsType> = ({
  size = 25,
}) => {
  return <FiAlignLeft size={size} />;
};

// CenterMenuIcon
type CenterMenuIconPropsType = {
  size?: number;
};

export const CenterMenuIcon: React.FC<CenterMenuIconPropsType> = ({
  size = 25,
}) => {
  return <FiAlignCenter size={size} />;
};

// JustifyMenuIcon
type JustifyMenuIconPropsType = {
  size?: number;
};

export const JustifyMenuIcon: React.FC<JustifyMenuIconPropsType> = ({
  size = 25,
}) => {
  return <FiAlignJustify size={size} />;
};
