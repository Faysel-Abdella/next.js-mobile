import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative flex flex-col '>
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
                        <div className='text-muted-foreground'>안녕하세요! <span className='text-blue-500'>유저네임</span> 님</div>
                        <div className='flex items-center space-x-1'>
                            <span className='text-muted-foreground'>
                                구매 내역
                            </span>
                            <svg width="3" height="11" viewBox="0 0 3 11" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-4'>
                                <path d="M0.11472 0.242127C0.041265 0.397207 2.25277e-07 0.607514 2.20534e-07 0.826798C2.1579e-07 1.04608 0.041265 1.25639 0.11472 1.41147L2.05423 5.50499L0.11472 9.59852C0.0433464 9.75449 0.00385311 9.96338 0.00474598 10.1802C0.00563861 10.397 0.0468459 10.6045 0.119493 10.7578C0.192139 10.9111 0.290413 10.9981 0.393147 11C0.495881 11.0019 0.594855 10.9185 0.668753 10.7679L2.88528 6.08966C2.95874 5.93458 3 5.72428 3 5.50499C3 5.28571 2.95874 5.0754 2.88528 4.92032L0.668753 0.242127C0.595276 0.087093 0.495633 -2.21207e-07 0.391737 -2.30385e-07C0.28784 -2.39562e-07 0.188197 0.0870929 0.11472 0.242127Z" fill="#9D9D9D" />
                            </svg>
                        </div>
                    </div>
                    <div className='rounded-full border px-4 py-2 flex items-center justify-between'>
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
                    <div className='flex flex-col gap-2'>
                        <div>출석 체크</div>
                        <div>FAQ</div>
                        <div>1:1 문의</div>
                        <div>이용 약관</div>
                        <div>개인정보 처리방침</div>
                        <div>소셜 계정 연동</div>
                        <div>알림 설정</div>
                    </div>
                    <div className='px-4 flex flex-col gap-2'>
                        <div className='w-full flex justify-between'>
                            <div className='text-muted-foreground text-sm'>눈치게임 알림 받기</div>
                            <Switch className='data-[state=checked]:bg-black' />
                        </div>
                        <div className='w-full flex justify-between'>
                            <div className='text-muted-foreground text-sm'>눈치게임 알림 받기</div>
                            <Switch className='data-[state=checked]:bg-black' />
                        </div>
                    </div>
                </div>
                <div className='w-full items-end px-6 flex flex-col gap-4 mt-10'>
                    <div className='text-muted-foreground text-sm'>로그아웃</div>
                    <div className='text-muted-foreground text-sm'>회원탈퇴</div>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>

        </div>
    )
}
