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
            <span className="text-lg">응모권 내역</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <div className="w-full h-full pt-2  space-y-4 flex flex-col text-[#4D4D4D]">
          <div className="flex items-center justify-between px-5 py-4  border-b-[5px] border-[#F5F5F5]">

          <p className="font-medium text-md">보유 응모권</p>
          <p className="font-semibold text-md">0장</p>
          </div>
        
        <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
            <Image src={'/images/exclamation-mark.svg'} alt="point-history" width={200} height={200} className="size-12"/>
            <p className="text-[#ADADAD] text-sm">내역이 없습니다</p>
        </div>
      </div>
     
    </div>
  );
}
