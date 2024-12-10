import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Icons } from '@/components/ui/icons'
import { DialogTitle } from '@radix-ui/react-dialog'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <Dialog>
                <DialogTrigger asChild>
                    <Button size={'lg'} className='w-full rounded-2xl'>open</Button>
                </DialogTrigger>
                <DialogContent className='w-fit max-w-[90%] overflow-hidden rounded-2xl'>
                    <div className='pt-6 pb-2 space-y-4 flex flex-col justify-center items-center '>
                        <Icons.warning fill={'#DCDCDC'} className='size-20' />
                        <DialogTitle className='max-w-[240px] text-center'>
                            개인정보 보호를 위해 본인 인증 후
                            비밀번호를 찾을 수 있습니다.
                        </DialogTitle>
                        <div className='flex gap-4'>
                            <Button size={'lg'} className='w-36 bg-primary/10 text-primary shadow hover:bg-primary/15'>취소</Button>
                            <Button size={'lg'} className='w-36'>본인 인증</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}
