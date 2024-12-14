import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-white relative py-6 flex flex-col justify-between items-center h-full">
      <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">응모권 내역</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <div className="w-full h-full pt-2  space-y-4 flex flex-col text-[#4D4D4D]">
          <div className="flex items-center justify-between px-5 py-4  border-b-[5px] border-[#F5F5F5]">

          <div className="flex gap-1 items-center text-md font-semibold">
              {/* <span className="bg-red-500 rounded-full aspect-square p-1 h-6">P</span> */}
              <Image
                alt="icon"
                src="/images/star-mass.svg"
                width={20}
                height={20}
                className="w-6"
              />
              보유 응모권
            </div>
          <p className="font-semibold text-md">4장</p>
          </div>
        <div className="flex pt-3 px-5">

        <div className="flex w-full h-24 bg-[#FCC6C6] rounded-xl"></div>
        </div>
      </div>
     
    </div>
  );
}
