"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "구매하기",
    href: "/buy",
  },
  {
    name: "판매하기",
    href: "/sell",
  },
  {
    name: "판매내역",
    href: "/sales-history",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className={clsx("text-slate-700", {
              "text-purple-500": pathname === link.href,
            })}
          >
            <p>{link.name}</p>
          </Link>
        </li>
      ))}
    </>
  );
}
