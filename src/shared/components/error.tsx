type PropsType = {
  actionLabel?: string;
  error?: string;
};

export default function ErrorPage({
  actionLabel = "Réessayez",
  error = "Erreur",
}: PropsType) {
  return (
    <div className="flex items-center justify-center h-screen -mt-16">
      <div className="container">
        <div className="text-center">
          <p className="font-semibold">Oops!</p>

          <h1 className="text-9xl font-sans font-bold text-error-500">
            <span>{error}</span>
          </h1>

          <p>Une erreur s'est produite, veuillez réessayer.</p>

          {actionLabel && (
            <div className="mt-8">
              <a className="bg-error-400 px-5 py-3 text-sm shadow-sm font-medium text-gray-50 rounded-full hover:shadow-lg">
                {actionLabel}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
