import { create } from 'zustand'

interface WalletState {
  address: string | null
  balance: string
  network: string
  transactions: Array<{ hash: string; status: string }>
  setWallet: (address: string, balance: string, network: string) => void
}

const useStore = create<WalletState>((set) => ({
  address: null,
  balance: '0',
  network: 'mainnet',
  transactions: [],
  setWallet: (address, balance, network) => set({ address, balance, network })
}))

export default useStore
