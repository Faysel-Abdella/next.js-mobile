import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import Image from 'next/image'

export default function Page() {
    return (
        <ScrollArea className='h-screen relative flex flex-col gap-1 justify-center items-center p-4'>
                <div className='w-full flex relative flex-col justify-center items-center'>
                <p className="font-semibold absolute  top-1 ">gif 움직이는 이미지</p>
                    <Image src={'/images/moving.png'} width={183} height={145} alt='logo2' className='w-full' />
                </div>
                <div className='flex flex-col gap-2 w-full pt-2'>
                    <div className='text-4xl font-extrabold'>
                        <span>가격만</span><span className='text-primary'>잘</span>
                    </div>
                    <div className='text-4xl font-extrabold'>입력하면</div>
                </div>
                <div className=' py-6 flex flex-col w-full gap-1 font-[400] text-black text-md  '>
                    <p className="p">추첨을 통해 상품을 보내드릴게요.</p>
                    <p className="p">
                    눈치게임을 통해 가격을 입력하고 상품을 받으세요!</p>
                </div>
            <div className='relative w-full  py-6 flex flex-col items-center'>
                <div className='mb-2.5'>
                    <span className='text-blue-500'>눈치게임 설명서</span>
                    <span>를 잘 읽어보셨나요?</span>
                </div>
                <Button className='w-full py-6 rounded-[6px] font-medium text-white'>
                    눈치게임 시작하기  {'>'}
                </Button>
                <span className='2xl:hidden bottom-0 absolute top-full mt-6 text-blue-500 text-sm'>응모권이 없으시다면 클릭</span>
            </div>
                <span className='min-w-full hidden 2xl:block text-center pr-8 absolute bottom-8 mt-6 text-blue-500 text-sm'>응모권이 없으시다면 클릭</span>
        </ScrollArea>
    )
}
