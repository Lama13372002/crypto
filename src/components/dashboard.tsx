'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  TrendingUp,
  TrendingDown,
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  ArrowRightLeft
} from 'lucide-react'
import { useState } from 'react'

export function Dashboard() {
  const [showBalance, setShowBalance] = useState(true)

  const wallets = [
    {
      currency: 'USD',
      symbol: '$',
      balance: 8750.25,
      change: -1.23,
      flag: '🇺🇸',
      color: 'from-green-400 to-green-600'
    },
    {
      currency: 'RUB',
      symbol: '₽',
      balance: 125430.50,
      change: 2.45,
      flag: '🇷🇺',
      color: 'from-blue-400 to-blue-600'
    },
    {
      currency: 'USDT',
      symbol: '$',
      balance: 2150.78,
      change: 0.12,
      flag: '₮',
      color: 'from-emerald-400 to-emerald-600'
    }
  ]

  const liveRates = [
    { pair: 'USD/RUB', rate: '92.45', change: '+0.34%', isPositive: true },
    { pair: 'EUR/USD', rate: '1.0821', change: '-0.12%', isPositive: false },
    { pair: 'BTC/USD', rate: '43,250', change: '+2.15%', isPositive: true },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pb-20">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6 rounded-b-3xl shadow-2xl">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-white text-lg font-medium opacity-90">Total Balance</h1>
            <div className="flex items-center gap-3 mt-2">
              {showBalance ? (
                <h2 className="text-white text-4xl font-bold">$15,750.45</h2>
              ) : (
                <h2 className="text-white text-4xl font-bold">••••••••</h2>
              )}
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-white/70 hover:text-white transition-colors"
              >
                {showBalance ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <TrendingUp className="text-green-400" size={16} />
              <span className="text-green-400 font-medium">+$247.83 (+1.6%)</span>
              <span className="text-white/70 text-sm">today</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-white/70 text-sm">Assets</p>
            <p className="text-white text-2xl font-bold">4</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-white/70 text-sm">Active Wallets</p>
            <p className="text-white text-2xl font-bold">4</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-white/70 text-sm">24h Change</p>
            <p className="text-green-400 text-2xl font-bold">+1.6%</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Live Exchange Rates */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="text-blue-600" size={20} />
            <h3 className="text-gray-900 text-lg font-semibold">Live Exchange Rates</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {liveRates.map((rate, index) => (
              <Card key={index} className="min-w-[140px] p-3 bg-white shadow-sm border-0">
                <div className="text-center">
                  <p className="text-gray-600 text-xs font-medium">{rate.pair}</p>
                  <p className="text-gray-900 font-bold text-sm mt-1">{rate.rate}</p>
                  <Badge
                    variant={rate.isPositive ? "default" : "secondary"}
                    className={`mt-1 text-xs ${
                      rate.isPositive
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-red-100 text-red-700 hover:bg-red-100"
                    }`}
                  >
                    {rate.change}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* My Wallets */}
        <div className="mb-6">
          <h3 className="text-gray-900 text-lg font-semibold mb-4">My Wallets</h3>
          <div className="space-y-4">
            {wallets.map((wallet, index) => (
              <Card key={index} className="p-4 bg-white shadow-sm border-0 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${wallet.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {wallet.flag}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">{wallet.currency}</span>
                        <Badge variant="outline" className="text-xs">
                          {wallet.currency === 'USD' ? 'US Dollar' :
                           wallet.currency === 'RUB' ? 'Russian Ruble' : 'Tether USD'}
                        </Badge>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {wallet.symbol}{wallet.balance.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`flex items-center gap-1 ${
                      wallet.change > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {wallet.change > 0 ?
                        <ArrowUpRight size={16} /> :
                        <ArrowDownRight size={16} />
                      }
                      <span className="font-medium">{Math.abs(wallet.change)}%</span>
                    </div>
                    <div className="flex gap-1 mt-2">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div
                          key={i}
                          className={`w-1 h-6 rounded-full ${
                            wallet.change > 0 ? 'bg-green-300' : 'bg-red-300'
                          }`}
                          style={{
                            opacity: (i + 1) / 5,
                            height: `${Math.random() * 20 + 10}px`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Exchange Button */}
        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl shadow-lg"
          size="lg"
        >
          <ArrowRightLeft className="mr-2" size={20} />
          Quick Exchange
        </Button>
      </div>
    </div>
  )
}
