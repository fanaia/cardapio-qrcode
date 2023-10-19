import React, { useState } from "react";
import { useRouter } from 'next/router';

import Cardapio from '@/components/cardapio/Cardapio';
import { usePedidos } from '@/contexts/PedidoContext';

export default function CardapioPage() {
  const router = useRouter();
  const { loja } = router.query;

  const { quantidadeTotalProdutos } = usePedidos();
  const quantidade = quantidadeTotalProdutos();

  const handlePedir = () => {
    router.push('/pedido/confirmar');
  }

  return (
    <main>
      <div>
        <div className='grid grid-cols-2 gap-4 p-6'>
          <div className='col-span-1 text-left'>{loja}</div>
          <div className='col-span-1 text-right'>ABERTO</div>
        </div>
        <div>
          <Cardapio />
        </div>
        <div className="fixed left-1 right-1 bottom-1">
          <button
            className="p-3 w-full text-lg text-white text-center rounded-md bg-blue-500"
            disabled={quantidade === 0}
            onClick={handlePedir}>
            <div>
              <span className="mr-3">Pedir</span>
              <span className="text-sm">{quantidade} {quantidade <= 1 ? "item" : "itens"}</span>
            </div>
          </button >
        </div >
      </div>
    </main >
  );
}
