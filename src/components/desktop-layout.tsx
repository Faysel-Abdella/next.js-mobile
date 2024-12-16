import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import Image from 'next/image'
import { ScrollArea, ScrollBar } from './ui/scroll-area'

const pageLinks = [
    { name: "home", path: "/home" },
    { name: "signed", path: "/signed" },
    { name: "agree-to-terms", path: "/agree-to-terms" },
    { name: "terms-of-use", path: "/terms-of-use" },
    { name: "privacy-policy", path: "/privacy-policy" },
    { name: "consent-marketing", path: "/consent-marketing" },
    { name: "enter-the-email", path: "/enter-the-email" },
    { name: "enter-your-password", path: "/enter-your-password" },
    { name: "enter-the-recommender", path: "/enter-the-recommender" },
    { name: "verifying-your-identity-dialog", path: "/verifying-your-identity-dialog" },
    { name: "verifying-your-identity", path: "/verifying-your-identity" },
    { name: "find-password", path: "/find-password" },
    { name: "alarm", path: "/alarm" },
    { name: "confirm-your-winnings", path: "/confirm-your-winnings" },
    { name: "enter-address", path: "/enter-address" },
    { name: "purchase-1", path: "/purchase-1" },
    { name: "purchase-2", path: "/purchase-2" },
    { name: "purchase-3", path: "/purchase-3" },
    { name: "payment-successful", path: "/payment-successful" },
    { name: "no-registered-receipt", path: "/no-registered-receipt" },
    { name: "receipt-registration-check", path: "/receipt-registration-check" },
    { name: "receipt-photo-filming", path: "/receipt-photo-filming" },
    { name: "make-retake", path: "/make-retake" },
    { name: "registration-completed", path: "/registration-completed" },
    { name: "/shop/signing", path: "/shop/signing" },
    { name: "/shop/questions", path: "/shop/questions" },
    { name: "/shop/event-complete", path: "/shop/event-complete" },
    { name: "manage-insurance", path: "/manage-insurance" },
    { name: "insurance", path: "/insurance" },
    { name: "no-points-history", path: "/no-points-history" },
    { name: "point-convert", path: "/point-convert" },
    { name: "convert-points", path: "/convert-points" },
    { name: "conversion-complete", path: "/conversion-complete" },
    { name: "announcement-1", path: "/announcement-1" },
    { name: "announcement-2", path: "/announcement-2" },
    { name: "question-area", path: "/question-area" },
    { name: "contact-us", path: "/contact-us" },
    { name: "current-point-1", path: "/current-point-1" },
    { name: "current-point-2", path: "/current-point-2" },
    { name: "current-point-3", path: "/current-point-3" },
    { name: "beginning", path: "/beginning" },
    { name: "collect-more-points", path: "/collect-more-points" },
    { name: "receipt-registration", path: "/receipt-registration" },
    { name: "moving-image", path: "/moving-image" },
    { name: "feed-1", path: "/feed-1" },
    { name: "feed-2", path: "/feed-2" },
    // { name: "feed-3", path: "/feed-3" },
    { name: "my-page", path: "/my-page" },
    { name: "point-history-1", path: "/point-history-1" },
    { name: "point-history-2", path: "/point-history-2" },
    { name: "point-conversion", path: "/point-conversion" },
    { name: "point-conversion-completed", path: "/point-conversion-completed" },
    { name: "no-ticket-history", path: "/no-ticket-history" },
    { name: "ticket-history-available", path: "/ticket-history-available" },
    { name: "insurance-management-unavailable", path: "/insurance-management-unavailable" },
    { name: "insurance-management-available", path: "/insurance-management-available" },
    { name: "insurance-details", path: "/insurance-details" },
    { name: "notification-settings", path: "/notification-settings" },
    { name: "notices", path: "/notices" },
    { name: "notice-details", path: "/notice-details" },
    { name: "faq", path: "/faq" },
    { name: "inquiry-not-found", path: "/inquiry-not-found" },
    { name: "inquiry-records", path: "/inquiry-records" },
    { name: "contact-us-2", path: "/contact-us-2" },
    { name: "response-pending-details", path: "/response-pending-details" },
    { name: "response-completed-details", path: "/response-completed-details" },
]


export default function DesktopLayout() {
    return (
        <div className='w-full h-full'>
            <Tabs defaultValue='pages' className='h-full'>
                <TabsList>
                    <TabsTrigger value='content'>content</TabsTrigger>
                    <TabsTrigger value='pages'>pages</TabsTrigger>
                </TabsList>
                <TabsContent value='content' className='h-full'>
                    <div className='h-[80%] flex flex-col gap-1 justify-center items-center'>
                        <div>
                            <div className='text-4xl font-extrabold py-10 '>
                                <Image src={'/images/logo2.png'} width={100} height={100} alt='logo2' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='text-4xl font-extrabold flex flex-col gap-2 text-muted-foreground'><span>즐거운</span><span>앱테크의 시작!</span></div>
                                <div className='text-4xl font-extrabold text-primary'>데일리밥</div>
                            </div>
                            <div className='flex gap-4 pt-10 pb-4'>
                                <Link href={'/'} className='flex justify-center gap-1 items-center py-2 px-4 bg-black text-white rounded-md'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.60336 9.59667L2.07031 17.5047C2.0706 17.5063 2.07116 17.5077 2.07144 17.5094C2.30246 18.368 3.09543 19.0003 4.03655 19.0003C4.41276 19.0003 4.76598 18.8997 5.06888 18.7231L5.09294 18.7092L13.5723 13.8697L9.60336 9.59667Z" fill="#EB3131" />
                                        <path d="M17.222 8.25002L17.2148 8.24512L13.554 6.14613L9.42969 9.77598L13.5684 13.8688L17.2098 11.7907C17.8482 11.4498 18.2816 10.7842 18.2816 10.0165C18.2816 9.2544 17.854 8.59202 17.222 8.25002Z" fill="#F6B60B" />
                                        <path d="M2.06909 2.49574C2.0238 2.6609 2 2.8339 2 3.01354V16.9874C2 17.1667 2.02352 17.3403 2.06937 17.5048L9.86167 9.79911L2.06909 2.49574Z" fill="#5778C5" />
                                        <path d="M9.65918 9.99988L13.5583 6.14455L5.08848 1.28762C4.78062 1.10525 4.42132 0.999998 4.03684 0.999998C3.09571 0.999998 2.30168 1.63341 2.0706 2.49314C2.07031 2.49398 2.07031 2.49454 2.07031 2.49531L9.65918 9.99988Z" fill="#3BAD49" />
                                    </svg>
                                    Google Play
                                </Link>
                                <Link href={'/'} className='flex justify-center gap-1 items-center py-2 px-4 bg-black text-white rounded-md'>
                                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5808 18.2778C14.6009 19.2277 13.5311 19.0777 12.5012 18.6278C11.4113 18.1678 10.4114 18.1478 9.26159 18.6278C7.82177 19.2477 7.06187 19.0677 6.20198 18.2778C1.3226 13.2485 2.0425 5.58942 7.58181 5.30946C8.93164 5.37945 9.87152 6.04936 10.6614 6.10935C11.8413 5.86939 12.9711 5.17947 14.231 5.26946C15.7408 5.38945 16.8806 5.98937 17.6305 7.06923C14.5109 8.939 15.2508 13.0485 18.1105 14.1983C17.5405 15.6981 16.8006 17.188 15.5708 18.2878L15.5808 18.2778ZM10.5614 5.24946C10.4114 3.01975 12.2212 1.17998 14.301 1C14.5909 3.57967 11.9613 5.49943 10.5614 5.24946Z" fill="white" />
                                    </svg>
                                    App Store
                                </Link>
                            </div>
                            <Link href={'/'} className='flex justify-center gap-1 items-center py-3 px-4 bg-yellow-400 text-black rounded-md'>
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.4991 1C15.4706 1 19.5 4.34994 19.5 8.48343C19.5 12.616 15.4706 15.9659 10.5 15.9659C10.0051 15.965 9.51073 15.9314 9.01971 15.8654L5.24143 18.5013C4.812 18.7435 4.66029 18.717 4.83686 18.1237L5.60143 14.7609C3.13286 13.4261 1.5 11.1129 1.5 8.48343C1.5 4.35086 5.52771 1 10.4991 1Z" fill="black" />
                                </svg>
                                카카오톡 상담하기
                            </Link>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value='pages'>
                    <ScrollArea className='h-[90vh]'>
                        <div className="flex flex-col gap-2">
                            {pageLinks.map(link => (
                                <Link key={link.path} href={link.path} className='flex items-center'><ArrowRight />{" "}{link.name}</Link>
                            ))}
                        </div>
                        <ScrollBar orientation='vertical' />
                    </ScrollArea>
                </TabsContent>
            </Tabs>
        </div >
    )
}
