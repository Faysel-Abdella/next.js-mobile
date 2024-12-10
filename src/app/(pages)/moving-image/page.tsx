import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Page() {
    return (
        <div className='h-screen flex flex-col gap-1 justify-center items-center'>
            <div className='h-full px-8'>
                <div className='w-full pt-32 pb-10'>
                    <Image src={'/images/moving.png'} width={400} height={400} alt='logo2' className='w-full' />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='text-4xl font-extrabold'>
                        <span>가격만</span><span className='text-primary'>잘</span>
                    </div>
                    <div className='text-4xl font-extrabold'>입력하면</div>
                </div>
                <div className='max-w-[90%] py-6'>
                    추첨을 통해 상품을 보내드릴게요.눈치게임을 통해 가격을 입력하고 상품을 받으세요!
                </div>
            </div>
            <div className='w-full px-8 py-6 flex flex-col gap-4 items-center'>
                <div className=''>
                    <span className='text-blue-500'>눈치게임 설명서를</span>
                    <span>잘 읽어보셨나요?</span>
                </div>
                <Button className='w-full py-6 rounded-2xl'>
                    눈치게임 시작하기  {'>'}
                </Button>
                <span className='text-blue-500 mt-8'>응모권이 없으시다면 클릭</span>
            </div>
        </div>
    )
}
