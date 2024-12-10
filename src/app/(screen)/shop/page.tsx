import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    const products = [1, 2, 3, 4, 5, 6]

    return (
        <ScrollArea className='h-[calc(100vh-3rem)] py-4 relative overflow-y-auto'>
            <div className='relative py-6 flex flex-col justify-between h-full gap-2'>
                <div className='space-y-4'>
                    <div className='mx-4 p-0 gap-2'>
                        <div className='font-semibold'>포인트 샵</div>
                    </div>
                    <div className='space-y-4'>
                        <Carousel className="w-full">
                            <CarouselContent className='px-4 pe-4'>
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <CarouselItem key={index} className='relative max-w-[340px]'>
                                        <div key={index} className="w-full h-[187px] bg-[#FFD8D8] rounded-xl" />
                                    </CarouselItem>
                                ))}
                                <CarouselItem className='relative max-w-[20px]' />
                            </CarouselContent>
                        </Carousel>
                        <div className="space-y-4 px-4">
                            {products.map((product, index) => (
                                <div key={index} className="h-[80px] flex flex-row items-center justify-between relative"  >
                                    <Link href={`/shop/${product}`} className="w-full h-full flex items-center gap-4 px-2 rounded-lg shadow-md ">
                                        <Image
                                            src="/images/Starbucks.png"
                                            alt="Starbucks"
                                            width={80}
                                            height={80}
                                            className="h-[60px] w-[60px] object-cover"
                                        />
                                        <span className="text-sm space-y-1 flex flex-col">
                                            <span className="font-semibold">소문내기</span>
                                            <span className="text-muted-foreground">주변에 소개하고 2,000P 받아가세요!</span>
                                        </span>
                                    </Link>
                                </div >
                            ))}
                        </div >
                    </div>
                </div>
            </div >
            <ScrollBar className="w-0.5" />
        </ScrollArea>
    )
}


