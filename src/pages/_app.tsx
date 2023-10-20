import type { AppProps } from 'next/app'

import '@/styles/globals.css'

import { LojaProvider } from '@/contexts/LojaContext'
import { PedidoProvider } from '@/contexts/PedidoContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LojaProvider>
      <PedidoProvider>
        <Component {...pageProps} />
      </PedidoProvider>
    </LojaProvider>
  )
}
