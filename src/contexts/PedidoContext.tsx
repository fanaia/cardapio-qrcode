import React, { createContext, useContext, useState, ReactNode } from 'react';
import PedidoType from '@/types/PedidoType';
import ProdutoType from '@/types/ProdutoType';

interface PedidoContextType {
  pedido: PedidoType | undefined;
  quantidadeTotalProdutos: () => number;
  quantidadeProduto: (produtoID: string) => number;
  adicionarProduto: (produto: ProdutoType, quantidade: number) => void;
  removerProduto: (produto: ProdutoType, quantidade: number) => void;
}

const PedidoContext = createContext<PedidoContextType | undefined>(undefined);

export function usePedidos() {
  const context = useContext(PedidoContext);
  if (!context) {
    throw new Error('usePedidos deve ser usado dentro de um PedidoProvider');
  }
  return context;
}

interface PedidoProviderProps {
  children: ReactNode;
}

export function PedidoProvider({ children }: PedidoProviderProps) {
  const [pedido, setPedido] = useState<PedidoType>();

  const quantidadeTotalProdutos = (): number => {
    if (pedido) {
      return pedido.produtos.reduce((total, produtoPedido) => total + produtoPedido.quantidade, 0);
    }
    return 0;
  }

  const quantidadeProduto = (produtoID: string) => {
    const produtoPedido = pedido?.produtos.find(
      (produtoPedido) => produtoPedido.produto.produtoID === produtoID
    );

    if (produtoPedido) {
      return produtoPedido.quantidade
    }
    return 0
  }

  const adicionarProduto = (produto: ProdutoType, quantidade: number) => {
    if (!pedido) {
      // Se não houver um pedido, crie um novo
      const novoPedido: PedidoType = {
        // Outros campos do pedido...
        produtos: [{ produto, quantidade }],
      };
      setPedido(novoPedido);
    } else {
      // Verifique se o produto já está no pedido
      const produtoExistente = pedido.produtos.find(
        (produtoPedido) => produtoPedido.produto.produtoID === produto.produtoID
      );

      if (produtoExistente) {
        // Se o produto já existe, atualize a quantidade
        produtoExistente.quantidade += quantidade;
      } else {
        // Se o produto não existe, adicione-o à lista de produtos
        pedido.produtos.push({ produto, quantidade });
      }

      // Atualize o estado do pedido
      setPedido({ ...pedido });
    }
  };

  const removerProduto = (produto: ProdutoType, quantidade: number) => {
    if (pedido) {
      // Verifique se o produto já está no pedido
      const produtoExistente = pedido.produtos.find(
        (produtoPedido) => produtoPedido.produto.produtoID === produto.produtoID
      );

      if (produtoExistente && produtoExistente.quantidade >= quantidade) {
        // Se o produto já existe, atualize a quantidade
        produtoExistente.quantidade -= quantidade;
      }

      setPedido({ ...pedido });
    }
  };

  return (
    <PedidoContext.Provider value={{ pedido, quantidadeTotalProdutos: quantidadeTotalProdutos, quantidadeProduto, adicionarProduto, removerProduto }}>
      {children}
    </PedidoContext.Provider>
  );
}