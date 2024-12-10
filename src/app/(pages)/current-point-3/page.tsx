import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative flex flex-col'>
            <nav className='w-full flex flex-col gap-4 py-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            포인트 내역
                        </span>
                    </Link>
                </div>
            </nav>
            <ScrollArea className='w-full h-[calc(100vh-8rem)] relative overflow-y-auto'>
                <div className='w-full h-full pt-2 px-4 mt-4 space-y-4'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-4'>
                                <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#FEA31F" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.6723 4.625C6.97456 4.625 7.21959 4.88607 7.21959 5.20812V11.5419C7.21959 11.8639 6.97456 12.125 6.6723 12.125C6.37003 12.125 6.125 11.8639 6.125 11.5419V5.20812C6.125 4.88607 6.37003 4.625 6.6723 4.625Z" fill="white" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M6.125 5.20812C6.125 4.88607 6.37003 4.625 6.6723 4.625H9.16554C10.3858 4.625 11.375 5.67895 11.375 6.97906C11.375 8.27917 10.3858 9.33312 9.16554 9.33312H6.6723C6.37003 9.33312 6.125 9.07205 6.125 8.75V5.20812ZM7.21959 5.79123V8.16688H9.16554C9.78126 8.16688 10.2804 7.63508 10.2804 6.97906C10.2804 6.32304 9.78126 5.79123 9.16554 5.79123H7.21959Z" fill="white" />
                            </svg>
                            <div className='text-muted-foreground'>현재 포인트</div>
                        </div>
                        <div className='space-y-1'>
                            1,000원
                        </div>
                    </div>
                    <Separator className='h-1' />
                    <div className='flex flex-col divide-y'>
                        <div className='flex justify-between items-center '>
                            <div className='space-y-1 py-2'>
                                <div className='text-muted-foreground text-[12px]'>2024.10.01 11:50</div>
                                <div>출석 체크</div>
                            </div>
                            <div className='text-blue-500 font-semibold'>+ 100P</div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className='space-y-1 py-2'>
                                <div className='text-muted-foreground text-[12px]'>2024.10.01 11:50</div>
                                <div>출석 체크</div>
                            </div>
                            <div className='text-blue-500 font-semibold'>+ 100P</div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className='space-y-1 py-2'>
                                <div className='text-muted-foreground text-[12px]'>2024.10.01 11:50</div>
                                <div>아이스 아메리카노 구매</div>
                            </div>
                            <div className='text-primary font-semibold'>- 1,000P</div>
                        </div>
                    </div>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>
        </div>
    )
}
