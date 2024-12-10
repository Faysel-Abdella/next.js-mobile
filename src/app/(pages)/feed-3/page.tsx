import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { ScrollableTabsList, ScrollableTabsTrigger } from '@/components/ui/scrollable-tabs'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { ArrowDownIcon, ArrowRightIcon, BellRing, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Separator } from '@/components/ui/separator'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { DialogClose } from '@/components/ui/dialog'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        paymentMethod: "PayPal",
    },
    {
        invoice: "INV006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        paymentMethod: "Bank Transfer",
    },
    {
        invoice: "INV007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        paymentMethod: "Credit Card",
    },
]


export default function Page() {
    const episodes = [
        { id: 1, number: 17 },
        { id: 2, number: 18 },
        { id: 3, number: 19 },
        { id: 4, number: 20 },
        { id: 5, number: 21 },
    ]
    return (
        <div className='relative py-6 flex flex-col justify-start items-center h-full'>
            <nav className='w-full flex flex-col gap-4 pb-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        <span className='text-lg'>
                            눈치 게임
                        </span>
                    </Link>
                </div>
            </nav>
            <ScrollArea className='h-full'>
                <Carousel className="w-full bg-[#E2E2E2]">
                    <CarouselContent className='bg-[#E2E2E2] '>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <CarouselItem key={index} className='relative'>
                                <div className='bg-[#E2E2E2] w-full aspect-video flex justify-center items-center'>
                                    <Image src={'/images/blome.png'} width={200} height={200} alt='product-thumbnail' className='object-cover' />
                                </div>
                                <span className='absolute right-2 bottom-2 bg-black/50 text-white px-2 rounded-full text-sm'>{index + 1}/{6}</span>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className='w-full pt-4 space-y-4 gap-2'>
                    <div className='flex flex-col px-4 w-full'>
                        <div className='text-xl'>브리지스톤 B2드라이버</div>
                        <div className='text-primary text-sm line-through'>정상가1,066,660 원</div>
                    </div>
                    <div className='flex flex-col px-4 w-full'>
                        <div className='text-muted-foreground text-[12px]'>응모가능 가격</div>
                        <div className='text-primary text-xl'>40,000 ~ 90,000 원</div>
                    </div>
                    <div className='flex px-4 w-ful items-center'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-6'>
                            <g clipPath="url(#clip0_1332_55531)">
                                <path d="M11.8172 4.08066C11.8172 3.24316 11.1297 2.55566 10.2922 2.55566H3.23594C2.39844 2.55566 1.71094 3.24316 1.71094 4.08066V5.69316H11.8172V4.08066Z" fill="black" />
                                <path d="M1.71094 5.68652V11.1365C1.71094 11.974 2.39844 12.6615 3.23594 12.6615H10.2922C11.1297 12.6615 11.8172 11.974 11.8172 11.1365V5.68652H1.71094Z" fill="#E6ECEB" />
                                <path d="M4.5 6.39355H3.25625C3.09747 6.39355 2.96875 6.52227 2.96875 6.68105V7.92481C2.96875 8.08359 3.09747 8.21231 3.25625 8.21231H4.5C4.65878 8.21231 4.7875 8.08359 4.7875 7.92481V6.68105C4.7875 6.52227 4.65878 6.39355 4.5 6.39355Z" fill="black" />
                                <path d="M7.375 6.39355H6.13125C5.97247 6.39355 5.84375 6.52227 5.84375 6.68105V7.92481C5.84375 8.08359 5.97247 8.21231 6.13125 8.21231H7.375C7.53378 8.21231 7.6625 8.08359 7.6625 7.92481V6.68105C7.6625 6.52227 7.53378 6.39355 7.375 6.39355Z" fill="black" />
                                <path d="M10.2422 6.39355H8.99844C8.83966 6.39355 8.71094 6.52227 8.71094 6.68105V7.92481C8.71094 8.08359 8.83966 8.21231 8.99844 8.21231H10.2422C10.401 8.21231 10.5297 8.08359 10.5297 7.92481V6.68105C10.5297 6.52227 10.401 6.39355 10.2422 6.39355Z" fill="black" />
                                <path d="M4.5 9.47461H3.25625C3.09747 9.47461 2.96875 9.60333 2.96875 9.76211V11.0059C2.96875 11.1646 3.09747 11.2934 3.25625 11.2934H4.5C4.65878 11.2934 4.7875 11.1646 4.7875 11.0059V9.76211C4.7875 9.60333 4.65878 9.47461 4.5 9.47461Z" fill="black" />
                                <path d="M7.375 9.47461H6.13125C5.97247 9.47461 5.84375 9.60333 5.84375 9.76211V11.0059C5.84375 11.1646 5.97247 11.2934 6.13125 11.2934H7.375C7.53378 11.2934 7.6625 11.1646 7.6625 11.0059V9.76211C7.6625 9.60333 7.53378 9.47461 7.375 9.47461Z" fill="black" />
                                <path d="M10.8734 14.1131C9.39219 14.1131 8.17969 12.9068 8.17969 11.4193C8.17969 9.93184 9.38594 8.72559 10.8734 8.72559C12.3609 8.72559 13.5672 9.93184 13.5672 11.4193C13.5672 12.9068 12.3609 14.1131 10.8734 14.1131Z" fill="black" />
                                <path d="M10.875 9.00644C12.2063 9.00644 13.2875 10.0877 13.2875 11.4189C13.2875 12.7502 12.2063 13.8314 10.875 13.8314C9.54375 13.8314 8.4625 12.7502 8.4625 11.4189C8.4625 10.0877 9.54375 9.00644 10.875 9.00644ZM10.875 8.4502C9.2375 8.4502 7.90625 9.78145 7.90625 11.4189C7.90625 13.0564 9.2375 14.3877 10.875 14.3877C12.5125 14.3877 13.8438 13.0564 13.8438 11.4189C13.8438 9.78145 12.5125 8.4502 10.875 8.4502Z" fill="white" />
                                <path d="M10.875 10.1562V11.4188H11.8938" fill="black" />
                                <path d="M10.875 10.1562V11.4188H11.8938" stroke="white" strokeWidth="0.85" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.35938 1.7998V3.16855" stroke="#E6ECEB" strokeWidth="1.89" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.16406 1.7998V3.16855" stroke="#E6ECEB" strokeWidth="1.89" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1332_55531">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className=''>
                            <span>2일 남음</span>
                            <span className='text-muted-foreground text-sm'>2024년 7월 31일(수)까지</span>
                        </div>
                    </div>
                    <div className='flex px-4 w-full items-center gap-2'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-7'>
                            <g clipPath="url(#clip0_1332_55553)">
                                <path d="M3.86719 6.6748C4.69561 6.6748 5.36719 6.00323 5.36719 5.1748C5.36719 4.34638 4.69561 3.6748 3.86719 3.6748C3.03876 3.6748 2.36719 4.34638 2.36719 5.1748C2.36719 6.00323 3.03876 6.6748 3.86719 6.6748Z" fill="#E6ECEB" />
                                <path d="M1.90321 9.92441C1.44696 9.92441 1.13446 9.46191 1.29071 9.03691C1.67197 8.02441 2.67822 7.24316 3.86572 7.24316C5.05322 7.24316 6.05947 8.02441 6.44072 9.03691C6.60322 9.46816 6.29071 9.92441 5.82821 9.92441H1.90321Z" fill="#E6ECEB" />
                                <path d="M11.125 6.6748C11.9534 6.6748 12.625 6.00323 12.625 5.1748C12.625 4.34638 11.9534 3.6748 11.125 3.6748C10.2966 3.6748 9.625 4.34638 9.625 5.1748C9.625 6.00323 10.2966 6.6748 11.125 6.6748Z" fill="#E6ECEB" />
                                <path d="M9.16884 9.92441C8.71259 9.92441 8.40009 9.46191 8.55634 9.03691C8.93759 8.02441 9.94384 7.24316 11.1313 7.24316C12.3188 7.24316 13.3251 8.02441 13.7063 9.03691C13.8688 9.46816 13.5563 9.92441 13.0938 9.92441H9.16259H9.16884Z" fill="#E6ECEB" />
                                <path d="M7.4875 7.5375C8.44709 7.5375 9.225 6.75959 9.225 5.8C9.225 4.84041 8.44709 4.0625 7.4875 4.0625C6.52791 4.0625 5.75 4.84041 5.75 5.8C5.75 6.75959 6.52791 7.5375 7.4875 7.5375Z" fill="black" />
                                <path d="M5.21414 11.5994C4.87664 11.5994 4.55789 11.4307 4.36414 11.1557C4.17039 10.8744 4.12664 10.5119 4.24539 10.1932C4.75164 8.83691 6.05789 7.93066 7.50164 7.93066C8.94539 7.93066 10.2516 8.84316 10.7579 10.1932C10.8766 10.5182 10.8329 10.8744 10.6391 11.1557C10.4454 11.4369 10.1266 11.5994 9.78914 11.5994H5.22664H5.21414Z" fill="black" />
                                <path d="M7.49368 8.20566C8.87493 8.20566 10.0437 9.11191 10.4874 10.2869C10.6749 10.7869 10.3124 11.3182 9.77493 11.3182H5.21243C4.68118 11.3182 4.31868 10.7869 4.49993 10.2869C4.93743 9.11191 6.11243 8.20566 7.49368 8.20566ZM7.49368 7.64941C5.93743 7.64941 4.52493 8.63066 3.98118 10.0932C3.83118 10.4994 3.88743 10.9557 4.13118 11.3119C4.37493 11.6682 4.78118 11.8744 5.21243 11.8744H9.77493C10.2062 11.8744 10.6124 11.6619 10.8562 11.3119C11.1062 10.9557 11.1624 10.4994 11.0062 10.0932C10.4624 8.63066 9.04993 7.64941 7.49368 7.64941Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1332_55553">
                                    <rect width="15" height="15" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <div className=''>
                            1,250명 참여
                        </div>
                    </div>
                </div>
                <div className='w-full py-2'>
                    <Separator className='h-1' />
                    <div className='h-fit flex flex-col w-full'>
                        <Button variant={'ghost'} className='w-full py-6 justify-between'>
                            <span> 오픈 알림 받기</span>
                            <Icons.arrowLeft className='size-5 rotate-180' />
                        </Button>
                    </div>
                    <Separator className='h-1' />
                </div>
                <Image src={'/images/product-bill.png'} width={400} height={1200} alt='product-thumbnail' className='object-cover w-full' />
            </ScrollArea>
            <Drawer>
                <div className='absolute w-full bottom-14 left-0 px-4'>
                    <DrawerTrigger asChild className=''>
                        <Button className='w-full py-6 rounded-2xl bg-[#E6E6E6] hover:bg-[#dfdcdc]'>
                            <div className='flex items-center w-full gap-2'>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='size-16 '>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.31744 0.315244C8.82802 -0.105081 8.10502 -0.105081 7.6156 0.315243L7.14977 0.715303C6.83492 0.985703 6.4103 1.09036 6.00585 0.997255L5.40746 0.8595C4.77877 0.714767 4.13858 1.05076 3.90056 1.65039L3.67401 2.2211C3.52088 2.60685 3.19353 2.89685 2.79214 3.00237L2.19828 3.15847C1.57433 3.32249 1.16362 3.9175 1.23152 4.55906L1.29614 5.16969C1.33982 5.58241 1.18474 5.99132 0.878364 6.27129L0.425072 6.68549C-0.0511812 7.12068 -0.138329 7.83841 0.219937 8.37493L0.560931 8.88558C0.791408 9.23073 0.844123 9.66487 0.702943 10.0552L0.494064 10.6326C0.274606 11.2392 0.530985 11.9153 1.09755 12.2238L1.63679 12.5175C2.00127 12.716 2.2497 13.0759 2.30606 13.4871L2.38945 14.0955C2.47706 14.7346 3.01823 15.2141 3.6633 15.224L4.27726 15.2334C4.69224 15.2398 5.07948 15.4431 5.32047 15.781L5.67702 16.2809C6.05163 16.8061 6.75362 16.9791 7.32941 16.6882L7.87744 16.4112C8.24785 16.224 8.68519 16.224 9.0556 16.4112L9.60363 16.6882C10.1794 16.9791 10.8814 16.8061 11.256 16.2809L11.6126 15.781C11.8536 15.4431 12.2408 15.2398 12.6558 15.2334L13.2697 15.224C13.9148 15.2141 14.456 14.7346 14.5436 14.0955L14.627 13.4871C14.6833 13.0759 14.9318 12.716 15.2963 12.5175L15.8355 12.2238C16.4021 11.9153 16.6584 11.2392 16.439 10.6326L16.2301 10.0552C16.0889 9.66488 16.1416 9.23073 16.3721 8.88558L16.7131 8.37493C17.0714 7.83841 16.9842 7.12068 16.508 6.68549L16.0547 6.27129C15.7483 5.99132 15.5932 5.58241 15.6369 5.16969L15.7015 4.55906C15.7694 3.9175 15.3587 3.32249 14.7348 3.15847L14.1409 3.00237C13.7395 2.89685 13.4122 2.60685 13.259 2.2211L13.0325 1.65039C12.7945 1.05076 12.1543 0.714767 11.5256 0.8595L10.9272 0.997255C10.5227 1.09036 10.0981 0.985703 9.78327 0.715303L9.31744 0.315244ZM9.4278 5.61609C9.05927 4.87904 8.00747 4.87905 7.63894 5.61609L7.32456 6.24486C7.17503 6.54392 6.88594 6.74845 6.55416 6.78993L6.08172 6.84898C5.28149 6.94901 4.92274 7.90648 5.46022 8.50772L5.8613 8.9564C6.06428 9.18346 6.15272 9.49064 6.10155 9.79088L5.96851 10.5715C5.83091 11.3788 6.669 12.0002 7.4015 11.6339L8.08615 11.2916C8.36768 11.1508 8.69905 11.1508 8.98058 11.2916L9.66843 11.6355C10.4003 12.0015 11.238 11.3814 11.1017 10.5745L10.969 9.78937C10.9185 9.48999 11.0066 9.18384 11.2087 8.95724L11.6101 8.50717C12.1465 7.90569 11.7875 6.94929 10.9878 6.84933L10.5126 6.78993C10.1808 6.74845 9.89171 6.54392 9.74218 6.24486L9.4278 5.61609Z" fill="black" />
                                </svg>
                                <div className='flex flex-col items-start'>
                                    <span className='text-black text-sm'>나의 참여 현황 보기</span>
                                    <span className='text-muted-foreground text-[10px]'>나의 도전 결과는?</span>
                                </div>
                            </div>
                            <ArrowRightIcon className='text-black' />
                        </Button>
                    </DrawerTrigger>
                </div>
                <DrawerContent className='rounded-t-3xl pt-4 px-4'>
                    <DrawerHeader className='w-full flex justify-between'>
                        <DrawerTitle>나의 참여 현황</DrawerTitle>
                        <DialogClose>
                            <X />
                        </DialogClose>
                    </DrawerHeader>
                    <Separator className='bg-black' />
                    <DrawerTitle></DrawerTitle>
                    <Table>
                        <TableHeader className='bg-[#F5F5F5]'>
                            <TableRow className='h-14 text-center'>
                                <TableHead className='text-black text-center'>번호</TableHead>
                                <TableHead className='text-black text-center'>참여일</TableHead>
                                <TableHead className='text-black text-center'>참여 가격</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow className='h-14 text-center'>
                                <TableCell>{2}</TableCell>
                                <TableCell>2025년 9월 12일</TableCell>
                                <TableCell>40,539 원</TableCell>
                            </TableRow>
                            <TableRow className='h-14 text-center'>
                                <TableCell>{1}</TableCell>
                                <TableCell>2025년 9월 11일</TableCell>
                                <TableCell>40,700 원</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Separator />
                    <div className='py-8' />
                    <Button className='rounded-xl py-6'>확인</Button>
                </DrawerContent>
            </Drawer>
            <div className='absolute w-full bottom-0 space-y-2'>
                <Button className='w-full py-6 rounded-none justify-between hover:bg-primary'>
                    <div>
                        <span>이벤트 종료까지</span>
                    </div>
                    <span>3일 7시간 13분 27초</span>
                </Button>
            </div>
        </div>
    )
}
