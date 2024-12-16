'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface AlertContextType {
    isOpen: boolean
    openAlert: () => void
    closeAlert: () => void
  }
  
const AlertContext = createContext<AlertContextType | undefined>(undefined)

interface CustomAlertProps {
    children: React.ReactNode
    open?: boolean
    onOpenChange?: (open: boolean) => void
  }

  export function CustomAlert({ children, open, onOpenChange }: CustomAlertProps) {
    const [isOpen, setIsOpen] = useState(open || false)
  
    useEffect(() => {
      if (open !== undefined) {
        setIsOpen(open)
      }
    }, [open])
  
    const openAlert = () => {
      setIsOpen(true)
      onOpenChange?.(true)
    }
  
    const closeAlert = () => {
      setIsOpen(false)
      onOpenChange?.(false)
    }
  
    return (
      <AlertContext.Provider value={{ isOpen, openAlert, closeAlert }}>
        {children}
      </AlertContext.Provider>
    )
  }

function useAlert() {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error('useAlert must be used within a CustomAlert provider')
  }
  return context
}

interface CustomAlertTriggerProps {
  asChild?: boolean
  children: React.ReactNode
}

export function CustomAlertTrigger({ asChild, children }: CustomAlertTriggerProps) {
  const { openAlert } = useAlert()

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: openAlert,
    })
  }

  return (
    <button onClick={openAlert} className="text-blue-500 hover:text-blue-600">
      {children}
    </button>
  )
}

interface CustomAlertContentProps {
  children: React.ReactNode
  className?: string
}

export function CustomAlertContent({ children, className = '' }: CustomAlertContentProps) {
  const { isOpen } = useAlert()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <div className={`absolute inset-0 flex items-center justify-center bg-black/60 z-10 p-4 min-h-screen transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className={`bg-white rounded-lg p-6 shadow-xl max-w-sm w-full transform transition-all duration-300 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        } ${className}`}
      >
        {children}
      </div>
    </div>
  )
}

interface CustomAlertActionProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function CustomAlertAction({ children, className = '', onClick }: CustomAlertActionProps) {
  const { closeAlert } = useAlert()

  const handleClick = () => {
    if (onClick) onClick()
    closeAlert()
  }

  return (
    <button
      onClick={handleClick}
      className={` px-4 py-2 rounded  transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

interface CustomAlertCancelProps {
  children: React.ReactNode
  className?: string
}

export function CustomAlertCancel({ children, className = '' }: CustomAlertCancelProps) {
  const { closeAlert } = useAlert()

  return (
    <button
      onClick={closeAlert}
      className={` px-4 py-2 rounded transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

