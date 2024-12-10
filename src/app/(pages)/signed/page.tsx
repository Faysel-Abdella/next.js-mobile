import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <div className="pt-6 flex flex-col justify-between items-center h-full">
      <ScrollArea className="h-[calc(100vh-1px)] w-full relative overflow-y-auto">
        <div className="w-full px-4 py-2">
          <div className="mx-auto w-[80px] h-[130px] aspect-square flex flex-col gap-2 items-center justify-end">
            <Image
              src={"/images/logo2.png"}
              width={100}
              height={100}
              alt="logo2"
              className="w-full"
            />
          </div>
          <form className="w-full flex flex-col gap-2 py-10">
            <Input placeholder="아이디를 입력해 주세요" className="h-10" />
            <Input placeholder="비밀번호를 입력해 주세요" className="h-10" />
            <Button size={"lg"} className="w-full rounded-lg">
              로그인
            </Button>
            <div className="flex justify-center items-center gap-4 w-full text-center text-muted-foreground text-sm">
              <span>아이디 찾기</span>
              <span className="bg-black size-1" />
              <span>아이디 찾기</span>
            </div>
          </form>
          <Separator />
          <div className="w-full flex flex-col items-center justify-center gap-4 ">
            <div className="py-10 flex justify-center w-full">
              <div className="max-w-48 text-sm text-muted-foreground">
                데일리밥에 가입하지 않으셨다면, 간단히 가입후에 이용해 보세요!
              </div>
            </div>

            <div className="w-full flex items-center justify-center gap-4">
              <Link href={"/#"} className="rounded-full p-4 bg-yellow-400">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.2071 4.41666C23.5721 4.41666 29.5417 9.06936 29.5417 14.8103C29.5417 20.55 23.5721 25.2027 16.2083 25.2027C15.4751 25.2014 14.7427 25.1547 14.0153 25.063L8.41786 28.724C7.78167 29.0605 7.5569 29.0236 7.81849 28.1995L8.95119 23.529C5.29405 21.6751 2.875 18.4624 2.875 14.8103C2.875 9.07063 8.84198 4.41666 16.2071 4.41666Z"
                    fill="black"
                  />
                </svg>
              </Link>
              <Link href={"/#"} className="rounded-full p-4 bg-green-500">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5702 16.6116L12.1488 6H6V25.8347H12.4463V15.2231L19.8512 25.8347H26V6H19.5702V16.6116Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link href={"/#"} className="rounded-full p-4 bg-black">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.8473 26.0371C21.5408 27.3036 20.1143 27.1036 18.7412 26.5037C17.288 25.8904 15.9548 25.8638 14.4217 26.5037C12.5019 27.3303 11.4887 27.0903 10.3422 26.0371C3.83638 19.3313 4.79626 9.11923 12.182 8.74594C13.9818 8.83926 15.2349 9.73248 16.2881 9.81247C17.8613 9.49251 19.3678 8.57263 21.0475 8.69261C23.0606 8.85259 24.5804 9.65249 25.5803 11.0923C21.4208 13.5853 22.4074 19.0646 26.2202 20.5978C25.4603 22.5975 24.4738 24.5839 22.834 26.0504L22.8473 26.0371ZM16.1548 8.66595C15.9548 5.69299 18.3679 3.23997 21.1409 3C21.5275 6.43957 18.0213 8.99924 16.1548 8.66595Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <ScrollBar className="w-0.5" />
      </ScrollArea>
    </div>
  );
}
