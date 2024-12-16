"use client";

import { Icons } from "@/components/ui/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import {
  CustomAlert,
  CustomAlertTrigger,
  CustomAlertContent,
  CustomAlertAction,
  useAlert,
} from "@/components/custom-alert";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";


export default function Page() {
  return (
    
    <ScrollArea className="flex flex-wrap -mt-1 flex-col text-[#4D4D4D] h-screen bg-white">
      <CustomAlert>
      <nav className="py-6 px-4">
        <div className="w-full mx-auto flex justify-between items-center">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">마이페이지</span>
          </Link>
        </div>
      </nav>
      <Separator />
      <p className="text-lg px-4 pt-4">
        <span className="font-semibold">홍길동</span> 님 안녕하세요!
      </p>
      <div className="flex p-5 w-full  ">
        <div className="flex  bg-[#FFF8F5] rounded-xl items-center justify-center gap-11 p-6 w-full">
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex gap-1 items-center text-[16px] font-light">
              <Image
                alt="icon"
                src="/images/rounded-letter-p.svg"
                width={20}
                height={20}
                className="size-5"
              />
              포인트
            </div>
            <p className="font-medium text-primary text-xl">5,000P</p>
          </div>
          <span className="h-full w-[1px] bg-white"></span>
          <div className="flex flex-col items-center justify-center gap-1">
            <div className="flex gap-1 items-center text-[16px] font-light">
              <Image
                alt="icon"
                src="/images/star-mass.svg"
                width={20}
                height={20}
                className="w-6"
              />
              응모권
            </div>
            <p className="font-meCustomAlertActiondium text-primary text-xl">4장</p>
          </div>
        </div>
      </div>
      <div className="flex px-5 pb-5 flex-col space-y-5 font-light ">
        <p className="text-md">구매내역</p>
        <p className="text-md">내 보험 관리</p>
      </div>


      <CustomAlertTrigger alertId="first-alert">
      <p className="text-md px-5 text-[#4D4D4D]">소셜 계정 연동</p>
        </CustomAlertTrigger>

        <FirstAlert />
        <SecondAlert />

      <div className="flex p-5 flex-col space-y-5 font-light pb-10">
        <p className="text-md">알림 설정</p>
        <Separator />
        <div className="flex flex-col space-y-5 font-light">
          <p className="text-md">공지사항</p>
          <p className="text-md">FAQ</p>
          <p className="text-md">1:1 문의</p>
        </div>
        <Separator />
        <div className="flex flex-col space-y-5 font-light">
          <p className="text-md">이용약관</p>
          <p className="text-md">개인정보 처리방침</p>
        </div>
      </div>
      <footer className="absolute bottom-0 w-full py-6 px-4 bg-white">
        <div className="flex justify-center items-center space-x-6 text-[13px] text-[#ADADAD]">
          <p>로그아웃</p>
          <p>회원 탈퇴</p>
        </div>
      </footer>
    </CustomAlert>
    </ScrollArea>

  );
}







function FirstAlert() {
  const { openAlert } = useAlert()
  const [selectedButton, setSelectedButton] = useState(0);
  return (
     <CustomAlertContent alertId="first-alert" className="max-w-xs  flex flex-col justify-center gap-7 items-center w-full">
          <p className="text-center text-black">연동 방법 선택</p>
          <div className="flex items-center gap-5">
            <button
              onClick={() => {
                setSelectedButton(1);
              }}
              className={cn(
                "px-0 bg-transparent rounded-full relative",
                selectedButton === 1 && "border-4 border-primary "
              )}
            >
              {" "}
              <Image
                src={"/images/correct-icon.svg"}
                alt="point-history"
                width={23}
                height={23}
                className={cn(
                  "absolute -top-1 -right-1 size-[23px] hidden",
                  selectedButton === 1 && "block"
                )}
              />{" "}
              <Image
                src={"/images/media-m.svg"}
                alt="point-history"
                width={60}
                height={60}
                className="size-[60px] self-center"
              />
            </button>
            <button
              onClick={() => {
                setSelectedButton(2);
              }}
              className={cn(
                "px-0 bg-transparent rounded-full relative",
                selectedButton === 2 && "border-4 border-primary "
              )}
            >
              {" "}
              <Image
                src={"/images/correct-icon.svg"}
                alt="point-history"
                width={23}
                height={23}
                className={cn(
                  "absolute -top-1 -right-1 size-[23px] hidden",
                  selectedButton === 2 && "block"
                )}
              />{" "}
              <Image
                src={"/images/media-n.svg"}
                alt="point-history"
                width={60}
                height={60}
                className="size-[60px] self-center"
              />
            </button>
            <button
              onClick={() => {
                setSelectedButton(3);
              }}
              className={cn(
                "px-0 bg-transparent rounded-full relative",
                selectedButton === 3 && "border-4 border-primary "
              )}
            >
              {" "}
              <Image
                src={"/images/correct-icon.svg"}
                alt="point-history"
                width={23}
                height={23}
                className={cn(
                  "absolute -top-1 -right-1 size-[23px] hidden",
                  selectedButton === 3 && "block"
                )}
              />{" "}

              <Image
                src={"/images/media-a.svg"}
                alt="point-history"
                width={60}
                height={60}
                className="size-[60px] self-center"
              />
            </button>
          </div>
          <div className="flex mt-3 justify-center space-x-2.5 w-full">
            <CustomAlertAction className="bg-primary/10 text-primary w-full font-medium">
              취소
            </CustomAlertAction>
          
            <Button onClick={() => openAlert('secondary-alert')} className="w-full bg-primary text-white font-medium">
                  확인
                </Button>



          </div>
        </CustomAlertContent>
  )
}




function SecondAlert() {
  return (
    <CustomAlertContent alertId="secondary-alert" className="relative text-center mx-5 flex flex-col bg-white p-5 rounded-[12px] gap-[30px] text-[#4D4D4D] text-md font-light">
      <CustomAlertAction className="absolute bg-transparent right-5 h-fit top-3 size-[44px] text-[#A1A9A3]"><X /></CustomAlertAction>
      
      <p className="text-md">보험 가입 상태</p>
      <div className="flex flex-col gap-2.5 text-[13px]">
        <p className="text-start">신청 완료 : 가입 신청이 접수되어 TM 대기중인 상태입니다.</p><Separator className="bg-[#DCDCDC]"/>
        <p className="text-start">청약 완료 : 실제 보험 가입이 완료된 상태입니다.</p><Separator className="bg-[#DCDCDC]"/>
        <p className="text-start">고객 취소 : 고객이 데일리밥에서 가입 신청을 취소한 상태입니다.</p><Separator className="bg-[#DCDCDC]"/>
        <p className="text-start">고객TM취소 : 고객이 보험 가입 과정에서 취소의사를 밝히거나, 연락이 닿지 못해 취소된 상태입니다. </p><Separator className="bg-[#DCDCDC]"/>
        <p className="text-start">포인트부족취소 : 가입 과정에서 산정된 추가 필요 포인트만큼 고객이 포인트를 보유하고있지 않아 취소된 상태입니다. </p><Separator className="bg-[#DCDCDC]"/>
        <p className="text-start">청약철회 : 가입완료 이후 청약 철회한 상태입니다. </p><Separator className="bg-[#DCDCDC]"/>
        <p className="text-start">청약만료 : 가입완료 이후 서비스 내 만료 판단 기간이 지나 청약이 만료된 상태입니다.</p>
      </div>
    </CustomAlertContent>
  )
}