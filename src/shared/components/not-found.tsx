"use client";

import Link from "next/link";

type PropsType = {
  actionLabel?: string;
};

export default function NotFoundPage({
  actionLabel = "Aller à l'accueil",
}: PropsType) {
  return (
    <div className="flex items-center justify-center h-screen -mt-16 bg-gray-800">
      <div className="container">
        <div className="text-center text-gray-400">
          <p className="text-gray-300 font-semibold">Oops!</p>

          <h1 className="text-9xl font-sans font-bold">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>

          <h5 className="text-gray-300 font-semibold">Page non trouvée</h5>

          <p className="text-gray-100">
            Nous sommes désolés, mais la page que vous avez demandée n'a pas été
            trouvée.
          </p>

          {actionLabel && (
            <div className="mt-8">
              <Link
                href="/"
                className="bg-primary-400 px-5 py-3 text-sm shadow-sm font-medium text-gray-50 rounded-full hover:shadow-lg"
              >
                {actionLabel}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
