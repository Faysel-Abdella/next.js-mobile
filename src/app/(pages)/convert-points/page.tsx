import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative flex flex-col h-full'>
            <nav className='w-full flex flex-col gap-4 py-2'>
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
                <div className='w-full h-fit pt-2 px-4 mt-4 space-y-4'>
                    <div className='bg-[#D9D9D95E] w-full rounded-2xl px-6 py-4 space-y-6'>
                        <div className='flex justify-between items-center '>
                            <div>출석 체크</div>
                            <div className='font-semibold'>+ 100P</div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div>전환 가능 포인트</div>
                            <div className='text-green-500 font-semibold'>+ 100P</div>
                        </div>
                    </div>
                    <div className='mt-4 font-semibold'>전환할 포인트</div>
                    <div className='flex items-center gap-2'>
                        <Input placeholder='전환할 포인트를 입력해주세요.' className='h-10 rounded-xl' />
                        <Button variant={'outline'} className='h-10 rounded-xl'>모두 사용</Button>
                    </div>
                    <div className='mt-4 font-semibold'>전환할 네이버 아이디</div>
                    <div className='text-sm'>abd*****(10,000 보유)</div>
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
