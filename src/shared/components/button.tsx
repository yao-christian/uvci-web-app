type PropsType = {
  children: React.ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  isLoading,
  className,
  ...restProps
}: PropsType) {
  return (
    <button
      className={`btn btn-primary ${className}`}
      disabled={isLoading}
      {...restProps}
    >
      {isLoading && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
}
