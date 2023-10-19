import React, { useState } from "react"
import ProdutoInterface from "@/interfaces/ProdutoInterface"
import { IconMinus, IconPlus } from "@tabler/icons-react";

import { usePedidos } from '@/contexts/PedidoContext';

interface ProdutoProps {
  produto: ProdutoInterface;
}

export default function Produto(props: ProdutoProps) {
  const { adicionarProduto, removerProduto, quantidadeProduto } = usePedidos();

  const [confirmar, setConfirmar] = useState(false);
  const [observacao, setObservacao] = useState("")

  const quantidade = quantidadeProduto(props.produto.produtoID);

  const handleRemoverProduto = () => {
    removerProduto(props.produto, 1);
  };

  const handleAdicionarProduto = () => {
    setConfirmar(true);
  };

  const handleConfirmar = () => {
    adicionarProduto(props.produto, 1);
    setConfirmar(false);
    setObservacao("");
  }

  return (
    <div>
      <div className="grid grid-cols-5 bg-white bg-opacity-50 m-1 p-1 rounded-md h-20">
        <div className="col-span-4 row-span-2 p-1">
          <div>{props.produto.nome}</div>
          <div className="text-sm p-1">{props.produto.descricao}</div>
        </div>
        <div className="col-span-1 text-center h-fit">
          <div>
            <span className="mr-1 text-xs">R$</span>
            <span className="text-lg">{props.produto.preco}</span>
          </div>
          <div>
            {quantidade > 0 ? (
              <>
                <div className="text-center mb-3">
                  <span>
                    <button onClick={handleRemoverProduto}>
                      <IconMinus size={14} color="#e74c3c" className="rounded-full p-0 bg-white" />
                    </button>
                  </span>
                  <span className="p-1">{quantidade}</span>
                  <span><button onClick={handleAdicionarProduto}>
                    <IconPlus size={19} color="#3498db" className="rounded-full p-0 bg-white" />
                  </button></span>
                </div>
              </>
            ) : (
              <>
                <div className="text-center">
                  <button onClick={handleAdicionarProduto}>
                    <IconPlus size={32} color="#3498db" className="rounded-full p-1 bg-white" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {confirmar ? (
        <>
          <div className="fixed inset-0 z-50 bg-gray-200 w-full h-full">
            <div className="p-4 text-center">
              <div className="text-2xl text-blue-950 mb-3">
                <span className="mr-1">
                  Eu quero
                </span>
                <span className="font-bold">
                  {props.produto.nome}
                </span>
              </div>
              <div>
                <div className="text-blue-800 text-3xl">Adicionar complemento?</div>
                <div className="mb-5 p-2">
                  <div className="text-left text-black rounded-md border p-2 bg-blue-200">Maionese Temperada da Casa</div>
                  <div className="text-left text-black rounded-md border p-2 bg-blue-200">Molho da Tartaro</div>
                  <div className="text-left text-black rounded-md border p-2 bg-blue-200">Molho da Tarê</div>
                </div>
              </div>
              <div>
                <div className="text-blue-800 text-3xl">Alguma observação?</div>
                <div className="w-full h-screen p-2">
                  <textarea
                    className="text-black w-full h-40"
                    id="observacao"
                    name="observacao"
                    value={observacao}
                    onChange={(event) => setObservacao(event.target.value)}
                  >
                  </textarea>
                </div>
              </div>
            </div>
            <div className="fixed left-1 right-1 bottom-1">
              <button
                className="p-3 w-full text-lg text-white text-center rounded-md bg-green-400"
                onClick={handleConfirmar}>
                <div>
                  <span className="mr-3">Confirmar</span>
                </div>
              </button >
            </div >
          </div>
        </>
      ) : (null)}
    </div>
  )
}