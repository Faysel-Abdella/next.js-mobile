import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white relative py-6 flex flex-col justify-between items-center h-full">
      <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">알림 설정</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <div className="w-full h-full pt-5  space-y-4 flex flex-col text-[#4D4D4D]">
        <div className="px-4 flex flex-col gap-5">
          <div className="w-full flex justify-between">
            <div className="text-muted-foreground text-sm">
              이벤트 및 광고 수신 알림
            </div>
            <Switch className="data-[state=unchecked]:bg-[#ADADAD] data-[state=checked]:bg-primary" />
          </div>
          <Separator className="bg-[#F5F5F5]" />
          <div className="w-full flex justify-between">
            <div className="text-muted-foreground text-sm">눈치게임 알림</div>
            <Switch className="data-[state=unchecked]:bg-[#ADADAD] data-[state=checked]:bg-primary" />
          </div>
          <Separator className="bg-[#F5F5F5]" />
          <div className="w-full flex justify-between">
            <div className="text-muted-foreground text-sm">퀴즈 알림</div>
            <Switch className="data-[state=unchecked]:bg-[#ADADAD] data-[state=checked]:bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
