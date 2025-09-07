'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  CreditCard,
  Banknote,
  QrCode,
  Clock,
  CheckCircle,
  AlertTriangle,
  Minus,
  Shield,
  TrendingDown
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Withdrawal() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [selectedMethod, setSelectedMethod] = useState('card')
  const [amount, setAmount] = useState('')

  const currencies = [
    { code: 'USD', name: 'US Dollar', flag: '🇺🇸', balance: '8750.25', minWithdraw: '50' },
    { code: 'EUR', name: 'Euro', flag: '🇪🇺', balance: '4230.15', minWithdraw: '50' },
    { code: 'RUB', name: 'Russian Ruble', flag: '🇷🇺', balance: '125430.50', minWithdraw: '2000' },
    { code: 'USDT', name: 'Tether USD', flag: '₮', balance: '2150.78', minWithdraw: '50' },
    { code: 'BTC', name: 'Bitcoin', flag: '₿', balance: '0.25', minWithdraw: '0.01' }
  ]

  const withdrawalMethods = [
    {
      id: 'card',
      name: 'Bank Card',
      description: 'Visa, Mastercard',
      icon: CreditCard,
      fee: '3.0%',
      time: '1-3 business days',
      popular: true
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      description: 'SEPA, SWIFT, Local banks',
      icon: Banknote,
      fee: '$15 + 1%',
      time: '3-5 business days',
      popular: false
    },
    {
      id: 'crypto',
      name: 'Cryptocurrency',
      description: 'Send to external wallet',
      icon: QrCode,
      fee: 'Network fee',
      time: '10-60 minutes',
      popular: false
    }
  ]

  const recentWithdrawals = [
    {
      amount: '$1,000.00',
      method: 'Bank Card',
      currency: 'USD',
      time: '6 hours ago',
      status: 'processing',
      fee: '$30.00'
    },
    {
      amount: '€800.00',
      method: 'Bank Transfer',
      currency: 'EUR',
      time: '2 days ago',
      status: 'completed',
      fee: '€23.00'
    },
    {
      amount: '0.05 BTC',
      method: 'Cryptocurrency',
      currency: 'BTC',
      time: '1 week ago',
      status: 'completed',
      fee: '$8.50'
    }
  ]

  const selectedCurrencyInfo = currencies.find(c => c.code === selectedCurrency)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-500" size={16} />
      case 'processing':
        return <Clock className="text-yellow-500" size={16} />
      default:
        return <AlertTriangle className="text-red-500" size={16} />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Completed</Badge>
      case 'processing':
        return <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Processing</Badge>
      default:
        return <Badge variant="destructive">Failed</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6 pb-24">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Withdrawal Funds</h1>

        {/* Currency Selection */}
        <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Currency</h3>

          <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
            <SelectTrigger className="w-full h-16 text-left">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{selectedCurrencyInfo?.flag}</span>
                  <div>
                    <div className="font-bold text-gray-900">{selectedCurrency}</div>
                    <div className="text-sm text-gray-500">{selectedCurrencyInfo?.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Available</div>
                  <div className="font-semibold text-gray-900">{selectedCurrencyInfo?.balance}</div>
                </div>
              </div>
            </SelectTrigger>
            <SelectContent>
              {currencies.map((currency) => (
                <SelectItem key={currency.code} value={currency.code}>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{currency.flag}</span>
                      <div>
                        <div className="font-medium">{currency.code}</div>
                        <div className="text-xs text-gray-500">{currency.name}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Available</div>
                      <div className="text-sm font-medium">{currency.balance}</div>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="mt-4 p-3 bg-orange-50 rounded-xl">
            <div className="flex items-center justify-between text-sm">
              <span className="text-orange-700 font-medium">Minimum withdrawal:</span>
              <span className="text-orange-900 font-semibold">
                {selectedCurrencyInfo?.minWithdraw} {selectedCurrency}
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

          <Button
            variant="outline"
            onClick={() => setAmount(selectedCurrencyInfo?.balance || '')}
            className="w-full mt-2 rounded-xl"
          >
            Withdrawal All
          </Button>
        </Card>

        {/* Withdrawal Methods */}
        <Card className="p-6 bg-white shadow-lg border-0 rounded-3xl mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Withdrawal Method</h3>

          <div className="space-y-3">
            {withdrawalMethods.map((method) => {
              const Icon = method.icon
              return (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedMethod === method.id
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-full ${
                        selectedMethod === method.id ? 'bg-red-100' : 'bg-gray-100'
                      }`}>
                        <Icon className={
                          selectedMethod === method.id ? 'text-red-600' : 'text-gray-600'
                        } size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{method.name}</span>
                          {method.popular && (
                            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 text-xs">
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

        {/* Security Notice */}
        <Card className="p-4 bg-yellow-50 border border-yellow-200 rounded-2xl mb-6">
          <div className="flex items-start gap-3">
            <Shield className="text-yellow-600 mt-1" size={20} />
            <div>
              <h4 className="font-semibold text-yellow-900">Security Notice</h4>
              <p className="text-yellow-800 text-sm mt-1">
                All withdrawals require email confirmation. Large amounts may need additional verification.
              </p>
            </div>
          </div>
        </Card>

        {/* Withdrawal Button */}
        <Button className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-4 rounded-2xl shadow-lg mb-6">
          <Minus className="mr-2" size={20} />
          Withdrawal {amount || '0'} {selectedCurrency}
        </Button>

        {/* Recent Withdrawals */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Withdrawals</h3>
          <div className="space-y-3">
            {recentWithdrawals.map((withdrawal, index) => (
              <Card key={index} className="p-4 bg-white shadow-sm border-0 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(withdrawal.status)}
                    <div>
                      <div className="font-semibold text-gray-900">{withdrawal.amount}</div>
                      <div className="text-gray-500 text-sm">{withdrawal.method}</div>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock size={10} />
                        {withdrawal.time}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {getStatusBadge(withdrawal.status)}
                    <div className="text-gray-500 text-xs mt-1">Fee: {withdrawal.fee}</div>
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
