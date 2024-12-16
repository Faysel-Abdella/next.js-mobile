"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

interface DrawerContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined)

export function CustomDrawer({ 
  children, 
  open, 
  onOpenChange 
}: { 
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <DrawerContext.Provider value={{ open, onOpenChange }}>
      <div className="relative h-full w-full">
        {children}
      </div>
    </DrawerContext.Provider>
  )
}

export function CustomDrawerTrigger({ 
  children, 
  asChild 
}: { 
  children: React.ReactNode
  asChild?: boolean
}) {
  const context = useContext(DrawerContext)
  if (!context) throw new Error('CustomDrawerTrigger must be used within CustomDrawer')

  const { onOpenChange } = context

  const trigger = asChild ? (
    React.Children.only(children)
  ) : (
    <button>{children}</button>
  )

  return React.cloneElement(trigger as React.ReactElement, {
    onClick: () => onOpenChange(true)
  })
}

export function CustomDrawerContent({ 
  children,
  className = ""
}: { 
  children: React.ReactNode
  className?: string
}) {
  const context = useContext(DrawerContext)
  if (!context) throw new Error('CustomDrawerContent must be used within CustomDrawer')

  const { open, onOpenChange } = context
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (open) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300) // match transition duration
      return () => clearTimeout(timer)
    }
  }, [open])

  if (!isVisible && !open) return null

  return (
    <div 
      className={`
        absolute inset-0 bg-black bg-opacity-60 z-50 flex items-end justify-center
        transition-opacity duration-500 ease-in-out
        ${open ? 'opacity-100' : 'opacity-0'}
      `}
      onClick={() => onOpenChange(false)}
    >
      <div 
        className={`
          bg-white rounded-t-xl w-full overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${open ? 'translate-y-0' : 'translate-y-full'}
          ${className}
        `}
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: 'calc(100% - 4rem)' }}
      >
        {children}
      </div>
    </div>
  )
}

