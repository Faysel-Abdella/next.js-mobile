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
                            회원가입
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
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
        </div>
    )
}
