"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isFormValid, setIsFormValid] = useState(false);

  const background = isFormValid ? "bg-[#FF5E18]" : "bg-[#ADADAD]";

  return (
    <div className="relative py-6 flex flex-col justify-between items-center h-full">
      <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">회원가입</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <div className="w-full h-full pt-4 px-4 space-y-4">
        <div className="text-muted-foreground font-semibold">
          경품을 수령할 주소를 입력해주세요
        </div>
        <div className="w-full flex  gap-2">
          <Input
            placeholder="주소를 입력해주세요"
            type="text"
            className="h-10 w-[77.5%] "
            onChange={(e) => setIsFormValid(e.target.value.length > 3)}
          />
          <button className="bg-[#F5F5F5] text-[#ADADAD] px-2 rounded-md text-sm">
            주소 찾기
          </button>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Input
            placeholder="주소를 입력해주세요"
            type="text"
            className="h-10"
            onChange={(e) => setIsFormValid(e.target.value.length > 3)}
          />
        </div>
      </div>
      <div className="w-full px-4 mx-auto">
        <Button
          size={"lg"}
          variant={"muted"}
          className={cn(
            "w-full rounded-xl py-6",
            " text-white ",
            `${background} `
          )}
        >
          확인
        </Button>
      </div>
    </div>
  );
}
