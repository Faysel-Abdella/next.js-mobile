"use client";

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
import {
  CustomDrawer,
  CustomDrawerTrigger,
  CustomDrawerContent,
} from "@/components/custom-drawer";
import { useState } from "react";
import { X } from "lucide-react";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative flex flex-col h-full -mt-1">
      <CustomDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <nav className="w-full flex flex-col gap-4 pt-4">
          <div className="w-full px-4 mx-auto flex justify-between items-center ">
            <Link href={".."} className="flex items-center gap-4">
              <Icons.arrowLeft className="size-5" />
            </Link>
          </div>
          <Separator />
        </nav>
        <ScrollArea className="h-screen relative overflow-y-auto">
          <div className="w-full aspect-square flex flex-col gap-2 justify-center items-center text-center  py-2">
            <Carousel className="">
              <CarouselContent className="w-[400px] px-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div
                      key={index}
                      className="w-full flex justify-center py-4"
                    >
                      <Image
                        src="/images/Starbucks.png"
                        alt="Starbucks"
                        width={280}
                        height={280}
                        className="h-[216px] w-[216px] object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
                <CarouselItem className="max-w-6" />
              </CarouselContent>
              <div>
                <div>아이스 아메리카노</div>
                <span className="text-[#ADADAD]">스타벅스</span>
              </div>
              <div className="flex gap-1 justify-center items-center">
                <Icons.currency fill={"#F5A227"} className="size-6" />
                <div className="">300P</div>
              </div>
            </Carousel>
          </div>

          <div className="w-full pb-32 h-full px-4 space-y-4 text-sm text-muted-foreground bg-[#F5F5F5] py-4">
            <div>
              <h2 className="font-semibold mb-2">▶ 사용장소</h2>
              <p>- 롯데리아 국내 전 매장</p>
              <p className="text-xs">
                (단, 공항, 리조트 및 휴게소, 위락시설 주변매장 등 특수매장 및
                일부점포 제외)
              </p>
              <p>- 배달, 픽업사용 불가</p>
            </div>

            <div>
              <h2 className="font-semibold mb-2">▶ 유의사항</h2>
              <ol className="list-decimal list-inside space-y-1">
                <li>
                  본 상품은 매장 재고 상황에 따라 동일상품으로 교환이 불가능할
                  수 있습니다.
                </li>
                <li>해당 상품의 타 상품으로 교환 불가 합니다.</li>
                <li>
                  본 쿠폰 교환 시 L.POINT 적립 및 현금영수증 발행 가능 합니다.
                </li>
                <li>타 행사와 중복적용은 브랜드사 정책에 따릅니다.</li>
                <li>유효기간 이내 사용 가능합니다.</li>
                <li>매장 방문 주문 시에만 사용 가능 합니다.</li>
              </ol>
            </div>
          
          
          </div>
          <Button className="fixed w-full max-w-[354px] max-h-11 bottom-4 mx-4 py-6 text-lg">
            구매하기
          </Button>
          <CustomDrawerTrigger asChild>
            <Button className="fixed w-full max-w-[354px] max-h-11 bottom-4 mx-4 py-6 text-lg">
              구매하기
            </Button>
          </CustomDrawerTrigger>
          <ScrollBar className="w-0.5" />
        </ScrollArea>
        <CustomDrawerContent className="relative px-5 py-8  flex flex-col gap-4 font-medium">
        <div onClick={() => setIsDrawerOpen(false)} className="hover:cursor-pointer absolute top-4 right-5 opacity-35 size-6 bg-transparent text-black border-0">
        <X />
          </div>
          <div className="mt-5 flex items-center w-full justify-between">
            <div className="flex flex-col">
              <p className="text-[13px] opacity-85">[스타벅스]</p>
              <p className="text-md">아이스 아메리카노</p>
            </div>
            <div className="flex gap-1 justify-center items-center">
              <Icons.currency fill={"#F5A227"} className="size-6" />
              <div className="text-lg">300P</div>
            </div>
          </div>

          <Separator className="bg-[#F5F5F5]"/>


          <div className="flex items-center w-full justify-between">
              <p className="text-md">보유 포인트</p>
            <div className="flex gap-1 justify-center items-center">
              <Icons.currency fill={"#F5A227"} className="size-6" />
              <div className="text-lg">300P</div>
            </div>
          </div>

          <div className="flex items-center w-full justify-between">
              <p className="text-md">부족한 포인트</p>
            <div className="flex gap-1 justify-center items-center">
              <Icons.currency fill={"#F5A227"} className="size-6" />
              <div className="text-lg">300P</div>
            </div>
          </div>


          <div className="flex w-full gap-2.5 font-medium">

          <Button onClick={() => setIsDrawerOpen(false)} className="w-1/3 h-11 bg-primary/10 text-primary">
          취소
          </Button>
          <Button className="bg-primary text-white w-2/3 h-11">포인트 모으러 가기</Button>
          </div>
        </CustomDrawerContent>
      </CustomDrawer>
    </div>
  );
}
