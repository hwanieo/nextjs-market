import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="flex flex-col justify-between shadow-md rounded-md overflow-hidden text-wrap min-w-[300px] min-h-[400px] max-w-[300px] max-h-[400px] hover:shadow-2xl transition-all cursor-pointer">
      <div className="w-full h-[300px] relative">
        <Image
          src="/buy/galaxy-book-4.jpeg"
          fill
          objectFit="cover"
          alt="surface-pro"
        />
      </div>
      <div className="flex-1 flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold">Surface Pro 11</span>
          <div className="overflow-hidden">
            <p className="text-sm line-clamp-2">
              Microsoft의 최신제품 2 in 1 서피스 프로 11 판매합니다.Microsoft의
              최신제품 2 in 1 서피스 프로 11 판매합니다.Microsoft의 최신제품 2
              in 1 서피스 프로 11 판매합니다.Microsoft의 최신제품 2 in 1 서피스
              프로 11 판매합니다.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-between p-4">
        <span className="text-sm font-bold">1,900,000</span>
        <Link
          href="/buy/:id"
          className="px-2 py-1 rounded-sm hover:text-slate-800 transition-all"
        >
          상세보기
        </Link>
      </div>
    </div>
  );
}
