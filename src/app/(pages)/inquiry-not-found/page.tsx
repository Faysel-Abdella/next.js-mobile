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
      <div className="w-full h-full pt-2  space-y-4 flex flex-col text-[#4D4D4D]">
         
        
         <div className="flex flex-col gap-4 w-full h-full items-center justify-center">
             <Image src={'/images/exclamation-mark.svg'} alt="point-history" width={200} height={200} className="size-12"/>
             <p className="text-[#ADADAD] text-sm">문의하신 내역이 없습니다</p>
         </div>
       </div>
    </div>
  );
}
