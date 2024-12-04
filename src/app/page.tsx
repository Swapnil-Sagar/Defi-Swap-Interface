'use client'

import Header from '@/components/Header'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Home() {
  return (
    <main className='flex items-center justify-center h-screen'>
      <div className='text-center'>
        <Header />
        <h1 className='text-4xl font-bold mb-4'>DeFi Swap</h1>
        <ConnectButton />
      </div>
    </main>
  )
}
