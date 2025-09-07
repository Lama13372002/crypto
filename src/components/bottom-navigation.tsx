'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  CreditCard,
  ArrowRightLeft,
  User,
  Banknote,
  Home
} from 'lucide-react'

interface BottomNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: 'dashboard', label: 'Home', icon: Home },
  { id: 'deposit', label: 'Deposit', icon: CreditCard },
  { id: 'exchange', label: 'Exchange', icon: ArrowRightLeft },
  { id: 'withdrawal', label: 'Withdrawal', icon: Banknote },
  { id: 'profile', label: 'Profile', icon: User },
]

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200/50 px-2 py-1 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center px-2 py-1.5 rounded-lg transition-all duration-200 min-w-0",
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon
                size={16}
                className={cn(
                  "mb-0.5 transition-transform duration-200",
                  isActive && "scale-110"
                )}
              />
              <span className={cn(
                "text-xs font-medium transition-all duration-200 leading-none",
                isActive ? "text-white" : "text-gray-600"
              )}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
