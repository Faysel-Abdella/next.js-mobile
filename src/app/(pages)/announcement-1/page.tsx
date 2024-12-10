import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Link from 'next/link'

export default function Page() {
    return (
        <div className='relative flex flex-col h-full'>
            <nav className='w-full flex flex-col gap-4 py-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            공지사항
                        </span>
                    </Link>
                </div>
            </nav>
            <ScrollArea className='w-full h-[calc(100vh-10rem)] relative overflow-y-auto'>
                <div className='w-full h-full pt-2 px-4 mt-4 space-y-4'>
                    <div className='flex flex-col divide-y'>
                        <div className='flex justify-between items-center '>
                            <div className='space-y-1 py-2'>
                                <div>공지사항3 제목 텍스트 영역</div>
                                <div className='text-muted-foreground text-[12px]'>2024.08.01</div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className='space-y-1 py-2'>
                                <div>공지사항2 제목 텍스트 영역</div>
                                <div className='text-muted-foreground text-[12px]'>2024.08.01</div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className='space-y-1 py-2'>
                                <div>공지사항1 제목 텍스트 영역</div>
                                <div className='text-muted-foreground text-[12px]'>2024.08.01</div>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollBar className="w-0.5" />
            </ScrollArea>
        </div>
    )
}
