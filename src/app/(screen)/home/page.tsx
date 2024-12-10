import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Icons } from "@/components/ui/icons"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function Home() {
  const products = [1, 2, 3, 4, 5, 6]
  return (
    <ScrollArea className='w-full h-[calc(100vh-4rem)] relative overflow-y-auto'>
      <div className="space-y-4">
        <div className="w-full pb-24">
          <div className="relative w-full h-[209px] pt-10">
            <div className="w-full px-4 flex flex-col gap-6 justify-between">
              <div className="w-full h-10 flex justify-between items-center">
                <Image src={'/images/logo.png'} alt="logo" width={100} height={64} />
                <div className="flex items-center gap-4">
                  <Icons.bell className="size-6 text-muted-foreground" />
                  <Icons.user className="size-6 text-muted-foreground" />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 ">
                <h1 className="text-1xl font-bold text-muted-foreground">홍길동 님 안녕하세요!</h1>
                <div className="w-full h-[147px] rounded-lg mx-auto bg-gradient-to-r from-[#FF6766] to-[#F8964D]  shadow-md drop-shadow-md flex flex-col justify-between p-4">
                  <div className="flex items-center  gap-2 text-white">
                    <Icons.currency />
                    <div className="text-4xl font-light">5,000 <sub className="text-sm -translate-y-1 font-light">p</sub></div>
                  </div>
                  <div className="space-y-4">
                    <Separator className="bg-muted/80 border-muted/80" />
                    <div className="w-full flex  justify-between items-center">
                      <div className="flex items-center text-white">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_1297_26599)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.785 8.56874C18.7841 8.87956 18.5963 9.15156 18.32 9.2945L18.3207 9.29211C17.693 9.61783 17.2634 10.2707 17.2625 11.026C17.2617 11.7812 17.6885 12.4372 18.3159 12.7623C18.5939 12.9048 18.7794 13.1786 18.7785 13.4894L18.7747 16.4005C18.7732 16.8418 18.4128 17.1996 17.9708 17.2004L7.41376 17.1856L2.00991 17.1779C1.5686 17.1763 1.21082 16.8159 1.21003 16.3739L1.21381 13.4628C1.21473 13.152 1.40245 12.88 1.67882 12.737C2.30648 12.4113 2.73615 11.7584 2.737 11.0031C2.73785 10.2479 2.31098 9.59192 1.68363 9.2668C1.40565 9.1243 1.22006 8.85058 1.22098 8.53976L1.22476 5.62867C1.22636 5.18735 1.58432 4.82884 2.02876 4.82878L7.42949 4.83822L17.9889 4.85366C18.4302 4.85525 18.788 5.2156 18.7888 5.65765L18.785 8.56874ZM10.4447 8.27668L11.1411 9.62419L12.6226 9.91764C13 9.99122 13.1523 10.4508 12.8946 10.738L11.842 11.9063L12.033 13.4705C12.0801 13.864 11.6705 14.1518 11.3165 13.9756L9.99509 13.3128L8.67197 13.9723C8.31663 14.1512 7.90677 13.8586 7.95625 13.4659L8.15195 11.9023L7.10327 10.732C6.84378 10.4436 6.99919 9.98654 7.37769 9.91142L8.85955 9.62203L9.56129 8.27588C9.74684 7.91695 10.2586 7.91915 10.4447 8.27668Z" fill="white" />
                          </g>
                          <defs>
                            <clipPath id="clip0_1297_26599">
                              <rect width="20" height="16.5275" fill="white" transform="translate(2.85156 0.189941) rotate(17)" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>응모권</span>
                        <span className="ms-2">4장</span>
                      </div>
                      <div className="flex gap-2 text-white">
                        <span>사용</span>
                        <span>구매</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="w-full px-4 text-lg">매일매일 쏟아지는 다양한 혜택</div>
          <Carousel className="w-full max-w-[100vw]">
            <CarouselContent className='max-w-[100vw] px-4'>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className='relative max-w-[calc(100vw-4rem)]'>
                  <div key={index} className="w-full h-[187px] bg-[#FFD8D8] rounded-xl" />
                </CarouselItem>
              ))}
              <CarouselItem className='relative max-w-[20px]' />
            </CarouselContent>
          </Carousel>
        </div>
        <div className="space-y-2">
          <div className="w-full px-4 text-lg">상품 구매</div>
          <Carousel className="w-full max-w-[100vw]">
            <CarouselContent className='max-w-[100vw] px-4'>
              {Array.from({ length: 6 }).map((_, index) => (
                <CarouselItem key={index} className='relative max-w-[calc(100vw-4rem)]'>
                  <div className="w-full h-[80px] my-4 flex"  >
                    <div className="w-[calc(100%-5rem)] h-full flex items-center gap-4 ps-2 shadow-lg rounded-xl">
                      <Image
                        src="/images/Starbucks.png"
                        alt="Starbucks"
                        width={80}
                        height={80}
                        className="h-[60px] w-[60px] object-cover"
                      />
                      <div className="w-[calc(100%-5rem)]">
                        <div className="text-muted-foreground text-[10px]">스타벅스</div>
                        <div>아이스 아메리카노</div>
                        <div className="text-muted-foreground text-[10px]">~12월 31일 까지</div>
                      </div>
                    </div>
                    <div className='absolute right-0 flex h-[80px]'>
                      <div className="z-10 h-full flex flex-col items-center gap-2">
                        <div className='h-1/3 w-0.5 bg-gradient-to-b from-white to-border rounded-b-full' />
                        <div className='h-1/3 w-0.5 bg-border/80 rounded-full' />
                        <div className='h-1/3 w-0.5 bg-border rounded-full' />
                        <div className='h-1/3 w-0.5 bg-gradient-to-b rounded-t-full from-border to-border' />
                      </div>
                      <div className="h-full w-[5rem] rounded-lg shadow-lg bg-[#FFEFE8]">
                        <div className="h-full flex flex-col shrink-0 justify-center items-center">
                          <Icons.currency fill={"hsl(var(--primary))"} className="size-6" />
                          <div className="text-sm text-primary">300 P</div>
                        </div>
                      </div>
                    </div>
                  </div >
                </CarouselItem>
              ))}
              <CarouselItem className='relative max-w-[20px]' />
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <ScrollBar className="w-0.5" />
    </ScrollArea>
  )
}