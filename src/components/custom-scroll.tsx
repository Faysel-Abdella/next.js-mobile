import React, { forwardRef, HTMLAttributes } from 'react'
import { cn } from "@/lib/utils"
// import { CustomScrollAreaProps } from '@/types/scroll-area'

export interface CustomScrollAreaProps extends HTMLAttributes<HTMLDivElement> {
  maxHeight?: string;
}


const CustomScrollArea = forwardRef<HTMLDivElement, CustomScrollAreaProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          className
        )}
        {...props}
      >
        <div 
          className={cn(
            "overflow-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100",
            "scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500",
            "pr-2"
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)

CustomScrollArea.displayName = 'CustomScrollArea'

export { CustomScrollArea }

