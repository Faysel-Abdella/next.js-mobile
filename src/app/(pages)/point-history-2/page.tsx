import { Button } from "@/components/ui/button";
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
            <span className="text-lg">포인트 내역</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <div className="w-full h-full pt-2  space-y-4 flex flex-col text-[#4D4D4D]">
          <div className="flex items-center justify-between px-5 py-4  border-b-[5px] border-[#F5F5F5]">

          <p className="font-medium text-md">현재 포인트</p>
          <p className="font-semibold text-md">1000 P</p>
          </div>
        
        <div className="flex flex-col gap-4 w-full h-full justify-between py-1">
            <div className="flex flex-col gap-5 px-5">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                   <p className="font-light text-[10px] text-[#ADADAD]">2024-12-01 10:30:51</p>
                   <p className="font-light text-md text-[#4D4D4D]">출석 체크</p>

                </div>
                   <p className="font-medium text-md text-[blue]">+ 500 P</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                   <p className="font-light text-[10px] text-[#ADADAD]">2024-12-01 10:30:51</p>
                   <p className="font-light text-md text-[#4D4D4D]">아이스 아메리카노 구입</p>

                </div>
                   <p className="font-medium text-md text-[red]">- 500 P</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                   <p className="font-light text-[10px] text-[#ADADAD]">2024-12-01 10:30:51</p>
                   <p className="font-light text-md text-[#4D4D4D]">출석 체크</p>

                </div>
                   <p className="font-medium text-md text-[blue]">+ 500 P</p>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                   <p className="font-light text-[10px] text-[#ADADAD]">2024-12-01 10:30:51</p>
                   <p className="font-light text-md text-[#4D4D4D]">아이스 아메리카노 구입</p>

                </div>
                   <p className="font-medium text-md text-[red]">- 500 P</p>
              </div>
            </div>
            <Button className="text-[#03C75A] text-md mx-5 flex items-center gap-1 py-5" variant={"outline"} >
              <Image src={'/images/pay-logo.svg'} alt="point-history" width={70} height={70} className="h-5"/>
              
              포인트 전환하기
            </Button>
        </div>
      </div>
     
    </div>
  );
}
