"use client";

import Link from "next/link";

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
  return (
    <>
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href}>
            <p>{link.name}</p>
          </Link>
        </li>
      ))}
    </>
  );
}
