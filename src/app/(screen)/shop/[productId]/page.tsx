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
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ]


    return (
        <div className='relative  flex flex-col h-full'>
            <nav className='w-full flex flex-col gap-4  pt-4'>
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
            <ScrollArea className='h-[calc(100vh-9rem)] relative overflow-y-auto bg-[#F5F5F5]'>
                <div className='w-full flex flex-col h-[calc(100vh-9rem)] py-7 px-4 '>
                    <div className="flex flex-col gap-4 px-4 text-lg text-[#4D4D4D]">
                        <div className='w-full text-center font-light opacity-70'>
                            매일매일 터지는 포인트!
                        </div>
                        <div className='w-full text-center  font-medium'>
                            출석체크하고 포인트를 받으세요!
                        </div>
                    </div>
                    <div className=' flex flex-col gap-5'>
                        <div className='shadow-sm rounded-[20px] mt-4 w-full p-5 bg-white  h-fit grid grid-cols-7 gap-y-4 gap-x-2.5'>
                            {products.map((key, idx) => (
                                <div key={key} className="flex w-8 flex-col items-center gap-1 justify-center">
                                    {/* <div className='text-sm'>{idx}일</div> */}
                                    <div className={cn("flex h-8 w-full rounded-full items-center justify-center text-[10px] font-medium", (idx === 0) ? "text-white" : "text-[#8A8A8A]" , (idx === 0) ? "bg-[#FF5E18]" : "bg-[#F5F5F5]" )}>{(idx === 0) ? <Icons.checked fill="#FF5E18"/> : idx + 1}</div>
                                    
                                    <div className={cn('text-[10px] font-medium text-[#ADADAD]', (idx === 0) ? "text-primary" : " text-muted-foreground/60")}>500P</div>
                                </div>
                            ))}
                        </div>
                        <Link href={'#'} className={cn(buttonVariants(), 'w-full rounded-lg p-3 text-md h-[42   px]')}>출석체크하기</Link>
                    </div>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>
        </div >
    )
}


