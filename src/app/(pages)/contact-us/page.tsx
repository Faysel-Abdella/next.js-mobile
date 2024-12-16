"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Page() {
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [isContentValid, setIsContentValid] = useState(false);

  const background =
    isTitleValid && isContentValid ? "bg-[#FF5E18]" : "bg-[#ADADAD]";

  return (
    <ScrollArea className="relative flex flex-col h-screen">
    
      <nav className="w-full flex flex-col gap-4 py-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">문의하기</span>
          </Link>
        </div>
      </nav>

      <div className="w-full h-full pt-2 px-4 mt-4 space-y-4">
        <Tabs defaultValue="tab1" className="h-full">
          <TabsList className="w-full bg-transparent mx-4 p-0 gap-2">
            <TabsTrigger
              value="tab1"
              className="w-full py-4 bg-transparent px-0 rounded-none border-white border-b-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-black"
            >
              문의하기
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              className="w-full py-4 bg-transparent px-0 rounded-none border-white border-b-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-black"
            >
              내역 확인
            </TabsTrigger>
          </TabsList>
          <Separator className="mt-4" />
          <ScrollArea className="w-full h-[calc(100vh-13rem)] relative overflow-y-auto">
            <TabsContent value="tab1" className="h-full">
              <form className="w-full mx-auto space-y-4">
                <div className="space-y-2">
                  <label htmlFor="제목">제목</label>
                  <div className="mx-3">
                    <Input
                      id="제목"
                      placeholder="제목 입력"
                      className=" rounded-xl px-2"
                      onChange={(e) =>
                        setIsTitleValid(e.target.value.length > 3)
                      }
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="문의 내용">문의 내용</label>
                  <div className="mx-3">
                    <Textarea
                      id="문의 내용"
                      rows={8}
                      placeholder="문의 내용"
                      className="h-40 rounded-xl px-2"
                      onChange={(e) =>
                        setIsContentValid(e.target.value.length > 3)
                      }
                    />
                  </div>
                </div>
                <div className="">
                  <div className="bg-[#F5F6F8] w-32 aspect-square rounded-lg flex flex-col justify-center items-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-12"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.28571 1H14.7143C15.3205 1 15.9019 1.24082 16.3305 1.66947C16.7592 2.09812 17 2.67951 17 3.28571V14.7143C17 15.3205 16.7592 15.9019 16.3305 16.3305C15.9019 16.7592 15.3205 17 14.7143 17H3.28571C2.67951 17 2.09812 16.7592 1.66947 16.3305C1.24082 15.9019 1 15.3205 1 14.7143V3.28571C1 2.67951 1.24082 2.09812 1.66947 1.66947C2.09812 1.24082 2.67951 1 3.28571 1Z"
                        stroke="#A1A9A3"
                        strokeWidth="1.14286"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 12.4282L13.5714 8.99958L10.1429 12.411M14.7143 16.9996L4.42857 6.71387L1 10.1424"
                        stroke="#A1A9A3"
                        strokeWidth="1.14286"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.0022 6.14314C13.6334 6.14314 14.1451 5.63146 14.1451 5.00028C14.1451 4.3691 13.6334 3.85742 13.0022 3.85742C12.371 3.85742 11.8594 4.3691 11.8594 5.00028C11.8594 5.63146 12.371 6.14314 13.0022 6.14314Z"
                        fill="#A1A9A3"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">사진</span>
                  </div>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="tab2" className="h-full space-y-8">
              <Tabs defaultValue="va1" className="h-full">
                <TabsList>
                  <TabsTrigger value="va1">page1</TabsTrigger>
                  <TabsTrigger value="va2">page2</TabsTrigger>
                  <TabsTrigger value="va3">page3</TabsTrigger>
                  <TabsTrigger value="va4">page4</TabsTrigger>
                </TabsList>
                <TabsContent value="va1" className="h-full">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <div>문의하신 내역이 없습니다</div>
                  </div>
                </TabsContent>
                <TabsContent value="va2" className="h-full">
                  <div className="h-fit flex flex-col divide-y">
                    <div className="flex justify-between items-center ">
                      <div className="space-y-1 py-2">
                        <div className="flex items-center gap-4">
                          <span className="bg-[#F5F6F8] py-1 px-2 rounded-lg text-[10px]">
                            대기중
                          </span>
                          <span className="text-sm">
                            문의제목 텍스트 텍스트 텍스트
                          </span>
                        </div>
                        <div className="text-muted-foreground text-[12px]">
                          2024.08.01
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center ">
                      <div className="space-y-1 py-2">
                        <div className="flex items-center gap-4">
                          <span className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-lg text-[10px]">
                            대기중
                          </span>
                          <span className="text-sm">
                            문의제목 텍스트 텍스트 텍스트
                          </span>
                        </div>
                        <div className="text-muted-foreground text-[12px]">
                          2024.08.01
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="va3" className="h-full">
                  <div className="h-fit flex flex-col divide-y">
                    <div className="flex justify-between items-center ">
                      <div className="space-y-1 py-2">
                        <div className="flex items-center gap-4">
                          <span className="bg-[#F5F6F8] py-1 px-2 rounded-lg text-[10px]">
                            대기중
                          </span>
                          <span className="text-sm">
                            문의제목 텍스트 텍스트 텍스트
                          </span>
                        </div>
                        <div className="text-muted-foreground text-[12px]">
                          2024.08.01
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center ">
                      <div className="space-y-1 py-2">
                        <div className="text-sm">
                          문의제목 텍스트 텍스트 텍스트
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="va4" className="h-full">
                  <div className="h-fit flex flex-col divide-y">
                    <div className="flex justify-between items-center ">
                      <div className="space-y-1 py-2">
                        <div className="flex items-center gap-4">
                          <span className="bg-blue-500/10 text-blue-500 py-1 px-2 rounded-lg text-[10px]">
                            대기중
                          </span>
                          <span className="text-sm">
                            문의제목 텍스트 텍스트 텍스트
                          </span>
                        </div>
                        <div className="text-muted-foreground text-[12px]">
                          2024.08.01
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center ">
                      <div className="space-y-2 py-2">
                        <div className="text-sm">
                          문의제목 텍스트 텍스트 텍스트 문의제목 텍스트 텍스트
                          텍스트 문의제목 텍스트 텍스트 텍스트
                        </div>
                        <div className="bg-[#F5F6F8] w-[90%] text-blue-500 py-1 px-2 rounded-lg text-sm">
                          안녕하세요, 데일리밥 입니다. 답변 텍스트 영역 답변
                          텍스트 영역 답변 텍스트 영역 답변 텍스트 영역 답변
                          텍스트 영역 답변 텍스트 영역
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </TabsContent>
            <ScrollBar className="w-0.5" />
          </ScrollArea>
        </Tabs>
      </div>

      <div className="w-full px-4 pt-2">
        <Button className={`w-full py-6 rounded-2xl ${background}`}>
          완료
        </Button>
      </div>
      <ScrollBar />
      </ScrollArea>

  );
}
