import { Icons } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
export default function Page() {
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            영수증 촬영
                        </span>
                    </Link>
                </div>
                <Separator />
            </nav>
            <div className='w-full h-full bg-[#A8A8A8]'>
                <div className='w-full h-full flex flex-col gap-2 items-center justify-center'>
                    <svg width="105" height="107" viewBox="0 0 105 107" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                        <path d="M81.9234 0.282471H72.8104C70.4078 0.282471 68.457 2.19536 68.457 4.55702C68.457 6.91307 70.4078 8.82035 72.8104 8.82035H81.9234C89.6863 8.82035 96.0018 15.0134 96.0018 22.6257V33.2447C96.0018 35.6008 97.9526 37.5193 100.355 37.5193C102.764 37.5193 104.709 35.6008 104.709 33.2447V22.6257C104.709 10.3013 94.4916 0.282471 81.9234 0.282471Z" fill="white" />
                        <path d="M22.7915 106.793L31.9044 106.793C34.3071 106.793 36.2578 104.88 36.2578 102.519C36.2578 100.163 34.3071 98.2553 31.9044 98.2553L22.7915 98.2553C15.0286 98.2553 8.71301 92.0623 8.71301 84.45L8.71301 73.8309C8.71301 71.4749 6.76228 69.5564 4.35961 69.5564C1.95123 69.5564 0.00622104 71.4749 0.00622084 73.8309L0.00621991 84.45C0.00621883 96.7744 10.2233 106.793 22.7915 106.793Z" fill="white" />
                        <path d="M36.4196 4.55482C36.4196 2.19316 34.4688 0.280273 32.0662 0.280273H32.0605L22.7416 0.285883C10.2077 0.297102 0.0078125 10.3103 0.0078125 22.6067V33.2425C0.0078125 35.5986 1.95855 37.5171 4.36121 37.5171C6.76387 37.5171 8.72032 35.5986 8.72032 33.2425V22.6067C8.72032 15.0168 15.013 8.84059 22.7473 8.82937L32.0662 8.82376C34.4746 8.82376 36.4196 6.91087 36.4196 4.55482Z" fill="white" />
                        <path d="M68.2953 102.521C68.2953 104.883 70.246 106.796 72.6487 106.796L72.6544 106.796L81.9733 106.79C94.5072 106.779 104.707 96.7656 104.707 84.4693L104.707 73.8334C104.707 71.4773 102.756 69.5588 100.354 69.5588C97.951 69.5588 95.9945 71.4773 95.9945 73.8334L95.9945 84.4693C95.9945 92.0591 89.7018 98.2353 81.9676 98.2466L72.6487 98.2522C70.2403 98.2522 68.2953 100.165 68.2953 102.521Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className='absolute bottom-20 left-1/2 -translate-x-1/2'>
                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="71" height="71" rx="35.5" stroke="white" strokeWidth="4" />
                    <rect x="7.28906" y="7.2915" width="60.4167" height="60.4167" rx="30.2083" fill="white" />
                </svg>
            </div>
        </div>
    )
}
