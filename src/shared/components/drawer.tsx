type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Drawer: React.FC<PropsType> = ({ children, isOpen, onClose }) => {
  return (
    <div
      // className={`fixed top-0 left-0 z-10 h-full bg-gray-900/25 ease-in-out duration-300 ${
      className={`fixed top-0 left-0 z-10 h-full bg-gray-900/25 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="absolute h-full">{children}</div>
      <div
        className="w-screen h-full cursor-pointer"
        onClick={() => onClose()}
      />
    </div>
  );
};

export default Drawer;
