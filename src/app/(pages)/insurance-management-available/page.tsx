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
            <span className="text-lg">내 보험 관리</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <div className="w-full h-full p-5 space-y-4 flex flex-col text-[#4D4D4D]">
        <div className="flex gap-3 items-center">

          <div className="flex h-full aspect-square rounded-lg bg-[#FFE9E9]"></div>
          <div className="flex flex-col gap-1 py-2">
            <p className="text-md font-light">교보용종케어보험(무배당)</p>
            <p className="text-[10px] bg-[#3B90F4]/10 text-[#3B90F4] w-fit p-1 px-1.5">
              신청 완료
            </p>
            <p className="text-[13px] text-[#ADADAD]">홍길동(01011112222)</p>
          </div>
        </div>

<Separator  className="bg-[#F5F5F5]"/>
        <div className="flex gap-3 items-center">
          <div className="flex h-full aspect-square rounded-lg bg-[#FFE9E9]"></div>
          <div className="flex flex-col gap-1 py-2">
            <p className="text-md font-light">교보용종케어보험(무배당)</p>
            <p className="text-[10px] bg-[#8268FD]/10 text-[#8268FD] w-fit p-1 px-1.5">
              신청 완료
            </p>
            <p className="text-[13px] text-[#ADADAD]">홍길동(01011112222)</p>
          </div>
        </div>

        <Separator  className="bg-[#F5F5F5]" />

        <div className="flex gap-3 items-center">
          <div className="flex h-full aspect-square rounded-lg bg-[#FFE9E9]"></div>
          <div className="flex flex-col gap-1 py-2">
            <p className="text-md font-light">교보용종케어보험(무배당)</p>
            <p className="text-[10px] bg-[#ADADAD]/10 text-[#ADADAD] w-fit p-1 px-1.5">
              신청 완료
            </p>
            <p className="text-[13px] text-[#ADADAD]">홍길동(01011112222)</p>
          </div>
        </div>

        

        
      </div>
    </div>
  );
}
