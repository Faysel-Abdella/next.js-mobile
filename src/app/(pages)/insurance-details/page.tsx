import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="bg-white relative py-6 flex flex-col   h-full">
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
          <p className=" text-[#ADADAD] text-[13px]">보험 가입 상태 <span className="rounded-full border px-1 font-semibold border-black/40 ml-1">?</span></p>
          <p className="text-md ">신청 완료</p>
        </div>


        <div className="flex flex-col gap-1.5">
          <p className=" text-[#ADADAD] text-[13px]">보험만기일(청약철회일)</p>
          <p className="text-md ">2029-01-01</p>
        </div>
      </div>
      <div className="flex h-full items-end w-full justify-center text-[#3B90F4]">
      <AlertDialog >
      <AlertDialogTrigger asChild>
        <Link href={""}>가입 취소</Link>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-xs justify-center items-center">
        <AlertDialogHeader className="flex justify-center gap-2">
          <Image src={'/images/exclamation-mark.svg'} alt="point-history" width={200} height={200} className="size-12 self-center"/>
          <AlertDialogTitle className="py-3">보험 가입이 취소됩니다</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2">
          <AlertDialogCancel className="bg-primary/10 text-primary w-full">취소</AlertDialogCancel>
          <AlertDialogAction className="w-full">확인</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
        {/* <Link href={""} className="text-md">가입 취소</Link> */}
      </div>
    </div>
  );
}
