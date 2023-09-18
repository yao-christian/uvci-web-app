type TableContainerPropsType = React.PropsWithChildren &
  React.ThHTMLAttributes<HTMLElement>;

type TableContainerHeaderPropsType = {
  children: React.ReactNode;
  title: string;
} & React.ThHTMLAttributes<HTMLElement>;

type TableContainerFooterPropsType = React.PropsWithChildren;

type TableContainerContentPropsType = React.PropsWithChildren & {};

// Table container

const TableContainer: React.FC<TableContainerPropsType> & {
  Header: React.FC<TableContainerHeaderPropsType>;
  Footer: React.FC<TableContainerFooterPropsType>;
  Content: React.FC<TableContainerContentPropsType>;
} = ({ children, ...restProps }) => {
  return (
    <div className="card" {...restProps}>
      {children}
    </div>
  );
};

// Table container header
TableContainer.Header = ({ children, title, ...restProps }) => {
  return (
    <div className="border-b">
      <div className="flex flex-col p-4 md:flex-row md:justify-between md:items-center">
        <h2 className="card-title mb-2">{title}</h2>
        <div className="space-x-3" {...restProps}>
          {children}
        </div>
      </div>
    </div>
  );
};

TableContainer.Header.displayName = "TableContainerHeader";

// Table container footer
TableContainer.Footer = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

TableContainer.Footer.displayName = "TableContainerFooter";

// Table container content
TableContainer.Content = ({ children, ...restProps }) => {
  return (
    <div className="card-body w-full overflow-x-auto" {...restProps}>
      {children}
    </div>
  );
};

TableContainer.Content.displayName = "TableContainerContent";

export default TableContainer;
