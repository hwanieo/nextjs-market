import AuthLinks from "@/app/ui/auth-links";
import NavLinks from "@/app/ui/nav-links";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-40 py-4 shadow-sm sticky bg-white z-10 top-0 left-0 right-0">
      <div className="flex items-center gap-6">
        <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" />
        <Link href="/" className="uppercase">
          Market
        </Link>
        <nav className="ml-10">
          <ul className="flex gap-4">
            <NavLinks />
          </ul>
        </nav>
      </div>
      <AuthLinks />
    </header>
  );
}
