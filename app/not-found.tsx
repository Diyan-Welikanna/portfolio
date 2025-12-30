import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[#64ffda] hover:bg-[#64ffda]/80 text-gray-900 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#64ffda]/50"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
