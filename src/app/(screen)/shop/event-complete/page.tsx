import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'


export default function Page() {

    return (
        <div className='h-full space-y-4 pt-4'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            데일리 퀴즈 완료
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <ScrollArea className='h-[calc(100vh-14rem)] relative overflow-y-auto'>
                <div className='w-full text-primary'>
                    이벤트 완료
                </div>

                <div className='w-full aspect-square flex flex-col gap-2 justify-center items-center text-center  py-2'>
                    <Carousel className="">
                        <CarouselContent className='w-[400px] px-4'>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div key={index} className="w-full flex justify-center py-4">
                                        <Image
                                            src="/images/Starbucks.png"
                                            alt="Starbucks"
                                            width={280}
                                            height={280}
                                            className="h-[216px] w-[216px] object-cover"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                            <CarouselItem className='max-w-6' />
                        </CarouselContent>
                        <div>
                            <div>아이스 아메리카노</div>
                            <span className='text-muted-foreground'>스타벅스</span>
                        </div>
                        <div className='flex gap-1 justify-center items-center'>
                            <Icons.currency fill={"hsl(var(--primary))"} className="size-6" />
                            <div className="">300 P</div>
                        </div>
                    </Carousel>
                </div>
                <div className="flex flex-col gap-4 px-4">
                    <div className='flex flex-col gap-2'>
                        <div className='font-bold'>데일리 퀴즈를 완성하셨습니다.</div>
                        <span className='text-muted-foreground text-sm'>
                            내일 또 참여하면
                        </span>
                        <span className='text-muted-foreground text-sm'>
                            포인트를 얻을 수 있어요
                        </span>
                        <div className='flex gap-2 items-center justify-between mt-8'>
                            <div className='text-sm text-muted-foreground/60'>내가 맞춘 정답</div>
                            <div className='text-sm text-end font-bold'>일반 1개 보험 1개</div>
                        </div>
                        <div className='flex gap-2 items-center justify-between'>
                            <div className='text-sm font-bold'>획득 포인트</div>
                            <div className='text-sm text-end font-bold text-primary'>1,000</div>
                        </div>
                    </div>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>
            <div className='w-full px-4 bottom-4'>
                <Button className='w-full py-5'>제출</Button>
            </div>
        </div>
    )
}


