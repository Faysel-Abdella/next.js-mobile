'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface AlertContextType {
  currentAlert: string | null
  openAlert: (alertId: string) => void
  closeAlert: () => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

interface CustomAlertProps {
  children: React.ReactNode
}

export function CustomAlert({ children }: CustomAlertProps) {
  const [currentAlert, setCurrentAlert] = useState<string | null>(null)

  const openAlert = (alertId: string) => setCurrentAlert(alertId)
  const closeAlert = () => setCurrentAlert(null)

  return (
    <AlertContext.Provider value={{ currentAlert, openAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  )
}

export function useAlert() {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error('useAlert must be used within a CustomAlert provider')
  }
  return context
}

interface CustomAlertTriggerProps {
  alertId: string
  asChild?: boolean
  children: React.ReactNode
}

export function CustomAlertTrigger({ alertId, asChild, children }: CustomAlertTriggerProps) {
  const { openAlert } = useAlert()

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: () => openAlert(alertId),
    })
  }

  return (
    <button onClick={() => openAlert(alertId)} className="text-blue-500 hover:text-blue-600">
      {children}
    </button>
  )
}

interface CustomAlertContentProps {
  alertId: string
  children: React.ReactNode
  className?: string
}

export function CustomAlertContent({ alertId, children, className = '' }: CustomAlertContentProps) {
  const { currentAlert, closeAlert } = useAlert()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (currentAlert === alertId) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [currentAlert, alertId])

  if (!isVisible) return null

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`bg-white rounded-lg p-6 shadow-xl w-full max-w-sm transform transition-all duration-300 ${
          currentAlert === alertId ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
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
      className={` px-4 py-2 rounded transition-colors ${className}`}
    >
      {children}
    </button>
  )
}

