import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full gap-4'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.x className='size-5' />
                        <span className='text-lg'>
                            영수증
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <div className='w-full h-full pt-10'>
                <div className='w-full px-4 mx-auto flex flex-col gap-2 items-center text-center space-y-8'>
                    <div className=''>
                        <div className='w-full px-4 mx-auto'>
                            <Button size={'lg'} className='w-full rounded-2xl py-6'>확인</Button>
                        </div>
                    </div>
                    <div className='w-full flex gap-8'>
                        <div className='relative flex flex-col w-full aspect-[9/14] shadow-lg shadow-black/20 p-3 rounded-lg space-y-2'>
                            <span className='absolute top-0 left-0 -translate-y-1/2 -translate-x-2 text-sm bg-primary text-white py-1 px-2 rounded-lg'>지급완료</span>
                            <div className='absolute w-full left-0  -bottom-10 text-center font-bold'>24.12.01</div>
                        </div>
                        <div className='relative flex flex-col w-full aspect-[9/14] shadow-lg shadow-black/20 p-3 rounded-lg space-y-2'>
                            <div className='absolute w-full left-0  -bottom-10 text-center font-bold'>24.12.01</div>
                        </div>
                        <div className='relative flex flex-col w-full aspect-[9/14] shadow-lg shadow-black/20 p-3 rounded-lg space-y-2'>
                            <div className='absolute w-full left-0  -bottom-10 text-center font-bold'>24.12.01</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full px-4 mx-auto'>
                <Button size={'lg'} className='w-full rounded-lg py-6'>사진 등록</Button>
            </div>
        </div>
    )
}
