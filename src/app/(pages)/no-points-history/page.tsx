import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            포인트 내역
                        </span>
                    </Link>
                </div>
            </nav>
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
            </div>
            <div className='h-full'>
                <div className='text-muted-foreground'>
                    포인트 이력이 없습니다
                </div>
            </div>
            <div className='absolute bottom-6 w-full px-4 '>
                <Button variant={'ghost'} className='w-full text-md rounded-2xl shadow-md shadow-black/10 py-6 text-green-500 hover:text-green-500 font-semibold shadow-top'>
                    <Image src={'/images/pay.png'} alt='pay' width={80} height={180} />
                    포인트 전환하기
                </Button>
            </div>
        </div>
    )
}
