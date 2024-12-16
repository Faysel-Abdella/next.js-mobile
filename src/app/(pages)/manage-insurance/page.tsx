import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Page() {
  const products = [1, 2, 3, 4, 5, 6];
  return (
    <div className="relative flex flex-col">
      <nav className="w-full flex flex-col gap-4 py-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">내 보험 관리</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <ScrollArea className="w-full h-[calc(100vh-10rem)] relative overflow-y-auto">
        <div className="w-full px-4 space-y-4">
          <div className="flex flex-col gap-2">
            <div className="w-full px-2 py-4 rounded-2xl flex gap-4 items-center">
              <div className="h-[92px] aspect-square bg-[#FFD8D8] rounded-xl" />

              <div className="w-full flex flex-col gap-1 pe-4 items-start">
                <div className="text-sm">교보용종케어보험(무배당)</div>
                <div className="text-[10px] px-1 py-1 text-[#3B90F4] bg-[#3B90F41A] ">
                  신청 완료
                </div>
                <div className="text-[10px] text-muted-foreground/60">
                  홍길동(01011111234)
                </div>
              </div>
            </div>
            <Separator className="h-[0.2px]" />
            <div className="w-full px-2 py-4 rounded-2xl flex gap-4 items-center">
              <div className="h-[92px] aspect-square bg-[#FFD8D8] rounded-xl" />
              <div className="w-full flex flex-col gap-1 pe-4 items-start">
                <div className="text-sm">교보용종케어보험(무배당)</div>
                <div className="text-[10px] text-[#8268FD] bg-[#8268FD1A] p-1">
                  신청 완료
                </div>
                <div className="text-[10px] text-muted-foreground/60">
                  홍길동(01011111234)
                </div>
              </div>
            </div>
            <Separator className="h-[0.2px]" />
            <div className="w-full px-2 py-4 rounded-2xl   flex gap-4 items-center">
              <div className="h-[92px] aspect-square bg-[#FFD8D8] rounded-xl" />
              <div className="w-full flex flex-col gap-1 pe-4 items-start">
                <div className="text-sm">교보용종케어보험(무배당)</div>
                <div className="text-[10px] text-[#ADADAD] bg-[#F5F5F5] p-1">
                  신청 완료
                </div>
                <div className="text-[10px] text-muted-foreground/60">
                  홍길동(01011111234)
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollBar className="w-0.5" />
      <div className="w-full px-4 pt-2">
        <Button className="w-full py-7 rounded-2xl">확인</Button>
      </div>
      </ScrollArea>
    </div>
  );
}
