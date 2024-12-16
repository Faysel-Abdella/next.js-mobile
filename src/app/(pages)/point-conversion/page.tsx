import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
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

      <div className="flex flex-col gap-4 w-full h-full justify-between py-1  pt-2  space-y-4 text-[#4D4D4D]">
        <div className="flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-2 rounded-xl border border-primary p-5">
            <div className="flex justify-between items-center">
              <p className="font-light text-md text-[#4D4D4D]">보유 포인트</p>

              <p className="font-medium text-md ">+ 1000 P</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-light text-md text-[#4D4D4D]">
                전환 가능 포인트
              </p>

              <p className="font-medium text-md text-primary">+ 1000 P</p>
            </div>
          </div>
          <div className="전액 사용-semibold text-md   flex-col gap-12">
          <p className="">전환할 포인트</p>
          <div className="flex gap-3 my-2 text-primary">
            <Input />
            <Button className="bg-primary/10 border-none w-fit px-2" variant={"outline"}>
            전액 사용
            </Button>
          </div>


          </div>
          <div className="flex font-medium text-md flex-col gap-2">
          <p className="">전환할 네이버 아이디</p>
          <p className="">aaa123</p>
          </div>
        </div>

<div className="flex flex-col gap-3">
  <div className="flex flex-col bg-[#F5F5F5] w-full min-h-[213px] text-[#ADADAD] p-4 gap-3 text-[13px]">
  <p className="">유의사항</p>
  <p className="">유의사항 텍스트 영역</p>
    
    </div>

        <Button
          className=" text-md mx-5 flex items-center gap-1 py-5"
          variant={"default"}
          >
         
          포인트 전환하기
        </Button>
          </div>
      </div>
    </div>
  );
}
