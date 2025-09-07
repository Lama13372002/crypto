'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  CreditCard,
  Banknote,
  Smartphone,
  QrCode,
  Clock,
  CheckCircle,
  Copy,
  Plus,
  TrendingUp
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Deposit() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [selectedMethod, setSelectedMethod] = useState('card')
  const [amount, setAmount] = useState('')

  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸', minDeposit: '10' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺', minDeposit: '10' },
    { code: 'RUB', name: 'Russian Ruble', flag: '🇷🇺', minDeposit: '500' },
    { code: 'USDT', name: 'Tether USD', flag: '₮', minDeposit: '10' },
    { code: 'BTC', name: 'Bitcoin', flag: '₿', minDeposit: '0.001' }
  ]

  const paymentMethods = [
    {
      id: 'card',
      name: 'Bank Card',
      description: 'Visa, Mastercard, Mir',
      icon: CreditCard,
      fee: '2.5%',
      time: 'Instant',
      popular: true
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'SEPA, SWIFT, Local banks',
      icon: Banknote,
      fee: '0.5%',
      time: '1-3 days',
      popular: false
    },
    {
      id: 'mobile',
      name: 'Mobile Payment',
      description: 'Apple Pay, Google Pay',
      icon: Smartphone,
      fee: '1.5%',
      time: 'Instant',
      popular: false
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      description: 'BTC, ETH, USDT networks',
      icon: QrCode,
      fee: 'Network fee',
      time: '10-30 min',
      popular: false
    }
  ]

  const recentDeposits = [
    {
      amount: '$500.00',
      method: 'Bank Card',
      currency: 'USD',
      time: '2 hours ago',
      status: 'completed',
      fee: '$12.50'
    },
    {
      amount: '€1,200.00',
      method: 'Bank Transfer',
      currency: 'EUR',
      time: '1 day ago',
      status: 'completed',
      fee: '€6.00'
    },
    {
      amount: '0.012 BTC',
      method: 'Cryptocurrency',
      currency: 'BTC',
      time: '3 days ago',
      status: 'completed',
      fee: '$2.45'
    }
  ]

  const selectedCurrencyInfo = currencies.find(c => c.code === selectedCurrency)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6 pb-24">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Deposit Funds</h1>

        {/* Currency Selection */}
        <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Currency</h3>

          <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
            <SelectTrigger className="w-full h-16 text-left">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{selectedCurrencyInfo?.flag}</span>
                <div>
                  <div className="font-bold text-gray-900">{selectedCurrency}</div>
                  <div className="text-sm text-gray-500">{selectedCurrencyInfo?.name}</div>
                </div>
              </div>
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{currency.flag}</span>
                    <div>
                      <div className="font-medium">{currency.code}</div>
                      <div className="text-xs text-gray-500">{currency.name}</div>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="mt-4 p-3 bg-blue-50 rounded-xl">
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-700 font-medium">Minimum deposit:</span>
              <span className="text-blue-900 font-semibold">
                {selectedCurrencyInfo?.minDeposit} {selectedCurrency}
              </span>
            </div>
          </div>
        </Card>

        {/* Amount Input */}
        <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Enter Amount</h3>

          <div className="bg-gray-50 rounded-2xl p-4">
            <div className="text-center">
              <span className="text-gray-500 text-lg mr-2">
                {selectedCurrency === 'RUB' ? '₽' : selectedCurrency === 'BTC' ? '₿' : '$'}
              </span>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="text-3xl font-bold text-gray-900 bg-transparent border-0 outline-0 text-center w-full"
                placeholder="0.00"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4">
            {['100', '500', '1000'].map((quickAmount) => (
              <Button
                key={quickAmount}
                variant="outline"
                onClick={() => setAmount(quickAmount)}
                className="rounded-xl"
              >
                {quickAmount}
              </Button>
            ))}
          </div>
        </Card>

        {/* Payment Methods */}
        <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>

          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon
              return (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedMethod === method.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full ${
                        selectedMethod === method.id ? 'bg-blue-100' : 'bg-gray-100'
                      }`}>
                        <Icon className={
                          selectedMethod === method.id ? 'text-blue-600' : 'text-gray-600'
                        } size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{method.name}</span>
                          {method.popular && (
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 text-xs">
                              Popular
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-500 text-sm">{method.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-900 font-medium text-sm">{method.fee}</p>
                      <p className="text-gray-500 text-xs">{method.time}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Card>

        {/* Deposit Button */}
        <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-2xl shadow-lg mb-6">
          <Plus className="mr-2" size={20} />
          Deposit {amount || '0'} {selectedCurrency}
        </Button>

        {/* Recent Deposits */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Deposits</h3>
          <div className="space-y-3">
            {recentDeposits.map((deposit, index) => (
              <Card key={index} className="p-4 bg-white shadow-sm border-0 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="text-green-600" size={16} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{deposit.amount}</div>
                      <div className="text-gray-500 text-sm">{deposit.method}</div>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock size={10} />
                        {deposit.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-green-700 border-green-200 mb-1">
                      Completed
                    </Badge>
                    <div className="text-gray-500 text-xs">Fee: {deposit.fee}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
