import Link from "next/link";
import Login from "./_components/login";

export default function LoginPage() {
  return (
    <div>
      <h2 className="text-center uppercase mt-6 text-2xl font-extrabold text-gray md:text-3xl">
        Connexion
      </h2>

      <p className="mt-4">
        <span>Vous n'avez pas de de compte ? </span>
        <Link
          href="/register"
          className="text-sm font-medium text-green-600 hover:text-green-500"
        >
          Inscrivez-vous
        </Link>
      </p>

      <Login />
    </div>
  );
}
