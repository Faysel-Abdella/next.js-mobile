import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  ScrollableTabsList,
  ScrollableTabsTrigger,
} from "@/components/ui/scrollable-tabs";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const episodes = [
    { id: 1, number: 17 },
    { id: 2, number: 18 },
    { id: 3, number: 19 },
    { id: 4, number: 20 },
    { id: 5, number: 21 },
  ];
  return (
    <div className="relative py-6 flex space-y-0 flex-col justify-between items-center h-full">
      <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">눈치 게임</span>
          </Link>
        </div>
      </nav>
      <div className="w-full h-full pt-4 ">
        <Tabs defaultValue="18" className="">
          <ScrollableTabsList className="bg-[#F5F5F5] py-2 space-x-2 ">
            {episodes.map((episode, index) => (
              <ScrollableTabsTrigger
                key={episode.id}
                index={index}
                value={episode.number.toString()}
                className="w-fit  rounded-full flex items-center justify-center  px-5 h-10   data-[active=true]:font-medium data-[active=true]:h text-[#ADADAD] data-[active=true]:text-white data-[active=true]:bg-[#4D4D4D]"
              >
                <span className="text-md">{episode.number}회</span>
              </ScrollableTabsTrigger>
            ))}
          </ScrollableTabsList>
          <TabsContent value={(18).toString()} className="mt-0 py-0">
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <div className="space-y-4 pb-4">
                <div className="relative w-full text-white bg-gradient-to-b from-[#FF6766] to-[#F8954D] flex flex-col p-4 py-6 space-y-5">
                  <Image
                    alt="icon"
                    src="/images/party-popper.svg"
                    width={65}
                    height={65}
                    className="absolute size-20 top-7 right-3"
                  />

                  <p className="text-xl font-medium">게임 종료</p>

                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-light">응모기간</p>
                      <p className="text-md font-medium">
                        12월 1일 (일) ~ 12월 7일 (토)
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-light">결과 발표</p>
                      <p className="text-md font-medium">
                        12월 9일 (월) 오전 11시 예정
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center py-2.5 px-4 justify-between bg-white text-black rounded-xl">
                    <div className="flex items-center gap-3">
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
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="px-2 font-medium border-r h-fit border-[#DCDCDC] text-[#4D4D4D]">
                        3장
                      </p>
                      <Button className="bg-[#FFEFE8] text-primary p-2">
                        충전하기
                      </Button>
                    </div>
                  </div>
                </div>

                {/* {First Card */}
                <div className="flex flex-col mx-5 p-5 rounded-xl bg-white shadow-xl backdrop-blur-xl border border-black/5 space-y-5">
                  <div className="flex relative bg-[#F5F5F5] rounded-md ">
                    <div className="absolute flex items-center rounded-lg justify-center w-full h-full bg-black/70">
                      <p className="text-white font-medium">
                        종료된 이벤트 입니다
                      </p>
                    </div>
                    <Image
                      src={"/images/blome.png"}
                      width={131}
                      height={175}
                      alt="product-thumbnail"
                      className="aspect-video object-contain  w-full rounded-md pt-3 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5 ">
                    <div className="flex items-center gap-2 w-full text-[10px] font-light">
                      <p className=" bg-[#F5F5F5] text-[#ADADAD] w-fit py-0.5 px-1 rounded-md">
                        신청 완료
                      </p>
                      <span className=" text-muted-foreground">
                        41,533명 참여중
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
                      <p className="font-medium text[#4D4D4D]">
                        40,000 ~ 90,000 원
                      </p>
                    </div>

                    <Button className="bg-[#FFEFE8] text-primary p-2 w-full">
                      신청 결과 확인하기
                    </Button>
                  </div>
                </div>

                {/* {First Card */}
                <div className="flex flex-col mx-5 mb-10 p-5 rounded-xl bg-white shadow-xl backdrop-blur-xl border border-black/5 space-y-5">
                  <div className="flex relative bg-[#F5F5F5] rounded-md ">
                    <div className="absolute flex items-center rounded-lg justify-center w-full h-full bg-black/70">
                      <p className="text-white font-medium">
                        종료된 이벤트 입니다
                      </p>
                    </div>
                    <Image
                      src={"/images/blome.png"}
                      width={131}
                      height={175}
                      alt="product-thumbnail"
                      className="aspect-video object-contain  w-full rounded-md pt-3 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5 ">
                    <div className="flex items-center gap-2 w-full text-[10px] font-light">
                      <p className=" bg-[#F5F5F5] text-[#ADADAD] w-fit py-0.5 px-1 rounded-md">
                        신청 완료
                      </p>
                      <span className=" text-muted-foreground">
                        41,533명 참여중
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
                      <p className="font-medium text[#4D4D4D]">
                        40,000 ~ 90,000 원
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </TabsContent>
          <TabsContent value={(19).toString()}>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <div className="space-y-4 pb-4">
                <div className="relative w-full text-white bg-gradient-to-b from-[#FF6766] to-[#F8954D] flex flex-col p-4 py-6 space-y-5">
                  <Image
                    alt="icon"
                    src="/images/eyes.svg"
                    width={65}
                    height={65}
                    className="absolute size-20 top-7 right-3"
                  />

                  <p className="text-xl font-medium">눈치게임 진행 중!</p>

                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-light">응모기간</p>
                      <p className="text-md font-medium">
                        12월 1일 (일) ~ 12월 7일 (토)
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-light">결과 발표</p>
                      <p className="text-md font-medium">
                        12월 9일 (월) 오전 11시 예정
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center py-2.5 px-4 justify-between bg-white text-black rounded-xl">
                    <div className="flex items-center gap-3">
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
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="px-2 font-medium border-r h-fit border-[#DCDCDC] text-[#4D4D4D]">
                        3장
                      </p>
                      <Button className="bg-[#FFEFE8] text-primary p-2">
                        충전하기
                      </Button>
                    </div>
                  </div>
                </div>

                {/* {First Card */}
                <div className="flex flex-col mx-5 p-5 rounded-xl bg-white shadow-xl backdrop-blur-xl border border-black/5 space-y-5">
                  <div className="flex relative bg-[#F5F5F5] rounded-md ">
                    <Image
                      src={"/images/blome.png"}
                      width={131}
                      height={175}
                      alt="product-thumbnail"
                      className="aspect-video object-contain  w-full rounded-md pt-3 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5 ">
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
                      <p className="font-medium text[#4D4D4D]">
                        40,000 ~ 90,000 원
                      </p>
                    </div>
                  </div>
                </div>

                {/* {Second Card */}
                <div className="flex flex-col mx-5 p-5 rounded-xl bg-white shadow-xl backdrop-blur-xl border border-black/5 space-y-5">
                  <div className="flex relative bg-[#F5F5F5] rounded-md ">
                    <Image
                      src={"/images/blome.png"}
                      width={131}
                      height={175}
                      alt="product-thumbnail"
                      className="aspect-video object-contain  w-full rounded-md pt-3 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5 ">
                    <div className="flex items-center gap-2 w-full text-[10px] font-light">
                      <p className=" bg-[###F5F5F5] text-[#ADADAD] w-fit py-0.5 px-1 rounded-md">
                        참여 완료
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
                      <p className="font-medium text[#4D4D4D]">
                        40,000 ~ 90,000 원
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </TabsContent>
          <TabsContent value={(20).toString()}>
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <div className="space-y-4 pb-4">
                <div className="relative w-full text-white bg-gradient-to-b from-[#FF6766] to-[#F8954D] flex flex-col p-4 py-6 space-y-5">
                  <Image
                    alt="icon"
                    src="/images/gift.svg"
                    width={65}
                    height={65}
                    className="absolute size-20 top-7 right-3"
                  />

                  <p className="text-xl font-medium">게임 종료</p>

                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-light">응모기간</p>
                      <p className="text-md font-medium">
                        12월 1일 (일) ~ 12월 7일 (토)
                      </p>
                    </div>

                    <div className="flex items-center space-x-4">
                      <p className="text-sm font-light">결과 발표</p>
                      <p className="text-md font-medium">
                        12월 9일 (월) 오전 11시 예정
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center py-2.5 px-4 justify-between bg-white text-black rounded-xl">
                    <div className="flex items-center gap-3">
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
                    </div>

                    <div className="flex items-center gap-4">
                      <p className="px-2 font-medium border-r h-fit border-[#DCDCDC] text-[#4D4D4D]">
                        3장
                      </p>
                      <Button className="bg-[#FFEFE8] text-primary p-2">
                        충전하기
                      </Button>
                    </div>
                  </div>
                </div>

                {/* {First Card */}
                <div className="flex flex-col mx-5 p-5 rounded-xl bg-white shadow-xl backdrop-blur-xl border border-black/5 space-y-5">
                  <div className="flex relative bg-[#F5F5F5] rounded-md ">
                    <div className="absolute flex items-center rounded-lg justify-center w-full h-full bg-black/70">
                      <p className="text-white font-medium">
                        12월 1일 오픈 예졍
                      </p>
                    </div>
                    <Image
                      src={"/images/blome.png"}
                      width={131}
                      height={175}
                      alt="product-thumbnail"
                      className="aspect-video object-contain  w-full rounded-md pt-3 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5 ">
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
                      <p className="font-medium text[#4D4D4D]">
                        40,000 ~ 90,000 원
                      </p>
                    </div>

                    <Button className="bg-[#FFEFE8] text-primary p-2 w-full flex items-center gap-2.5">
                      <Image
                        src={"/images/bell-icon.svg"}
                        width={20}
                        height={20}
                        alt="icon"
                        className="size-5"
                      />
                      신청 결과 확인하기
                    </Button>
                  </div>
                </div>

                {/* Second Card */}
                <div className="flex flex-col mx-5 mb-10 p-5 rounded-xl bg-white shadow-xl backdrop-blur-xl border border-black/5 space-y-5">
                  <div className="flex relative bg-[#F5F5F5] rounded-md ">
                    <div className="absolute flex items-center rounded-lg justify-center w-full h-full bg-black/70">
                      <p className="text-white font-medium">
                        12월 1일 오픈 예졍
                      </p>
                    </div>
                    <Image
                      src={"/images/blome.png"}
                      width={131}
                      height={175}
                      alt="product-thumbnail"
                      className="aspect-video object-contain  w-full rounded-md pt-3 "
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2.5 ">
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
                      <p className="font-medium text[#4D4D4D]">
                        40,000 ~ 90,000 원
                      </p>
                    </div>
                    <Button className="bg-[#FFEFE8] text-primary p-2 w-full flex items-center gap-2.5">
                      <Image
                        src={"/images/bell-icon.svg"}
                        width={20}
                        height={20}
                        alt="icon"
                        className="size-5"
                      />
                      신청 결과 확인하기
                    </Button>
                  </div>
                </div>
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
