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
            <span className="text-md">1:1 문의</span>
          </Link>
          <Link href={"/"} className=" text-sm font-light text-[#3B90F4]">
          문의하기
          </Link>

        </div>
        <Separator />
      </nav>
      <div className="w-full h-full  space-y-4 flex flex-col text-[#4D4D4D]">
      <div className="flex flex-col gap-5 p-5 text-[#4D4D4D] font-light">
        <div className="flex flex-col gap-1">
          <p className="text-md flex items-center gap-2">
          <span className="text-[10px] bg-[#fafafa] text-[#ADADAD] w-fit p-1 px-1.5">
          답변 대기
            </span>
            문의3 제목 텍스트 텍스트</p>
          <p className=" text-[#ADADAD] text-[13px]">2024.11.01</p>
        </div>
        
        <Separator className="bg-[#F5F5F5]"/>

        <div className="flex flex-col gap-1">
          <p className="text-md flex items-center gap-2">
          <span className="text-[10px] bg-[#3B90F4]/10 text-[#3B90F4] w-fit p-1 px-1.5">
          답변 완료
            </span>
            문의3 제목 텍스트 텍스트</p>
          <p className=" text-[#ADADAD] text-[13px]">2024.10.20</p>
        </div>

        <Separator className="bg-[#F5F5F5]"/>

        <div className="flex flex-col gap-1">
          <p className="text-md flex items-center gap-2">
          <span className="text-[10px] bg-[#3B90F4]/10 text-[#3B90F4] w-fit p-1 px-1.5">
          답변 완료
            </span>
            문의3 제목 텍스트 텍스트</p>
          <p className=" text-[#ADADAD] text-[13px]">2024.10.01</p>
        </div>
      </div>
       
      </div>
    </div>
  );
}
