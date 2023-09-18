type PropsTypeOfTh = {
  children: React.ReactNode;
} & React.ThHTMLAttributes<HTMLElement>;

export function Th({ children, ...restProps }: PropsTypeOfTh) {
  return (
    <th
      scope="col"
      className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-gray-700 text-gray-700 bg-gray-100"
      {...restProps}
    >
      {children}
    </th>
  );
}

type PropsTypeOfTd = {
  children: React.ReactNode;
} & React.TdHTMLAttributes<HTMLElement>;

export function Td({ children, ...restProps }: PropsTypeOfTd) {
  return (
    <td
      className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-gray-500 text-gray-500"
      {...restProps}
    >
      {children}
    </td>
  );
}

type PropsTypeOfTr = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export function Tr({ children, ...restProps }: PropsTypeOfTr) {
  return <tr {...restProps}>{children}</tr>;
}

type PropsTypeOfThead = {
  children: React.ReactNode;
} & React.ThHTMLAttributes<HTMLElement>;

export function Thead({ children, ...restProps }: PropsTypeOfThead) {
  return <thead {...restProps}>{children}</thead>;
}

type PropsTypeOfTbody = {
  children: React.ReactNode;
} & React.ThHTMLAttributes<HTMLElement>;

export function Tbody({ children, ...restProps }: PropsTypeOfTbody) {
  return <tbody {...restProps}>{children}</tbody>;
}

type PropsTypeOfTable = {
  children: React.ReactNode;
} & React.TableHTMLAttributes<HTMLElement>;

export function Table({ children, ...restProps }: PropsTypeOfTable) {
  return (
    <table
      className="w-full text-left border border-collapse rounded sm:border-separate border-gray-200"
      cellSpacing={0}
      {...restProps}
    >
      {children}
    </table>
  );
}
