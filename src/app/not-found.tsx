import Link from "next/link";

export default function NotFound() {
  return (
    <div className="font-harc-main flex flex-col items-center px-4 pt-10 pb-24 text-center">
      <h1 className="text-harc-darkblue mb-4 text-6xl font-bold">404</h1>

      <p className="text-harc-darkblue mb-8 max-w-2xl text-2xl font-semibold">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="bg-harc-darkblue rounded-lg px-6 py-3 font-semibold text-white"
      >
        Go Back Home
      </Link>
    </div>
  );
}
