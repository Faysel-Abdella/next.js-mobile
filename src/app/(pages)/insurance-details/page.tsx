"use client"

import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CustomAlert, CustomAlertTrigger, CustomAlertContent, CustomAlertAction, useAlert } from '@/components/custom-alert'
import { useState } from "react";
import { X } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";


export default function Page() {
  return (
    <div className="bg-white relative  flex flex-col   h-screen">
    <CustomAlert>
     <ScrollArea className="py-6">

     <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex flex-col ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
          </Link>

          <div className="flex w-full justify-center mt-9">
            <div className="flex size-40 aspect-square rounded-lg bg-[#FFE9E9]"></div>
          </div>
        </div>
        <Separator className="h-1 bg-[#F5F5F5]" />
      </nav>
      <div className="flex flex-col gap-5 p-5 text-[#4D4D4D] font-light">
        <div className="flex flex-col gap-1.5">
          <p className=" text-[#ADADAD] text-[13px]">신청 보험명</p>
          <p className="text-md ">교보용종케어보험(무배당)</p>
        </div>
        
        <div className="flex flex-col gap-1.5">
          <p className=" text-[#ADADAD] text-[13px]">가입자명</p>
          <p className="text-md ">홍길동</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className=" text-[#ADADAD] text-[13px]">연락처</p>
          <p className="text-md ">010-1111-2222</p>
        </div>


        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1"><p className=" text-[#ADADAD] text-[13px]">보험 가입 상태 </p><Image src={"/images/question-mark.svg"} width={20} height={20} alt="icon" className="size-3.5" /></div>
          <p className="text-md ">신청 완료</p>
        </div>

        

        <div className="flex flex-col gap-1.5">
          <p className=" text-[#ADADAD] text-[13px]">보험만기일(청약철회일)</p>
          <p className="text-md ">2029-01-01</p>
        </div>
      </div>
      <div className=" 2xl:hidden mx-auto px-28 w-full justify-center  bottom-0">
      <CustomAlertTrigger asChild alertId="first-alert">
        <Button className="flex w-full outline-0 shadow-none underline h-fit bg-transparent text-center text-blue-500">
      소셜 계정 연동
        </Button>
        </CustomAlertTrigger>
      </div>

      <div className="absolute hidden 2xl:block mx-auto px-28 py-4 w-full justify-center  bottom-0">
      <CustomAlertTrigger asChild alertId="first-alert">
        <Button className="flex w-full outline-0 shadow-none underline h-fit bg-transparent text-center text-blue-500">
      소셜 계정 연동
        </Button>
        </CustomAlertTrigger>
      </div>
   
      <FirstAlert />
     </ScrollArea>
    </CustomAlert>

    </div>
  );
}


function FirstAlert() {
  const { openAlert } = useAlert()
  return (
       <CustomAlertContent alertId="first-alert" className="max-w-xs  flex flex-col justify-center gap-7 items-center w-full">
          <Image src={'/images/exclamation-mark.svg'} alt="point-history" width={200} height={200} className="size-12 self-center"/>
            <p className="text-center  text-black">보험 가입이 취소됩니다</p>
            <div className="flex justify-center space-x-2.5 w-full">
              <CustomAlertAction className="bg-primary/10 text-primary w-full font-medium">취소</CustomAlertAction>
              <CustomAlertAction className="w-full bg-primary text-white font-medium">확인</CustomAlertAction>
            </div>
        </CustomAlertContent>
  )
}








{/* <CustomAlert >
          <CustomAlertTrigger asChild>
            <Link href="" className="border-b border-[#3B90F4]">가입 취소</Link>
          </CustomAlertTrigger>
          <CustomAlertContent className="max-w-xs  flex flex-col justify-center gap-7 items-center w-full">
          <Image src={'/images/exclamation-mark.svg'} alt="point-history" width={200} height={200} className="size-12 self-center"/>
            <p className="text-center  text-black">보험 가입이 취소됩니다</p>
            <div className="flex justify-center space-x-2.5 w-full">
              <CustomAlertAction className="bg-primary/10 text-primary w-full font-medium">취소</CustomAlertAction>
              <CustomAlertAction className="w-full bg-primary text-white font-medium">확인</CustomAlertAction>
            </div>
          </CustomAlertContent>
        </CustomAlert> */}