import Cardapio from '@/components/cardapio/Cardapio';
import { PedidoProvider } from '@/contexts/PedidoContext';
import React from 'react';

export default function CardapioPage() {

  return (
    <main>
      <div className='grid grid-cols-2 gap-4 p-6'>
        <div className='col-span-1 text-left'>Boteco da Peh</div>
        <div className='col-span-1 text-right'>ABERTO</div>
      </div>
      <div>
        <PedidoProvider>
          <Cardapio />
        </PedidoProvider>
      </div>
    </main>
  );
}
