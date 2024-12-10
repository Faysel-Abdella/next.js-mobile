import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { ScrollableTabsList, ScrollableTabsTrigger } from '@/components/ui/scrollable-tabs'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { BellRing } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function Page() {
    const episodes = [
        { id: 1, number: 17 },
        { id: 2, number: 18 },
        { id: 3, number: 19 },
        { id: 4, number: 20 },
        { id: 5, number: 21 },
    ]
    return (
        <div className='relative py-6 flex flex-col justify-between items-center h-full'>
            <nav className='w-full flex flex-col gap-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            눈치 게임
                        </span>
                    </Link>
                </div>
            </nav>
            <div className='flex items-center justify-between'>
                <div>

                </div>
            </div>
            <div className='w-full h-full pt-4'>
                <Tabs defaultValue='18'>
                    <ScrollableTabsList>
                        {episodes.map((episode, index) => (
                            <ScrollableTabsTrigger
                                key={episode.id}
                                index={index}
                                value={episode.number.toString()}
                                className="w-[33.333%] rounded-lg flex items-center justify-center mx-2 h-16 bg-[#D9D9D95E] data-[active=true]:h-20 data-[active=true]:bg-[#D9D9D9]"
                            >
                                <span className="text-xl font-bold">
                                    {episode.number}회
                                </span>
                            </ScrollableTabsTrigger>
                        ))}
                    </ScrollableTabsList>
                    <TabsContent value={(18).toString()} >
                        <ScrollArea className='h-[calc(100vh-10rem)] pb-4'>
                            <div className='space-y-4'>
                                <div className='w-full px-4 flex flex-col gap-2 justify-center items-center space-y-2 pt-8'>
                                    <div>눈치 게임 진행 중!</div>
                                    <span className='py-0.5 w-3 bg-gray-600 rounded-full'></span>
                                    <div className='space-y-4'>
                                        <div className='w-[300px] flex gap-4'>
                                            <span className='text-muted-foreground'>응모기간</span>
                                            <span>4월 3일 (수)~4월9일 (화)</span>
                                        </div>
                                        <div className='w-[300px] flex gap-4'>
                                            <span className='text-muted-foreground'>결과 발표</span>
                                            <span>4월 11일 (목) 오전 11시 예정</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex gap-4 px-4'>
                                    <Button variant={'outline'} className='w-full rounded-lg py-4 text-lg border-2 border-primary justify-between'>
                                        <div>
                                            보유 응모권
                                        </div>
                                        <div>
                                            <span className='text-primary text-xl font-semibold'>3</span>
                                            <span>장</span>
                                        </div>
                                    </Button>
                                    <Button className='rounded-lg'>
                                        충전하기
                                    </Button>
                                </div>
                                <div className='flex flex-col gap-4 px-4'>
                                    <Card className='shadow-md shadow-black/20'>
                                        <CardContent className='p-0 pb-4 space-y-4'>
                                            <div className='bg-[#E2E2E2] w-full aspect-video flex justify-center items-center rounded-lg overflow-clip'>
                                                <Image src={'/images/blome.png'} width={200} height={200} alt='product-thumbnail' className='object-cover' />
                                            </div>
                                            <div className='flex items-start gap-4 px-4'>
                                                <div className='flex items-center gap-2 w-full'>
                                                    <span className='bg-blue-500 text-white py-1 px-2 rounded-lg text-[10px]'>대기중</span>
                                                    <span className='text-sm text-muted-foreground'>41,533명 참여중</span>
                                                </div>
                                                <div className='max-w-40 text-muted-foreground text-[10px]'>(조회수 기준 표시 시) 41,533명 보고 있는 중</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div>브리지스톤 B2드라이버</div>
                                                <div className='text-primary text-sm'>정상가1,066,660 원</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div className='text-muted-foreground text-[12px]'>응모가능 가격</div>
                                                <div>40,000 ~ 90,000 원</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className='shadow-md shadow-black/20'>
                                        <CardContent className='p-0 pb-4 space-y-4'>
                                            <div className='bg-[#E2E2E2] w-full aspect-video flex justify-center items-center rounded-lg overflow-clip'>
                                                <Image src={'/images/blome.png'} width={200} height={200} alt='product-thumbnail' className='object-cover' />
                                            </div>
                                            <div className='flex items-start gap-4 px-4'>
                                                <div className='flex items-center gap-2 w-full'>
                                                    <span className='bg-gray-400 text-white py-1 px-2 rounded-lg text-[10px]'>대기중</span>
                                                    <span className='text-sm text-muted-foreground'>41,533명 참여중</span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div>브리지스톤 B2드라이버</div>
                                                <div className='text-primary text-sm'>정상가1,066,660 원</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div className='text-muted-foreground text-[12px]'>응모가능 가격</div>
                                                <div>40,000 ~ 90,000 원</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                                <div className='w-full bg-[#F7F7F7] px-4 py-4 text-sm space-y-2'>
                                    <div>꼭 확인하세요</div>
                                    <div>[ 눈치게임 안내 사함 ]</div>
                                    <div className='max-w-[300px]'>눈치게임 당첨자는 게임 종료 후, 최저가에 유일하게 응모한유저가 당첨됩니다.</div>
                                </div>
                            </div>
                            <ScrollBar orientation='vertical' />
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value={(19).toString()}>
                        <ScrollArea className='h-[calc(100vh-10rem)] pb-4'>
                            <div className='space-y-4'>
                                <div className='w-full px-4 flex flex-col gap-2 justify-center items-center space-y-2 pt-8'>
                                    <div>게임 종료</div>
                                    <span className='py-0.5 w-3 bg-gray-600 rounded-full'></span>
                                    <div className='space-y-4'>
                                        <div className='w-[300px] flex gap-4'>
                                            <span className='text-muted-foreground'>응모기간</span>
                                            <span>4월 3일 (수)~4월9일 (화)</span>
                                        </div>
                                        <div className='w-[300px] flex gap-4'>
                                            <span className='text-muted-foreground'>결과 발표</span>
                                            <span>4월 11일 (목) 오전 11시 예정</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex gap-4 px-4'>
                                    <Button variant={'outline'} className='w-full rounded-lg py-4 text-lg border-2 border-primary justify-between'>
                                        <div>
                                            보유 응모권
                                        </div>
                                        <div>
                                            <span className='text-primary text-xl font-semibold'>3</span>
                                            <span>장</span>
                                        </div>
                                    </Button>
                                    <Button className='rounded-lg'>
                                        충전하기
                                    </Button>
                                </div>
                                <div className='flex flex-col gap-4 px-4 py-2'>
                                    <Card className='shadow-md shadow-black/20'>
                                        <CardContent className='p-0 pb-4 space-y-4'>
                                            <div className='relative bg-[#E2E2E2] w-full aspect-video flex justify-center items-center rounded-lg overflow-clip'>
                                                <Image src={'/images/blome.png'} width={200} height={200} alt='product-thumbnail' className='object-cover' />
                                                <div className='absolute top-0 left-0 w-full h-full bg-black/50 text-white flex justify-center items-center'>
                                                    <span>종료된 이벤트 입니다.</span>
                                                </div>
                                            </div>
                                            <div className='flex items-start gap-4 px-4'>
                                                <div className='flex items-center gap-2 w-full'>
                                                    <span className='bg-gray-400 text-white py-1 px-2 rounded-lg text-[10px]'>참여 완료</span>
                                                    <span className='text-sm text-muted-foreground'>41,533명 참여중</span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div>브리지스톤 B2드라이버</div>
                                                <div className='text-primary text-sm'>정상가1,066,660 원</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div className='text-muted-foreground text-[12px]'>응모가능 가격</div>
                                                <div>40,000 ~ 90,000 원</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <Button className='w-full py-6'>선정 결과 확인하기 {">"}</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className='shadow-md shadow-black/20'>
                                        <CardContent className='p-0 pb-4 space-y-4'>
                                            <div className='relative bg-[#E2E2E2] w-full aspect-video flex justify-center items-center rounded-lg overflow-clip'>
                                                <Image src={'/images/blome.png'} width={200} height={200} alt='product-thumbnail' className='object-cover' />
                                                <div className='absolute top-0 left-0 w-full h-full bg-black/50 text-white flex justify-center items-center'>
                                                    <span>종료된 이벤트 입니다.</span>
                                                </div>
                                            </div>
                                            <div className='flex items-start gap-4 px-4'>
                                                <div className='flex items-center gap-2 w-full'>
                                                    <span className='bg-gray-400 text-white py-1 px-2 rounded-lg text-[10px]'>참여 완료</span>
                                                    <span className='text-sm text-muted-foreground'>41,533명 참여중</span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div>브리지스톤 B2드라이버</div>
                                                <div className='text-primary text-sm'>정상가1,066,660 원</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div className='text-muted-foreground text-[12px]'>응모가능 가격</div>
                                                <div>40,000 ~ 90,000 원</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <Button className='w-full py-6'>선정 결과 확인하기 {">"}</Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            <ScrollBar orientation='vertical' />
                        </ScrollArea>
                    </TabsContent>
                    <TabsContent value={(20).toString()}>
                        <ScrollArea className='h-[calc(100vh-10rem)] pb-4'>
                            <div className='space-y-4'>
                                <div className='w-full px-4 flex flex-col gap-2 justify-center items-center space-y-2 pt-8'>
                                    <div>준비 중</div>
                                    <span className='py-0.5 w-3 bg-gray-600 rounded-full'></span>
                                    <div className='space-y-4'>
                                        <div className='w-[300px] flex gap-4'>
                                            <span className='text-muted-foreground'>응모기간</span>
                                            <span>4월 3일 (수)~4월9일 (화)</span>
                                        </div>
                                        <div className='w-[300px] flex gap-4'>
                                            <span className='text-muted-foreground'>결과 발표</span>
                                            <span>4월 11일 (목) 오전 11시 예정</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex gap-4 px-4'>
                                    <Button variant={'outline'} className='w-full rounded-lg py-4 text-lg border-2 border-primary justify-between'>
                                        <div>
                                            보유 응모권
                                        </div>
                                        <div>
                                            <span className='text-primary text-xl font-semibold'>3</span>
                                            <span>장</span>
                                        </div>
                                    </Button>
                                    <Button className='rounded-lg'>
                                        충전하기
                                    </Button>
                                </div>
                                <div className='flex flex-col gap-4 px-4 py-2'>
                                    <Card className='shadow-md shadow-black/20'>
                                        <CardContent className='p-0 pb-4 space-y-4'>
                                            <div className='relative bg-[#E2E2E2] w-full aspect-video flex justify-center items-center rounded-lg overflow-clip'>
                                                <Image src={'/images/blome.png'} width={200} height={200} alt='product-thumbnail' className='object-cover' />
                                                <div className='absolute top-0 left-0 w-full h-full bg-black/50 text-white flex justify-center items-center'>
                                                    <span>4월 20일 오픈 예정</span>
                                                </div>
                                            </div>
                                            <div className='flex items-start gap-4 px-4'>
                                                <div className='flex items-center gap-2 w-full'>
                                                    <span className='bg-gray-400 text-white py-1 px-2 rounded-lg text-[10px]'>참여 완료</span>
                                                    <span className='text-sm text-muted-foreground'>41,533명 참여중</span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div>브리지스톤 B2드라이버</div>
                                                <div className='text-primary text-sm'>정상가1,066,660 원</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div className='text-muted-foreground text-[12px]'>응모가능 가격</div>
                                                <div>40,000 ~ 90,000 원</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <Button className='w-full py-6 bg-[#B52929] hover:bg-[#B52929]/90 gap-1 items-center'>
                                                    <BellRing />
                                                    오픈 알림 받기
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card className='shadow-md shadow-black/20'>
                                        <CardContent className='p-0 pb-4 space-y-4'>
                                            <div className='relative bg-[#E2E2E2] w-full aspect-video flex justify-center items-center rounded-lg overflow-clip'>
                                                <Image src={'/images/blome.png'} width={200} height={200} alt='product-thumbnail' className='object-cover' />
                                                <div className='absolute top-0 left-0 w-full h-full bg-black/50 text-white flex justify-center items-center'>
                                                    <span>4월 20일 오픈 예정</span>
                                                </div>
                                            </div>
                                            <div className='flex items-start gap-4 px-4'>
                                                <div className='flex items-center gap-2 w-full'>
                                                    <span className='bg-gray-400 text-white py-1 px-2 rounded-lg text-[10px]'>참여 완료</span>
                                                    <span className='text-sm text-muted-foreground'>41,533명 참여중</span>
                                                </div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div>브리지스톤 B2드라이버</div>
                                                <div className='text-primary text-sm'>정상가1,066,660 원</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <div className='text-muted-foreground text-[12px]'>응모가능 가격</div>
                                                <div>40,000 ~ 90,000 원</div>
                                            </div>
                                            <div className='flex flex-col px-4 w-full'>
                                                <Button className='w-full py-6 bg-[#B52929] hover:bg-[#B52929]/90 gap-1 items-center'>
                                                    <BellRing />
                                                    오픈 알림 받기
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                            <ScrollBar orientation='vertical' />
                        </ScrollArea>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
