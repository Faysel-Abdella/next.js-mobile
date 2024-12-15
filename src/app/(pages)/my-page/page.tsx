import { Icons } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <nav className="py-6 px-4">
        <div className="w-full mx-auto flex justify-between items-center">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">마이페이지</span>
          </Link>
        </div>
      </nav>
      <Separator />
      <ScrollArea className="flex-1">
        <div className="space-y-4 p-5 text-[#4D4D4D]">
          <p className="text-lg">
            <span className="font-semibold">홍길동</span> 님 안녕하세요!
          </p>
          <div className="flex bg-[#FFF8F5] rounded-xl items-center justify-center gap-11 p-6">
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex gap-1 items-center text-[16px] font-light">
                <Image
                  alt="icon"
                  src="/images/rounded-letter-p.svg"
                  width={20}
                  height={20}
                  className="size-5"
                />
                포인트
              </div>
              <p className="font-medium text-primary text-xl">5,000P</p>
            </div>
            <span className="h-full w-[1px] bg-white"></span>
            <div className="flex flex-col items-center justify-center gap-1">
              <div className="flex gap-1 items-center text-[16px] font-light">
                <Image
                  alt="icon"
                  src="/images/star-mass.svg"
                  width={20}
                  height={20}
                  className="w-6"
                />
                응모권
              </div>
              <p className="font-medium text-primary text-xl">4장</p>
            </div>
          </div>
          <div className="flex flex-col space-y-5 font-light">
            <p className="text-md">구매내역</p>
            <p className="text-md">내 보험 관리</p>
            <p className="text-md">소셜 계정 연동</p>
            <p className="text-md">알림 설정</p>
          </div>
          <Separator />
          <div className="flex flex-col space-y-5 font-light">
            <p className="text-md">공지사항</p>
            <p className="text-md">FAQ</p>
            <p className="text-md">1:1 문의</p>
          </div>
          <Separator />
          <div className="flex flex-col space-y-5 font-light">
            <p className="text-md">이용약관</p>
            <p className="text-md">개인정보 처리방침</p>
          </div>
        </div>
      </ScrollArea>
      {/* <Separator /> */}
      <footer className="py-6 px-4 ">
        <div className="flex justify-center items-center space-x-6 text-[13px] text-[#ADADAD]">
          <p>로그아웃</p>
          <p>회원 탈퇴</p>
        </div>
      </footer>
    </div>
  );
}

