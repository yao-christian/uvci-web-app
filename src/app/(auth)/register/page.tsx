import Link from "next/link";
import RegisterForm from "./_components/register-form";

export default function RegisterPage() {
  return (
    <div>
      <h2 className="text-center uppercase mt-6 text-2xl font-extrabold text-gray md:text-3xl">
        Inscription
      </h2>

      <p className="mt-4">
        <span>Vous avez un compte ? </span>
        <Link
          href="/login"
          className="text-sm font-medium text-green-600 hover:text-green-500"
        >
          connectez-vous
        </Link>
      </p>

      <RegisterForm />
    </div>
  );
}
