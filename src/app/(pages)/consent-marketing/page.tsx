import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative flex flex-col'>
            <nav className='w-full flex flex-col gap-4 py-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            마케팅 활용 동의
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <ScrollArea className='w-full h-[calc(100vh-10rem)] relative overflow-y-auto'>
                <div className='w-full h-full pt-4 px-4 space-y-4'>
                    <p className='text-sm text-muted-foreground'>
                        제 1 장 총칙
                        제 1 조 (목적)
                        약관 영역입니다 약관 영역 입니다 약관 영역 입니다. 약관 영역입니다 약관 영역 입니다 약관 영역 입니다.
                        을 규정함을 목적으로 한다.
                    </p>
                    <p className='text-sm text-muted-foreground '>
                        제 2 조 (용어의 정의)
                        약관 영역입니다 약관 영역 입니다 약관 영역 입니다. 약관 영역입니다 약관 영역 입니다 약관 영역 입니다. 약관 영역입니다 약관 영역 입니다 약관 영역 입니다.약관 영역입니다 약관 영역 입니다 약관 영역 입니다....
                        약관 영역입니다 약관 영역 입니다 약관 영역 입니다....
                        약관 영역입니다 약관 영역 입니다 약관 영역 입니다....
                        약관 영역입니다 약관 영역 입니다 약관 영역 입니다....
                        약관 영역입니다 약관 영역 입니다 약관 영역 입니다....
                        약관 영역입니다 약관 영역 입니다 약관 영역 입니다....
                        약관 영역입니다 약관 영역 입니다 약관 영역 입니다....
                        약관 영역입니다 약관 영역 입니다 약관 영역 입니다....
                        약관 영역입니다 약관 영역 입니다 약관 영역 입니다....
                    </p>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>
        </div>
    )
}
