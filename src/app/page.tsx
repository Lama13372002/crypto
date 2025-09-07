'use client'

import { useState } from 'react'
import { BottomNavigation } from '@/components/bottom-navigation'
import { Dashboard } from '@/components/dashboard'
import { Exchange } from '@/components/exchange'
import { Profile } from '@/components/profile'
import { Deposit } from '@/components/deposit'
import { Withdrawal } from '@/components/withdrawal'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />
      case 'deposit':
        return <Deposit />
      case 'exchange':
        return <Exchange />
      case 'withdrawal':
        return <Withdrawal />
      case 'profile':
        return <Profile />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {renderContent()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
