import { Button } from '@/components/ui/button'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer"
import { ArrowLeft, PenIcon } from "lucide-react"
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full gap-4'>
            <nav className='w-full px-4 mx-auto flex justify-between items-center '>
                <Link href={".."}>
                    <ArrowLeft />
                </Link>
                <div className='text-2xl text-primary font-semibold'>영수증 등록</div>
                <div></div>
            </nav>
            <Drawer>
                <div className='w-full h-full pt-10'>
                    <div className='w-full px-4 mx-auto flex flex-col gap-2 items-center text-center'>
                        <div className='text-muted-foreground'>
                            등록한 영수증의 항목을 체크해주세요
                        </div>
                        <div className='w-full flex flex-col gap-2'>
                            <DrawerTrigger asChild>
                                <Button variant={'outline'} className='w-full'>
                                    <span className='w-full'>
                                        천도 복숭아
                                    </span>
                                    <PenIcon fill='black' />
                                </Button>
                            </DrawerTrigger>
                            <DrawerTrigger asChild>
                                <Button variant={'outline'} className='w-full'>
                                    <span className='w-full'>
                                        어린이 장난감
                                    </span>
                                    <PenIcon fill='black' />
                                </Button>
                            </DrawerTrigger>
                            <DrawerTrigger asChild>
                                <Button variant={'outline'} className='w-full'>
                                    <span className='w-full'>
                                        치토스
                                    </span>
                                    <PenIcon fill='black' />
                                </Button>
                            </DrawerTrigger>
                            <DrawerTrigger asChild>
                                <Button variant={'outline'} className='w-full'>
                                    <span className='w-full'>
                                        헤어롤 10종 세트
                                    </span>
                                    <PenIcon fill='black' />
                                </Button>
                            </DrawerTrigger>
                        </div>
                    </div>
                </div>
                <DrawerContent className='absolute border-0 border-t-0 bg-primary'>
                    <DrawerHeader>
                        <div className='w-full flex justify-between items-center  py-6'>
                            <DrawerTitle className='text-xl text-white font-semibold'>영수증 등록</DrawerTitle>
                            <Button variant={'outline'} size={'lg'} className='bg-white text-black rounded-2xl py-4'>Next</Button>
                        </div>
                    </DrawerHeader>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
