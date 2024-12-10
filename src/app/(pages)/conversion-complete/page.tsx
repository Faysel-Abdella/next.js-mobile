import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
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
            <ScrollArea className='w-full h-[calc(100vh-10rem)] relative overflow-y-auto'>
                <div className='w-full h-fit pt-2 px-4'>
                    <div className='w-full py-4 text-center space-y-2'>
                        <div className='w-full flex justify-center'>
                            <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-20'>
                                <circle opacity="0.07" cx="25.1939" cy="25.1939" r="25.1939" fill="#FF5E18" />
                                <circle cx="25.1968" cy="25.1938" r="21.2749" fill="#03C75A" />
                                <rect x="14.3906" y="20.2002" width="19.9775" height="4.73549" rx="2.36775" transform="rotate(50.5818 14.3906 20.2002)" fill="white" />
                                <rect x="38.75" y="14.0083" width="27.4305" height="4.73549" rx="2.36775" transform="rotate(120 38.75 14.0083)" fill="white" />
                            </svg>
                        </div>
                        <div className='font-semibold'>
                            <div>1,000</div>
                            <div>포인트 전환 완료</div>
                        </div>
                    </div>
                    <div className='bg-[#D9D9D95E] w-full rounded-2xl px-6 py-4 space-y-6'>
                        <div className='flex justify-between items-center '>
                            <div>전환된 네이버아이디</div>
                            <div className='font-semibold'>abd*****</div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div>출석 체크</div>
                            <div className='font-semibold'>+ 100P</div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div>전환 가능 포인트</div>
                            <div className='text-green-500 font-semibold'>+ 100P</div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit px-4 pt space-y-4 mt-8 text-sm text-muted-foreground bg-muted/60 py-4">
                    <div>
                        <div className="font-semibold mb-2">알려드립니다.</div>
                        <div>유의사항을 입력해주세요. 유의사항을 입력해주세요</div>
                        <div>유의사항을 입력해주세요. 유의사항을 입력해주세요</div>
                        <div>유의사항을 입력해주세요. 유의사항을 입력해주세요</div>
                        <div>유의사항을 입력해주세요. 유의사항을 입력해주세요</div>

                    </div>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>
            <div className='w-full px-4 pt-2'>
                <Button variant={'ghost'} className='w-full text-md rounded-2xl shadow-md shadow-black/10 py-6 bg-green-500 hover:text-white text-white hover:bg-green-500 font-semibold shadow-top'>
                    포인트 전환하기
                </Button>
            </div>
        </div>
    )
}
