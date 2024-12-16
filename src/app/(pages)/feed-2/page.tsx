"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  ArrowRightIcon,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  CustomDrawer,
  CustomDrawerContent,
  CustomDrawerTrigger,
} from "@/components/custom-drawer";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  const episodes = [
    { id: 1, number: 17 },
    { id: 2, number: 18 },
    { id: 3, number: 19 },
    { id: 4, number: 20 },
    { id: 5, number: 21 },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative  flex flex-col justify-start items-center h-full -mt-1">
      <CustomDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <nav className="w-full py-6 flex flex-col gap-4 pb-4 border-b-2">
          <div className="w-full px-4 mx-auto flex justify-between items-center ">
            <Link href={".."} className="flex items-center gap-4">
              <Icons.arrowLeft className="size-5" />
              <span className="text-lg">눈치 게임</span>
            </Link>
          </div>
        </nav>
        <ScrollArea className="h-full pb-48">
          {/* <Carousel className="w-full bg-[#E2E2E2]">
                    <CarouselContent className='bg-[#E2E2E2] '>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <CarouselItem key={index} className='relative'>
                                <div className='bg-[#E2E2E2] w-full aspect-video flex justify-center items-center'>
                                    <Image src={'/images/blome.png'} width={200} height={200} alt='product-thumbnail' className='object-cover' />
                                </div>
                                <span className='absolute right-2 bottom-2 bg-black/50 text-white px-2 rounded-full text-sm'>{index + 1}/{6}</span>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel> */}
          <div className="bg-[#F5F5F5] w-full flex justify-center items-center aspect-video">
            <Image
              src={"/images/blome.png"}
              width={150}
              height={100}
              alt="product-thumbnail"
              className="mt-5"
            />
          </div>

          <div className="flex flex-col items-start gap-2.5 p-5">
            <div className="flex items-center gap-2 w-full text-[10px] font-light">
              <p className=" bg-[#3B90F4]/10 text-[#3B90F4] w-fit py-0.5 px-1 rounded-md">
                참여 가능
              </p>
              <span className=" text-muted-foreground">
                41,533명이 참여했어요
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-medium">브리지스톤 B2 드라이버</p>
              <span className="text-[#8268FD] font-light text-[13px]">
                정상가 1,066,660원
              </span>
            </div>

            <div className="flex border-t justify-between w-full py-2">
              <p className="font-light text-[13px] text[#ADADAD]">
                응모 가능 가격
              </p>
              <p className="font-medium text[#4D4D4D]">40,000 ~ 90,000 원</p>
            </div>
          </div>
          <Image
            src={"/images/product-bill.png"}
            width={400}
            height={1200}
            alt="product-thumbnail"
            className="object-cover w-full"
          />
        </ScrollArea>

        <div className="absolute w-full bottom-14 left-0 px-4">
          <CustomDrawerTrigger asChild>
            <Button className="w-full py-6 rounded-2xl bg-[#FDFF99] hover:bg-[#FDFF99]">
              <div className="flex items-center w-full gap-2">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-16 "
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.31744 0.315244C8.82802 -0.105081 8.10502 -0.105081 7.6156 0.315243L7.14977 0.715303C6.83492 0.985703 6.4103 1.09036 6.00585 0.997255L5.40746 0.8595C4.77877 0.714767 4.13858 1.05076 3.90056 1.65039L3.67401 2.2211C3.52088 2.60685 3.19353 2.89685 2.79214 3.00237L2.19828 3.15847C1.57433 3.32249 1.16362 3.9175 1.23152 4.55906L1.29614 5.16969C1.33982 5.58241 1.18474 5.99132 0.878364 6.27129L0.425072 6.68549C-0.0511812 7.12068 -0.138329 7.83841 0.219937 8.37493L0.560931 8.88558C0.791408 9.23073 0.844123 9.66487 0.702943 10.0552L0.494064 10.6326C0.274606 11.2392 0.530985 11.9153 1.09755 12.2238L1.63679 12.5175C2.00127 12.716 2.2497 13.0759 2.30606 13.4871L2.38945 14.0955C2.47706 14.7346 3.01823 15.2141 3.6633 15.224L4.27726 15.2334C4.69224 15.2398 5.07948 15.4431 5.32047 15.781L5.67702 16.2809C6.05163 16.8061 6.75362 16.9791 7.32941 16.6882L7.87744 16.4112C8.24785 16.224 8.68519 16.224 9.0556 16.4112L9.60363 16.6882C10.1794 16.9791 10.8814 16.8061 11.256 16.2809L11.6126 15.781C11.8536 15.4431 12.2408 15.2398 12.6558 15.2334L13.2697 15.224C13.9148 15.2141 14.456 14.7346 14.5436 14.0955L14.627 13.4871C14.6833 13.0759 14.9318 12.716 15.2963 12.5175L15.8355 12.2238C16.4021 11.9153 16.6584 11.2392 16.439 10.6326L16.2301 10.0552C16.0889 9.66488 16.1416 9.23073 16.3721 8.88558L16.7131 8.37493C17.0714 7.83841 16.9842 7.12068 16.508 6.68549L16.0547 6.27129C15.7483 5.99132 15.5932 5.58241 15.6369 5.16969L15.7015 4.55906C15.7694 3.9175 15.3587 3.32249 14.7348 3.15847L14.1409 3.00237C13.7395 2.89685 13.4122 2.60685 13.259 2.2211L13.0325 1.65039C12.7945 1.05076 12.1543 0.714767 11.5256 0.8595L10.9272 0.997255C10.5227 1.09036 10.0981 0.985703 9.78327 0.715303L9.31744 0.315244ZM9.4278 5.61609C9.05927 4.87904 8.00747 4.87905 7.63894 5.61609L7.32456 6.24486C7.17503 6.54392 6.88594 6.74845 6.55416 6.78993L6.08172 6.84898C5.28149 6.94901 4.92274 7.90648 5.46022 8.50772L5.8613 8.9564C6.06428 9.18346 6.15272 9.49064 6.10155 9.79088L5.96851 10.5715C5.83091 11.3788 6.669 12.0002 7.4015 11.6339L8.08615 11.2916C8.36768 11.1508 8.69905 11.1508 8.98058 11.2916L9.66843 11.6355C10.4003 12.0015 11.238 11.3814 11.1017 10.5745L10.969 9.78937C10.9185 9.48999 11.0066 9.18384 11.2087 8.95724L11.6101 8.50717C12.1465 7.90569 11.7875 6.94929 10.9878 6.84933L10.5126 6.78993C10.1808 6.74845 9.89171 6.54392 9.74218 6.24486L9.4278 5.61609Z"
                    fill="black"
                  />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-black text-sm">
                    나의 참여 현황 보기
                  </span>
                  <span className="text-muted-foreground text-[10px]">
                    나의 도전 결과는?
                  </span>
                </div>
              </div>
              <ArrowRightIcon className="text-black" />
            </Button>
          </CustomDrawerTrigger>
        </div>

        <CustomDrawerContent className="rounded-t-3xl pt-4 pb-6 px-4 space-y-4 ">
          <div className="w-full flex justify-between">
            <p className="font-medium text-lg">눈치게임 참여</p>
            <button
              onClick={() => setIsDrawerOpen(false)}
              className="bg-transparent opacity-65"
            >
              <X />
            </button>
          </div>

          <Separator className="bg-[#F5F5F5]" />

          <div className="flex items-center gap-2.5 justify-between  text-black">
            <div className="flex items-center gap-3 rounded-[10px] bg-[#F5F5F5] w-full py-2 h-fit px-4 justify-between">
              <div className="flex gap-1 text-[#4D4D4D] items-center text-md font-light">
                <Image
                  alt="icon"
                  src="/images/star-mass.svg"
                  width={20}
                  height={17}
                  className="w-5"
                />
                보유 응모권
              </div>

              <p className="px-2 font-medium text-[#4D4D4D]">3장</p>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-[#FFEFE8] text-primary p-2 py-2.5 h-full">
                충전하기
              </Button>
            </div>
          </div>

          <div className="text-center text-foreground space-y-2">
            {/* <div className='text-sm'>정해진 가격 범위 내에서 가격을 제시하세요!</div> */}
            <div className="text-[#ADADAD] py-2">
              도전 가격 범위{" "}
              <span className="font-semibold ml-2 text-[#4D4D4D]">
                37,500 ~ 75,000원
              </span>
            </div>
            <div className="text-[13] flex border border-[##ADADAD] rounded-[6px] py-2.5 px-3">
              도전할 가격을 입력해 주세요
            </div>
          </div>
          <div className="flex pt-6">
            <Button className="bg-primary py-6 text-white w-full">
              참여하기
            </Button>
          </div>

        </CustomDrawerContent>

        <div className="absolute w-full bottom-0 space-y-2">
          <Button className="w-full py-6 rounded-none justify-between hover:bg-primary">
            <div>
              <span>이벤트 종료까지</span>
            </div>
            <span>3일 7시간 13분 27초</span>
          </Button>
        </div>
      </CustomDrawer>
    </div>
  );
}
