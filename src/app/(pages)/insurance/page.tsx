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
  const products = [1, 2, 3, 4, 5, 6];
  return (
    <div className="h-full pt-4">
      <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
          </Link>
        </div>
        <Separator />
      </nav>
      <ScrollArea className="h-[calc(100vh-9rem)] relative overflow-y-auto">
        <Carousel className="">
          <CarouselContent className="w-[400px] px-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index}>
                <div key={index} className="">
                  <div className="p-8 flex justify-center">
                    <div className="bg-[#FFE9E9] h-[160px] w-[160px] rounded-xl" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Separator className="h-1 bg-border/40" />
        <div className="w-full h-full px-4 mt-2">
          <div className="flex flex-col py-2 space-y-1">
            <div className="text-[#ADADAD]">신청보험명</div>
            <div className="text-muted-foreground">
              교보용종케어보험(무배당)[D]
            </div>
          </div>
          <div className="flex flex-col py-2 space-y-1">
            <div className="text-[#ADADAD]">가입자명</div>
            <div className="text-muted-foreground">홍길동</div>
          </div>
          <div className="flex flex-col py-2 space-y-1">
            <div className="text-[#ADADAD]">연락처</div>
            <div className="text-muted-foreground">010-1111-1111</div>
          </div>
          <div className="flex flex-col py-2 space-y-1">
            <div className="text-[#ADADAD]">보험 가입 상태</div>
            <div className="text-muted-foreground flex items-center gap-1">
              신청 완료
              <Image width={10} height={10} alt="img" src="/images/mark.png" />
            </div>
          </div>
          <div className="flex flex-col py-2 space-y-1">
            <div className="text-[#ADADAD]">보험만기일(청약 철회일)</div>
            <div className="text-muted-foreground">2029-01-01</div>
          </div>
          {/* <div className="flex flex-col py-2 space-y-1">
            <div className="">가입 상태</div>
            <div className="text-muted-foreground">가입 중</div>
          </div> */}
          <Separator className="h-0 bg-border/40" />
        </div>
        <ScrollBar className="w-0.5" />
      </ScrollArea>
      <div className="w-full px-4 pt-2 text-center">
        <p className="underline text-[#3B90F4]">가입 취소</p>
      </div>
    </div>
  );
}
