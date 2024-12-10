import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import { DialogTitle } from '@radix-ui/react-dialog'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            아이디 찾기
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <div className='absolute top-1/3 w-full px-4'>
                <div className=' mx-auto  h-full flex flex-col gap-4 items-center justify-between'>
                    <Icons.success className='size-16' />
                    <div className='text-muted-foreground max-w-[200px] text-sm text-center'>
                        회원님의 아이디(이메일)는
                        <span className='text-[#8268FD]'>abc123@aaa.com</span> 입니다
                    </div>
                    <div className='text-muted-foreground/50 max-w-[200px] text-[10px] text-center'>가입일 : 2023.11.01</div>
                </div>
            </div>
            <div className='w-full px-4 mx-auto absolute bottom-4'>
                <Button size={'lg'} className='w-full rounded-2xl'>사진 등록</Button>
            </div>
        </div>
    )
}
