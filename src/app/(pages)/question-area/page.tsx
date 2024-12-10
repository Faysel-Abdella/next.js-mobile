import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative flex flex-col '>
            <nav className='w-full flex flex-col gap-4 py-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            공지사항
                        </span>
                    </Link>
                </div>
            </nav>
            <ScrollArea className='w-full h-[calc(100vh-8rem)] relative overflow-y-auto'>
                <div className='w-full h-full pt-2 px-4 mt-4 space-y-4'>
                    <Accordion type="single" collapsible className='flex flex-col gap-4'>
                        <AccordionItem value="item-1" className='shadow-md shadow-black/10 rounded-3xl'>
                            <AccordionTrigger className='rounded-3xl px-4 py-2 hover:no-underline [&>svg]:size-8 [&>svg]:text-[#9D9D9D]'>
                                <div className='flex gap-2'>
                                    <span>Q.</span>
                                    <span>질문영역 텍스트 영역</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='flex gap-2 px-4 text-muted-foreground'>
                                    <span>A.</span>
                                    <span>
                                        안녕하세요, 텍스트텍스트 입니다.
                                        나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.
                                    </span>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className='shadow-md shadow-black/10 rounded-3xl'>
                            <AccordionTrigger className='rounded-3xl px-4 py-2 hover:no-underline [&>svg]:size-8 [&>svg]:text-[#9D9D9D]'>
                                <div className='flex gap-2'>
                                    <span>Q.</span>
                                    <span>질문영역 텍스트 영역</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='flex gap-2 px-4 text-muted-foreground'>
                                    <span>A.</span>
                                    <span>
                                        안녕하세요, 텍스트텍스트 입니다.
                                        나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.
                                    </span>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className='shadow-md shadow-black/10 rounded-3xl'>
                            <AccordionTrigger className='rounded-3xl px-4 py-2 hover:no-underline [&>svg]:size-8 [&>svg]:text-[#9D9D9D]'>
                                <div className='flex gap-2'>
                                    <span>Q.</span>
                                    <span>질문영역 텍스트 영역</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className='flex gap-2 px-4 text-muted-foreground'>
                                    <span>A.</span>
                                    <span>
                                        안녕하세요, 텍스트텍스트 입니다.
                                        나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 나는 무엇인지 그리워 이 많은 별빛이 내린 언덕 위에 내 이름자를 써보고 흙으로 덮어 버리었읍니다.
                                    </span>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>
        </div>
    )
}
