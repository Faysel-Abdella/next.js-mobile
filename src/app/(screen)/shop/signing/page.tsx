import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'


export default function Page() {

    return (
        <ScrollArea className='h-full space-y-4 pt-4'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            친구 초대
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <div className='w-full pt-2 px-4 space-y-4'>
                <div className="w-full h-[232px] bg-[#FFD8D8] rounded-xl" />
                <div className="flex flex-col gap-4 px-4">
                    <div className='w-full text-center'>
                        초대 링크를 통해 가입 시
                    </div>
                    <div className='max-w-[200px] mx-auto text-center font-semibold'>
                        친구 2,000 P + 나 2,000 P
                        포인트를 무제한으로 쏩니다!
                    </div>
                    <div className='w-full text-center'>
                        지금 친구에게 공유해보세요!
                    </div>
                    <Button className='bg-[#FEE500] text-black shadow hover:bg-[#FEE500]/90 py-3'>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4991 1C15.4706 1 19.5 4.34994 19.5 8.48343C19.5 12.616 15.4706 15.9659 10.5 15.9659C10.0051 15.965 9.51073 15.9314 9.01971 15.8654L5.24143 18.5013C4.812 18.7435 4.66029 18.717 4.83686 18.1237L5.60143 14.7609C3.13286 13.4261 1.5 11.1129 1.5 8.48343C1.5 4.35086 5.52771 1 10.4991 1Z" fill="black" />
                        </svg>
                        카카오톡 공유하기
                    </Button>
                </div>
            </div>
            <div className='bg-[#F4F6F894] py-2 space-y-4 px-4'>
                <div>안내 문구를 입력해주세요</div>
                <div>안내 문구를 입력해주세요</div>
                <div>안내 문구를 입력해주세요</div>
            </div>
        </ScrollArea>
    )
}


