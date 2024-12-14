import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white relative py-6 flex flex-col justify-between items-center h-full">
      <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">마이페이지</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <div className="w-full h-full pt-4 px-4 space-y-4 flex flex-col text-[#4D4D4D]">
        <p className="text-lg ">
          <span className="font-semibold">홍길동</span> 님 안녕하세요!
        </p>
        <div className="flex bg-[#FFF8F5] rounded-xl items-center justify-center gap-11 p-6">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex gap-1 items-center text-[16px] font-light">
              {/* <span className="bg-red-500 rounded-full aspect-square p-1 h-6">P</span> */}
              <Image
                alt="icon"
                src="/images/rounded-letter-p.svg"
                width={20}
                height={20}
                className="size-5"
              />
              포인트
            </div>
            <p className=" font-medium text-primary text-xl">5,000P</p>
          </div>
          <span className="h-full w-[1px] bg-white"></span>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex gap-1 items-center text-[16px] font-light">
              {/* <span className="bg-red-500 rounded-full aspect-square p-1 h-6">P</span> */}
              <Image
                alt="icon"
                src="/images/star-mass.svg"
                width={20}
                height={20}
                className="w-6"
              />
              응모권
            </div>
            <p className=" font-medium text-primary text-xl">4장</p>
          </div>
        </div>
        <div className="flex flex-col space-y-6">
          <p className="text-md">구매내역</p>
          <p className="text-md">내 보험 관리</p>
          <p className="text-md">소셜 계정 연동</p>
          <p className="text-md">알림 설정</p>
        </div>
        <Separator />
        <div className="flex flex-col space-y-6">
          <p className="text-md">공지사항</p>
          <p className="text-md">FAQ</p>
          <p className="text-md">1:1 문의</p>
        </div>
        <Separator />
        <div className="flex flex-col space-y-6">
          <p className="text-md">이용약관</p>
          <p className="text-md">개인정보 처리방침</p>
        </div>
      </div>
      <div className="flex text-sm text-[#ADADAD] justify-center items-center space-x-6 w-full">
          <p className="">로그아웃</p>
          <p className="">회원 탈퇴</p>
        </div>
    </div>
  );
}
