import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  return (
    <div className="bg-white relative py-6 flex flex-col justify-between items-center h-full">
      <nav className="w-full flex flex-col gap-4">
        <div className="w-full px-4 mx-auto flex justify-between items-center ">
          <Link href={".."} className="flex items-center gap-4">
            <Icons.arrowLeft className="size-5" />
            <span className="text-lg">FAQ</span>
          </Link>
        </div>
        <Separator />
      </nav>
      <ScrollArea className="w-full">
      <div className="w-full h-full pt-4 px-5 space-y-2.5 flex flex-col text-[#4D4D4D]">
        <Accordion type="single" collapsible className="w-full space-y-2.5 h-fit">
          
          <AccordionItem value="item-1" className="rounded-xl backdrop-blur-md border shadow-lg border-black/5 px-4 h-fit">
            <AccordionTrigger className="py-3">Q. 질문영역 질문텍스트 영역</AccordionTrigger>
            <AccordionContent className="flex gap-0.5 ">
              A.
              <p className="text-[#ADADAD]">답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="rounded-xl backdrop-blur-md border shadow-lg border-black/5 px-4 h-fit">
            <AccordionTrigger className="py-3">Q. 질문영역 질문텍스트 영역</AccordionTrigger>
            <AccordionContent className="flex gap-0.5 ">
              A.
              <p className="text-[#ADADAD]">답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="rounded-xl backdrop-blur-md border shadow-lg border-black/5 px-4 h-fit">
            <AccordionTrigger className="py-3">Q. 질문영역 질문텍스트 영역</AccordionTrigger>
            <AccordionContent className="flex gap-0.5 ">
              A.
              <p className="text-[#ADADAD]">답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="rounded-xl backdrop-blur-md border shadow-lg border-black/5 px-4 h-fit">
            <AccordionTrigger className="py-3">Q. 질문영역 질문텍스트 영역</AccordionTrigger>
            <AccordionContent className="flex gap-0.5 ">
              A.
              <p className="text-[#ADADAD]">답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5" className="rounded-xl backdrop-blur-md border shadow-lg border-black/5 px-4 h-fit">
            <AccordionTrigger className="py-3">Q. 질문영역 질문텍스트 영역</AccordionTrigger>
            <AccordionContent className="flex gap-0.5 ">
              A.
              <p className="text-[#ADADAD]">답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6" className="rounded-xl backdrop-blur-md border shadow-lg border-black/5 px-4 h-fit">
            <AccordionTrigger className="py-3">Q. 질문영역 질문텍스트 영역</AccordionTrigger>
            <AccordionContent className="flex gap-0.5 ">
              A.
              <p className="text-[#ADADAD]">답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7" className="rounded-xl backdrop-blur-md border shadow-lg border-black/5 px-4 h-fit">
            <AccordionTrigger className="py-3">Q. 질문영역 질문텍스트 영역</AccordionTrigger>
            <AccordionContent className="flex gap-0.5 ">
              A.
              <p className="text-[#ADADAD]">답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 답변영역 답변텍스트 영역 </p>
            </AccordionContent>
          </AccordionItem>
         
        </Accordion>
      </div>
      </ScrollArea>
    </div>
  );
}
