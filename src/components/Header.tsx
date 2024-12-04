import { useAccount, useBalance } from 'wagmi'
import useStore from '../state/useStore'

export default function Header() {
  const { address } = useAccount()
  const { data: balanceData } = useBalance({ address })
  const { chain } = useAccount()
  const setWallet = useStore((state) => state.setWallet)

  if (address && balanceData && chain) {
    setWallet(address, balanceData.formatted, chain.name)
  }

  return (
    <div>
      <p>Address: {address}</p>
      <p>Balance: {balanceData?.formatted} ETH</p>
      <p>Network: {chain?.name}</p>
    </div>
  )
}
