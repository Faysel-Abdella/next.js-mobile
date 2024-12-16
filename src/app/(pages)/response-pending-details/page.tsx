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
          <p className="text-[13px] font-light ">
         
            문의 내용 텍스트 영역 문의 내용 텍스트 영역 문의 내용 텍스트 영역 
문의 내용 텍스트 영역 문의 내용 텍스트 영역 </p>
        </div>


        <Image src={"/images/phone.png"} width={300} height={300} alt="phone image" className="w-1/2 aspect-square" /> 
       


      </div>
       
      </div>
    </div>
  );
}
