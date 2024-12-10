import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Link from 'next/link'


export default function Page() {
    const products = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ]


    return (
        <div className='relative'>
            <nav className='w-full flex flex-col gap-4 py-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            출석 체크
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <ScrollArea className='h-[calc(100vh-9rem)] relative overflow-y-auto'>
                <div className='w-full h-full py-4 px-4'>
                    <div className="flex flex-col gap-4 px-4">
                        <div className='w-full text-center'>
                            매일매일 터지는 포인트!
                        </div>
                        <div className='w-full text-center font-semibold'>
                            출석체크하고 포인트를 받으세요!
                        </div>
                    </div>
                    <div className='shadow-lg shadow-black/20 rounded-3xl mt-4'>
                        <div className='w-full h-fit grid grid-cols-7 gap-y-4 py-6 px-4'>
                            {products.map((key, idx) => (
                                <div key={key} className="flex flex-col items-center justify-center">
                                    <div className='text-sm'>{idx}일</div>
                                    <Icons.checked fill={(idx === 0) ? "#FF5E18" : "#D9D9D9"} />
                                    <div className={cn('text-sm', (idx === 0) ? "" : " text-muted-foreground/60")}>+500P</div>
                                </div>
                            ))}
                        </div>
                        <Link href={'#'} className={cn(buttonVariants(), 'w-full rounded-b-3xl rounded-t-none py-5')}>출석체크하기</Link>
                    </div>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>
        </div >
    )
}


