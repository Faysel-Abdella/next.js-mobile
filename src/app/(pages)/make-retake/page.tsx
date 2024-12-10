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
                            <Icons.warning fill={'#DCDCDC'} className='size-16' />
                            <DialogTitle className='max-w-[200px] text-center text-muted-foreground'>
                                영수증 정보가 부정확해요
                                다시 촬영해 주세요
                            </DialogTitle>
                            <div className='w-full flex gap-4 mt-4'>
                                <Button size={'lg'} className='w-full'>재촬영하기</Button>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}
