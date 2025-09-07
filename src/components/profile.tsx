'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  User,
  Shield,
  CheckCircle,
  AlertCircle,
  Settings,
  Bell,
  Lock,
  Smartphone,
  Mail,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronRight,
  Star
} from 'lucide-react'

export function Profile() {
  const verificationSteps = [
    {
      title: 'Email Verification',
      status: 'completed',
      description: 'test@example.com',
      icon: Mail
    },
    {
      title: 'Phone Verification',
      status: 'completed',
      description: '+1 (000) 000-0000',
      icon: Smartphone
    },
    {
      title: 'Identity Verification',
      status: 'pending',
      description: 'Upload government ID',
      icon: User
    },
    {
      title: 'Address Verification',
      status: 'not_started',
      description: 'Proof of residence required',
      icon: Shield
    }
  ]

  const securitySettings = [
    { title: '2FA Authentication', description: 'Secure your account', enabled: true, icon: Lock },
    { title: 'Biometric Login', description: 'Fingerprint & Face ID', enabled: false, icon: Smartphone },
    { title: 'Email Notifications', description: 'Transaction alerts', enabled: true, icon: Bell },
    { title: 'SMS Notifications', description: 'Security updates', enabled: false, icon: Mail }
  ]

  const menuItems = [
    { title: 'Transaction History', icon: CreditCard },
    { title: 'Referral Program', icon: Star },
    { title: 'Help & Support', icon: HelpCircle },
    { title: 'Settings', icon: Settings }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-500" size={20} />
      case 'pending':
        return <AlertCircle className="text-yellow-500" size={20} />
      default:
        return <AlertCircle className="text-gray-400" size={20} />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Verified</Badge>
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Pending</Badge>
      default:
        return <Badge variant="secondary">Not Started</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6 pb-24">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>

        {/* User Info Card */}
        <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
              <p className="text-gray-500">Premium Member</p>
              <div className="flex items-center gap-2 mt-1">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Level 2</Badge>
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">VIP</Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-2xl">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">$15,750</p>
              <p className="text-gray-500 text-sm">Total Balance</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">47</p>
              <p className="text-gray-500 text-sm">Transactions</p>
            </div>
          </div>
        </Card>

        {/* Verification Status */}
        <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="text-blue-600" size={20} />
            <h3 className="text-lg font-semibold text-gray-900">Verification Status</h3>
          </div>

          <div className="space-y-4">
            {verificationSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <Icon className="text-gray-600" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{step.title}</p>
                      <p className="text-gray-500 text-sm">{step.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(step.status)}
                    {getStatusBadge(step.status)}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-2xl">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-full mt-1">
                <AlertCircle className="text-blue-600" size={16} />
              </div>
              <div>
                <p className="font-medium text-blue-900">Complete your verification</p>
                <p className="text-blue-700 text-sm mt-1">Increase your daily limits and unlock premium features by completing all verification steps.</p>
                <Button variant="outline" className="mt-3 border-blue-200 text-blue-700 hover:bg-blue-100">
                  Continue Verification
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Security Settings */}
        <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Security & Privacy</h3>

          <div className="space-y-4">
            {securitySettings.map((setting, index) => {
              const Icon = setting.icon
              return (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <Icon className="text-gray-600" size={16} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{setting.title}</p>
                      <p className="text-gray-500 text-sm">{setting.description}</p>
                    </div>
                  </div>
                  <div className={`w-12 h-6 rounded-full relative transition-colors ${
                    setting.enabled ? 'bg-blue-500' : 'bg-gray-300'
                  }`}>
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                      setting.enabled ? 'translate-x-7' : 'translate-x-1'
                    }`} />
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Menu Items */}
        <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl mb-6">
          <div className="space-y-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={index}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <Icon className="text-gray-600" size={16} />
                    </div>
                    <span className="font-medium text-gray-900">{item.title}</span>
                  </div>
                  <ChevronRight className="text-gray-400" size={16} />
                </button>
              )
            })}
          </div>
        </Card>

        {/* Logout Button */}
        <Button
          variant="outline"
          className="w-full border-red-200 text-red-600 hover:bg-red-50 font-semibold py-4 rounded-2xl"
        >
          <LogOut className="mr-2" size={18} />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
