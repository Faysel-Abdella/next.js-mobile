import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Icons } from '@/components/ui/icons'
import { DialogTitle } from '@radix-ui/react-dialog'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <div className='w-full px-4'>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size={'lg'} className='w-full rounded-2xl'>Open</Button>
                    </DialogTrigger>
                    <DialogContent className='w-fit min-w-80 max-w-[90%] overflow-hidden rounded-2xl'>
                        <div className='pt-4 pb-2 space-y-4 flex flex-col justify-center items-center '>
                            <Icons.success className='size-16' />
                            <DialogTitle className='max-w-[200px] text-center'>
                                등록이 완료 되었어요
                                <div className='mt-2 text-muted-foreground/50 max-w-[160px] text-center text-[14px]'>
                                    관리자가 승인하면
                                    포인트를 받을 수 있어요
                                </div>
                            </DialogTitle>
                            <div className='w-full flex gap-4 pt-4'>
                                <Button size={'lg'} className='w-full'>확인</Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
