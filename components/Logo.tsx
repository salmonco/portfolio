import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <Image
        className="flex-shrink-0"
        src="/favicon.ico"
        alt="Logo"
        width={24}
        height={24}
      />
      <div className="hidden sm:block">
        <span className="font-semibold text-lg hidden sm:inline">
          Jisu Bong
        </span>
      </div>
    </Link>
  );
}
