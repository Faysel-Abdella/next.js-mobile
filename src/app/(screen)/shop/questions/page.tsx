"use client";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [answer, setAnswer] = useState<Record<number, string>>({});
  return (
    <div className="h-full space-y-4 pt-4">
      <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">친구 초대</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <div className="w-full px-4 space-y-4">
        <div className="w-full font-semibold">
          하루 3문제, 데일리 퀴즈에 도전하세요!
        </div>
        <div className="flex flex-col gap-4 px-1">
          <div className="flex flex-col gap-4 px-1">
            <div className="w-full flex gap-1 text-muted-foreground">
              <span>1.</span>
              <span>
                일반 퀴즈 입니다. 일반 퀴즈 입니다. 일반 퀴즈 입니다. 일반 퀴즈
                입니다.
              </span>
            </div>
            <div className="w-full px-1 space-y-2 text-[#ADADAD]">
              <Button
                onClick={() => setAnswer((pre) => ({ ...pre, [0]: "A" }))}
                variant="outline"
                className={cn(
                  "w-full  text-start flex items-center justify-between",
                  answer[0] === "A"
                    ? "bg-primary/10 hover:bg-primary/15 border-primary text-muted-foreground"
                    : ""
                )}
              >
                <p>항목1</p>
                {answer[0] === "A" ? (
                  <Image alt="img" width={10} height={10}  src="/images/quiz.png" />
                ) : (
                  <Image alt="img" width={10} height={10}  src="/images/null.png" />
                )}
              </Button>

              <Button
                onClick={() => setAnswer((pre) => ({ ...pre, [0]: "B" }))}
                variant="outline"
                className={cn(
                  "w-full flex items-center justify-between text-start text-[#ADADAD] ",
                  answer[0] === "B"
                    ? "bg-primary/10 hover:bg-primary/15 border-primary text-muted-foreground"
                    : ""
                )}
              >
                <p>항목1</p>
                {answer[0] === "B" ? (
                  <Image alt="img" width={10} height={10}  src="/images/quiz.png" />
                ) : (
                  <Image alt="img" width={10} height={10}  src="/images/null.png" />
                )}
              </Button>
              <Button
                onClick={() => setAnswer((pre) => ({ ...pre, [0]: "C" }))}
                variant="outline"
                className={cn(
                  "w-full flex items-center justify-between text-start",
                  answer[0] === "C"
                    ? "bg-primary/10 hover:bg-primary/15 border-primary text-muted-foreground"
                    : ""
                )}
              >
                <p>항목1</p>
                {answer[0] === "C" ? (
                  <Image alt="img" width={10} height={10}  src="/images/quiz.png" />
                ) : (
                  <Image alt="img" width={10} height={10}  src="/images/null.png" />
                )}
              </Button>
              <Button
                onClick={() => setAnswer((pre) => ({ ...pre, [0]: "D" }))}
                variant="outline"
                className={cn(
                  "w-full flex items-center justify-between text-start",
                  answer[0] === "D"
                    ? "bg-primary/10 hover:bg-primary/15 border-primary text-muted-foreground"
                    : ""
                )}
              >
                <p>항목1</p>
                {answer[0] === "D" ? (
                  <Image alt="img" width={10} height={10}  src="/images/quiz.png" />
                ) : (
                  <Image alt="img" width={10} height={10}  src="/images/null.png" />
                )}
              </Button>
            </div>
          </div>
          {/* <div className="flex flex-col gap-4 px-4">
                        <div className='w-full flex gap-1 text-muted-foreground'>
                            <span>1.</span><span>일반 퀴즈 입니다. 일반 퀴즈 입니다. 일반 퀴즈 입니다. 일반 퀴즈 입니다.</span>
                        </div>
                        <div className='w-full px-4 space-y-2'>
                            <Button onClick={() => setAnswer(pre => ({ ...pre, [1]: "A" }))} variant="outline" className={cn('w-full justify-start text-start', answer[1] === "A" ? 'bg-primary/10 hover:bg-primary/15 border-primary text-muted-foreground' : "")}>
                                항목1
                            </Button>
                            <Button onClick={() => setAnswer(pre => ({ ...pre, [1]: "B" }))} variant="outline" className={cn('w-full justify-start text-start', answer[1] === "B" ? 'bg-primary/10 hover:bg-primary/15 border-primary text-muted-foreground' : "")}>
                                항목2
                            </Button>
                            <Button onClick={() => setAnswer(pre => ({ ...pre, [1]: "C" }))} variant="outline" className={cn('w-full justify-start text-start', answer[1] === "C" ? 'bg-primary/10 hover:bg-primary/15 border-primary text-muted-foreground' : "")}>
                                항목3
                            </Button>
                            <Button onClick={() => setAnswer(pre => ({ ...pre, [1]: "D" }))} variant="outline" className={cn('w-full justify-start text-start', answer[1] === "D" ? 'bg-primary/10 hover:bg-primary/15 border-primary text-muted-foreground' : "")}>
                                항목4
                            </Button>
                        </div>
                    </div> */}
        </div>
      </div>
      <div className="absolute w-full px-4 bottom-4">
        <Button className="w-full py-5">다음</Button>
      </div>
    </div>
  );
}
