import { Button } from '@/components/ui/button'
import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
export default function Page() {
    return (
        <div className='pt-6 flex flex-col justify-between items-center h-full'>
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
            <div className='absolute top-1/3 w-full px-4'>
                <div className=' mx-auto  h-full flex flex-col gap-2 items-center justify-between'>
                    <Icons.warning className='size-20' fill='#DCDCDC' />
                    <div className='text-muted-foreground text-sm'>등록한 영수증 없음</div>
                </div>
            </div>
            <div className='w-full px-4 mx-auto absolute bottom-4'>
                <Button size={'lg'} className='w-full rounded-2xl'>사진 등록</Button>
            </div>
        </div>
    )
}
