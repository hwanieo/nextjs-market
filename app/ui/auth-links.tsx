import Link from "next/link";

export default function AuthLinks() {
  return (
    <div className="flex gap-4">
      <Link href="/login">로그인</Link>
      <Link href="/signup">회원가입</Link>
    </div>
  );
}
