"use client"

import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Icons } from '@/components/ui/icons'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CustomDrawer, CustomDrawerTrigger, CustomDrawerContent } from '@/components/custom-drawer'

export default function Page() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

   
    return (
        <div className='relative flex flex-col h-full'>
            <CustomDrawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>

            <nav className='w-full flex flex-col gap-4 pt-4'>
                <div className='w-full px-4 mx-auto flex justify-between items-center '>
                    <Link href={".."} className='flex items-center gap-4'>
                        <Icons.arrowLeft className='size-5' />
                        Home
                    </Link>
                </div>
                <Separator />
            </nav>
          <div className="p-6 h-full">
            <h1 className="text-2xl font-bold mb-4">Tailwind Custom Drawer Demo</h1>
            <p className="mb-4">Click the button below to open the drawer.</p>
            
            <CustomDrawerTrigger asChild>
              <Button className="w-full">Open Drawer</Button>
            </CustomDrawerTrigger>
            
            <div className="mt-8">
              <p>This is some additional content in the main container.</p>
              <p>The drawer will overlay this content when opened, with a smooth transition.</p>
            </div>
          </div>
          
          <CustomDrawerContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">Drawer Content</h2>
            <p className="mb-4">This drawer uses Tailwind CSS for animations and fits the parent container width.</p>
            <Button onClick={() => setIsDrawerOpen(false)} className="w-full">Close Drawer</Button>
          </CustomDrawerContent>
        </CustomDrawer>
        </div>
    )
}
