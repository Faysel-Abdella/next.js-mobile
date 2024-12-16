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
      <div className="w-full h-full pt-2  px-5 space-y-8 flex flex-col text-[#4D4D4D]">
       
        
        <div className="flex flex-col gap-4 pt-6 items-center justify-center">
            <Image src={'/images/completed.svg'} alt="point-history" width={200} height={200} className="size-12"/>
            <p className=" text-md">포인트 전환 완료</p>
        </div>
        <div className="flex flex-col gap-4 p-4 rounded-xl bg-[#F5F5F5]">
          <div className="flex w-full justify-between">
            <p className="font-light">전환된 네이버 아이디</p>
            <p className="text-end font-medium">aaa123</p>

          </div>

          <div className="flex w-full justify-between">
            <p className="font-light">전환 포인트</p>
            <p className="text-end font-medium text-primary">1,000 P</p>

          </div>

          <div className="flex w-full justify-between">
            <p className="font-light">잔여 포인트</p>
            <p className="text-end font-medium">11,000 P</p>

          </div>
        </div>
      </div>
     
    </div>
  );
}
