'use client'
import { cn } from '@/lib/utils'
import * as TabsPrimitive from "@radix-ui/react-tabs"
import * as React from "react"
import { createContext, MutableRefObject, RefObject, useContext, useEffect, useRef, useState } from 'react'

const ScrollableTabContext = createContext<{
    activeIndex: number,
    containerRef: RefObject<HTMLDivElement> | null,
    itemRefs: MutableRefObject<(HTMLButtonElement | null)[]>,
    setActiveIndex: (value: number) => void
}>({
    activeIndex: 1,
    containerRef: null,
    itemRefs: { current: [] },
    setActiveIndex: (value: number) => { }
})

const ScrollableTabsList = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {

    const [activeIndex, setActiveIndex] = useState(1)
    const containerRef = useRef<HTMLDivElement>(null)
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([])

    useEffect(() => {
        if (containerRef.current && itemRefs.current[activeIndex]) {
            const container = containerRef.current
            const activeItem = itemRefs.current[activeIndex]
            const containerWidth = container.offsetWidth
            const itemWidth = activeItem.offsetWidth
            const scrollLeft = activeItem.offsetLeft - containerWidth / 2 + itemWidth / 2

            container.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            })
        }
    }, [activeIndex])


    return (
        <ScrollableTabContext.Provider value={{ activeIndex, containerRef, itemRefs, setActiveIndex }}>
            <TabsPrimitive.List
                ref={containerRef}
                style={{ scrollBehavior: 'smooth' }}
                className={cn(
                    "flex items-center overflow-x-auto snap-x snap-mandatory scrollbar-hide",
                    className
                )}
                {...props}
            />
        </ScrollableTabContext.Provider>

    )
})

ScrollableTabsList.displayName = "ScrollableTabsList"


const ScrollableTabsTrigger = React.forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { index: number }
>(({ index, className, ...props }, ref) => {

    const { activeIndex, itemRefs, setActiveIndex } = useContext(ScrollableTabContext)
    const handleItemClick = (index: number) => {
        setActiveIndex(index)
    }
    return (
        <TabsPrimitive.Trigger
            ref={el => { itemRefs.current[index] = el }}
            onClick={() => handleItemClick(index)}
            data-active={activeIndex === index}
            className={cn("snap-center shrink-0", className)}
            aria-pressed={activeIndex === index}
            {...props}
        />
    )
})
ScrollableTabsTrigger.displayName = "ScrollableTabsTrigger"


export { ScrollableTabsList, ScrollableTabsTrigger }
