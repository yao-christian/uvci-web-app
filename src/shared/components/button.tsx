type PropsType = {
  children: React.ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  isLoading,
  ...restProps
}: PropsType) {
  return (
    <button className="btn" {...restProps}>
      {isLoading && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
}