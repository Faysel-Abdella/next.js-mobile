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
  CustomAlertCancel,
} from "@/components/custom-alert";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [selectedButton, setSelectedButton] = useState(0);
  const [selectedAlert, setSelectedAlert] = useState("main"); // Tracks which alert to show

  return (
    <ScrollArea className="flex flex-wrap -mt-1 flex-col text-[#4D4D4D] h-screen bg-white">
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
      {/* Other content */}
      <CustomAlert>
        {selectedAlert === "main" && (
          <>
            <CustomAlertTrigger>
              <p className="text-md px-5 text-[#4D4D4D]">소셜 계정 연동</p>
            </CustomAlertTrigger>
            <CustomAlertContent className="max-w-xs flex flex-col justify-center gap-7 items-center w-full">
              <p className="text-center text-black">연동 방법 선택</p>
              <div className="flex items-center gap-5">
                {/* Buttons to select social methods */}
                {[1, 2, 3].map((id) => (
                  <button
                    key={id}
                    onClick={() => setSelectedButton(id)}
                    className={cn(
                      "px-0 bg-transparent rounded-full relative",
                      selectedButton === id && "border-4 border-primary"
                    )}
                  >
                    <Image
                      src={`/images/media-${String.fromCharCode(96 + id)}.svg`}
                      alt={`media-${id}`}
                      width={60}
                      height={60}
                      className="size-[60px] self-center"
                    />
                  </button>
                ))}
              </div>
              <div className="flex mt-3 justify-center space-x-2.5 w-full">
                <CustomAlertCancel className="bg-primary/10 text-primary w-full font-medium">
                  취소
                </CustomAlertCancel>
                <Button
                  className="w-full bg-primary text-white font-medium"
                  onClick={() => setSelectedAlert("secondary")}
                >
                  확인
                </Button>
              </div>
            </CustomAlertContent>
          </>
        )}
      </CustomAlert>

      {/* Secondary Alert */}
      <CustomAlert>
        {selectedAlert === "secondary" && (
          <>
            <CustomAlertTrigger>
              {/* Hidden trigger */}
              <span className="hidden"></span>
            </CustomAlertTrigger>
            <CustomAlertContent className="max-w-xs flex flex-col justify-center gap-7 items-center w-full">
              {/* <p className="text-center text-black">새로운 알림: 연동 성공!</p> */}
              <div className="flex mt-3 justify-center space-x-2.5 w-full">
                <CustomAlertCancel
                  // onClick={() => setSelectedAlert("main")}
                  className="bg-primary/10 text-primary w-full font-medium"
                >
                  확인
                </CustomAlertCancel>
              </div>
            </CustomAlertContent>
          </>
        )}
      </CustomAlert>
    </ScrollArea>
  );
}
