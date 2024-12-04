// utils/format.ts
export const formatAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(-4)}`

export const formatBalance = (balance: string) => parseFloat(balance).toFixed(4)
