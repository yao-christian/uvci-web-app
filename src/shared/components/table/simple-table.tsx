type SimpleTablePropsType = React.PropsWithChildren;

type SimpleTableHeaderPropsType = React.PropsWithChildren & {
  title: string;
};

type SimpleTableFooterPropsType = React.PropsWithChildren;

type SimpleTableBodyPropsType = React.PropsWithChildren & {};

// Simple table

const SimpleTable: React.FC<SimpleTablePropsType> & {
  Header: React.FC<SimpleTableHeaderPropsType>;
  Footer: React.FC<SimpleTableFooterPropsType>;
  Body: React.FC<SimpleTableBodyPropsType>;
} = ({ children, ...restProps }) => {
  return (
    <div className="card" {...restProps}>
      {children}
    </div>
  );
};

// Simple table header
SimpleTable.Header = ({ children, title, ...restProps }) => {
  return (
    <>
      <div className="flex justify-between items-center p-4" {...restProps}>
        <h2 className="card-title">{title}</h2>
        <div className="space-x-3">{children}</div>
      </div>
    </>
  );
};

SimpleTable.Header.displayName = "SimpleTableHeader";

// Simple table footer
SimpleTable.Footer = ({ children, ...restProps }) => {
  return <div {...restProps}>{children}</div>;
};

SimpleTable.Footer.displayName = "SimpleTableFooter";

// Simple table body
SimpleTable.Body = ({ children, ...restProps }) => {
  return (
    <div className="card-body w-full overflow-x-auto" {...restProps}>
      {children}
    </div>
  );
};

SimpleTable.Body.displayName = "SimpleTableBody";

export { SimpleTable };
