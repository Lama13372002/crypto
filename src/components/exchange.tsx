'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ArrowUpDown,
  ChevronDown,
  Clock,
  TrendingUp,
  CheckCircle
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Exchange() {
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USDT')
  const [fromAmount, setFromAmount] = useState('1000000')
  const [toAmount, setToAmount] = useState('1080.0000')

  const currencies = [
    { code: 'USD', name: 'US Dollar', balance: '5420.50', flag: '🇺🇸', rate: '1.00' },
    { code: 'RUB', name: 'Russian Ruble', balance: '125000.00', flag: '🇷🇺', rate: '92.45' },
    { code: 'AED', name: 'UAE Dirham', balance: '8750.25', flag: '🇦🇪', rate: '3.67' },
    { code: 'USDT', name: 'Tether USD', balance: '2150.78', flag: '₮', rate: '1.00' },
    { code: 'EUR', name: 'Euro', balance: '4230.15', flag: '🇪🇺', rate: '0.92' },
    { code: 'BTC', name: 'Bitcoin', balance: '0.25', flag: '₿', rate: '43250.00' }
  ]

  const recentExchanges = [
    { from: 'USD', to: 'RUB', amount: '500.00', received: '46,225.00', time: '2 hours ago', status: 'completed' },
    { from: 'RUB', to: 'USDT', amount: '50,000.00', received: '540.50', time: '1 day ago', status: 'completed' },
    { from: 'EUR', to: 'USD', amount: '1,200.00', received: '1,304.40', time: '3 days ago', status: 'completed' }
  ]

  const swapCurrencies = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const selectedFromCurrency = currencies.find(c => c.code === fromCurrency)
  const selectedToCurrency = currencies.find(c => c.code === toCurrency)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6 pb-24">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Exchange</h1>

        {/* Exchange Form */}
        <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl mb-6">
          {/* From Section */}
          <div className="mb-4">
            <label className="text-gray-600 text-sm font-medium mb-2 block">From</label>
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <Select value={fromCurrency} onValueChange={setFromCurrency}>
                  <SelectTrigger className="w-32 border-0 bg-transparent p-0 h-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{selectedFromCurrency?.flag}</span>
                      <div>
                        <div className="font-bold text-gray-900">{fromCurrency}</div>
                        <div className="text-xs text-gray-500">{selectedFromCurrency?.name}</div>
                      </div>
                      <ChevronDown size={16} className="text-gray-400" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{currency.flag}</span>
                          <div>
                            <div className="font-medium">{currency.code}</div>
                            <div className="text-xs text-gray-500">{currency.name}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Available</div>
                  <div className="text-sm font-medium text-gray-700">{selectedFromCurrency?.balance}</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gray-500 text-lg mr-2">{selectedFromCurrency?.code === 'RUB' ? '₽' : '$'}</span>
                <input
                  type="text"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="text-2xl font-bold text-gray-900 bg-transparent border-0 outline-0 text-right w-full"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center my-4">
            <button
              onClick={swapCurrencies}
              className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <ArrowUpDown className="text-white" size={20} />
            </button>
          </div>

          {/* To Section */}
          <div className="mb-6">
            <label className="text-gray-600 text-sm font-medium mb-2 block">To</label>
            <div className="bg-gray-50 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <Select value={toCurrency} onValueChange={setToCurrency}>
                  <SelectTrigger className="w-32 border-0 bg-transparent p-0 h-auto">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{selectedToCurrency?.flag}</span>
                      <div>
                        <div className="font-bold text-gray-900">{toCurrency}</div>
                        <div className="text-xs text-gray-500">{selectedToCurrency?.name}</div>
                      </div>
                      <ChevronDown size={16} className="text-gray-400" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {currencies.map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{currency.flag}</span>
                          <div>
                            <div className="font-medium">{currency.code}</div>
                            <div className="text-xs text-gray-500">{currency.name}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Available</div>
                  <div className="text-sm font-medium text-gray-700">{selectedToCurrency?.balance}</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-gray-500 text-lg mr-2">{selectedToCurrency?.code}</span>
                <input
                  type="text"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className="text-2xl font-bold text-gray-900 bg-transparent border-0 outline-0 text-right w-full"
                  placeholder="0.00"
                  readOnly
                />
              </div>
            </div>
          </div>

          {/* Exchange Rate */}
          <div className="bg-blue-50 rounded-xl p-3 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-blue-700 text-sm font-medium">Exchange Rate</span>
              <div className="flex items-center gap-1">
                <TrendingUp className="text-green-500" size={14} />
                <span className="text-gray-900 font-semibold">1 RUB = 0.0108 USDT</span>
              </div>
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-2xl shadow-lg">
            Preview Exchange
          </Button>
        </Card>

        {/* Recent Exchanges */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Exchanges</h3>
          <div className="space-y-3">
            {recentExchanges.map((exchange, index) => (
              <Card key={index} className="p-4 bg-white shadow-sm border-0 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="text-green-600" size={16} />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {exchange.amount} {exchange.from} → {exchange.received} {exchange.to}
                      </div>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <Clock size={12} />
                        {exchange.time}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-700 border-green-200">
                    Completed
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
