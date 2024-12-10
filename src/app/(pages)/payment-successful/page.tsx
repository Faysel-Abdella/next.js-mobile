import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            알림
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <div className='w-full h-full pt-4 px-4'>
                <div className='w-full text-center'>
                    결제 성공!
                </div>
                <div className='w-full h-fit flex flex-col shadow-lg shadow-black/20 mt-16 rounded-xl'>
                    <div className='w-full flex justify-center -translate-y-1/2'>
                        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="42.8893" cy="42.8903" r="42.1315" fill="#FF5E18" />
                            <rect x="21.5" y="33.0029" width="39.5623" height="9.37788" rx="4.68894" transform="rotate(50.5818 21.5 33.0029)" fill="white" />
                            <rect x="69.7422" y="20.7417" width="54.3218" height="9.37788" rx="4.68894" transform="rotate(120 69.7422 20.7417)" fill="white" />
                        </svg>
                    </div>
                    <div className="w-full h-fit flex flex-col gap-4 -translate-y-6 px-4">
                        <div className='flex flex-col items-center gap-2 text-center'>
                            <div className='text-muted-foreground'>구매 포인트</div>
                            <div className='text-xl font-bold'>10,000 PT</div>
                        </div>
                        <div className='w-full h-full px-4 space-y-5'>
                            <div className='flex gap-2 items-center justify-between'>
                                <div className='text-sm text-muted-foreground/60'>구매 상품</div>
                                <div className='text-sm text-end font-bold'>아이스 아메리카노</div>
                            </div>
                            <div className='flex gap-2 items-center justify-between'>
                                <div className='text-sm text-muted-foreground/60'>사용처</div>
                                <div className='text-sm text-end font-bold'>스타벅스</div>
                            </div>
                            <div className='flex gap-2 items-center justify-between'>
                                <div className='text-sm text-muted-foreground/60'>날짜</div>
                                <div className='text-sm text-end font-bold'>2024년 11월 24일</div>
                            </div>
                            <div className='flex gap-2 items-center justify-between'>
                                <div className='text-sm text-muted-foreground/60'>시간</div>
                                <div className='text-sm text-end font-bold'>12 : 35 : 45 PM</div>
                            </div>
                            <Separator />
                            <div className='flex gap-2 items-center justify-between'>
                                <div className='text-sm text-muted-foreground/60'>구매 포인트</div>
                                <div className='text-sm text-end font-bold'>10,000</div>
                            </div>
                            <div className='flex gap-2 items-center justify-between'>
                                <div className='text-sm text-muted-foreground/60'>할인</div>
                                <div className='text-sm text-muted-foreground/60 text-end font-bold'>- 2000</div>
                            </div>
                            <div className='flex gap-2 items-center justify-between'>
                                <div className='text-sm text-muted-foreground/60'>지불 금액</div>
                                <div className='text-sm text-end font-bold text-primary'>8,000</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-4 flex justify-between overflow-hidden translate-y-[40%]'>
                        <span className='p-4 bg-gradient-to-b from-black/30 via-gray-200 to-gray-100/90 rounded-t-full shadow-inner' />
                        <span className='p-4 bg-gradient-to-b from-black/30 via-gray-200 to-gray-100/90 rounded-t-full shadow-inner' />
                        <span className='p-4 bg-gradient-to-b from-black/30 via-gray-200 to-gray-100/90 rounded-t-full shadow-inner' />
                        <span className='p-4 bg-gradient-to-b from-black/30 via-gray-200 to-gray-100/90 rounded-t-full shadow-inner' />
                        <span className='p-4 bg-gradient-to-b from-black/30 via-gray-200 to-gray-100/90 rounded-t-full shadow-inner' />
                        <span className='p-4 bg-gradient-to-b from-black/30 via-gray-200 to-gray-100/90 rounded-t-full shadow-inner' />
                        <span className='p-4 bg-gradient-to-b from-black/30 via-gray-200 to-gray-100/90 rounded-t-full shadow-inner' />
                    </div>
                </div>
            </div>
        </div>
    )
}
