import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Icons } from "@/components/ui/icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative flex flex-col h-full">
      <nav className="w-full flex flex-col gap-4 pt-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            구매하기
          </Link>
        </div>
        <Separator />
      </nav>
      <ScrollArea className="h-screen relative overflow-y-auto bg-[#F5F5F5] flex-col justify-between items-stretch gap-4">
        <div className="flex w-full p-4 flex-col">
          <div className="flex border-b-[2px] border-dashed bg-white p-4 rounded-[20px] items-center justify-center">
            <div className="flex flex-col gap-4 pt-2 items-center justify-center">
              <Image
                src={"/images/completed.svg"}
                alt="point-history"
                width={200}
                height={200}
                className="size-[50px]"
              />
              <p className=" text-md font-medium">결제 성공</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-white p-5 justify-center items-center rounded-[20px]">
            <div className="flex justify-center p-4">
              <Image
                src="/images/Starbucks.png"
                alt="Starbucks"
                width={280}
                height={280}
                className="w-[227px] "
              />
            </div>

            <div className="flex flex-col gap-2.5 w-full">
                <div className="mt-5 flex items-center w-full justify-between">
                        <p className="text-md text-[#ADADAD]">구매 상품</p>
                        <p className="text-md text-[#4D4D4D] font-light">아이스 아메리카노</p>
                </div>

                <div className=" flex items-center w-full justify-between">
                        <p className="text-md text-[#ADADAD]">사용처</p>
                        <p className="text-md text-[#4D4D4D] font-light">스타벅스</p>
                </div>

                <div className=" flex items-center w-full justify-between">
                        <p className="text-md text-[#ADADAD]">결제일시</p>
                        <p className="text-md text-[#4D4D4D] font-light">2024-12-01 10:30:50</p>
                </div>
                <Separator className="bg-[#F5F5F5]"/>


                <div className=" flex items-center w-full justify-between">
                        <p className="text-md text-[#ADADAD]">구매 포인트</p>
                        <p className="text-md text-[#4D4D4D] font-light">10,000 P</p>
                </div>

                <div className=" flex items-center w-full justify-between">
                        <p className="text-md text-[#ADADAD]">할인</p>
                        <p className="text-md text-[#ADADAD] font-light">-2,000 P</p>
                </div>

                <div className=" flex items-center w-full justify-between">
                        <p className="text-md text-[#ADADAD]">지불 포인트</p>
                        <p className="text-md text-primary font-light">8,000 P</p>
                </div>
            </div>

          </div>
        </div>



        <ScrollBar className="w-0.5" />
      </ScrollArea>
      <footer className="p-4 bg-[#F5F5F5]">
      <Button className="w-full py-5  bg-primary text-white">
      구매 내역 보기
        </Button>

      </footer>
    </div>
  );
}
