import React, { createContext, useContext, useState, ReactNode } from 'react';
import LojaType from '@/types/LojaType'; // Importe as interfaces aqui
import CategoriaType from '@/types/CategoriaType'; // Importe as interfaces aqui
import ProdutoType from '@/types/ProdutoType'; // Importe as interfaces aqui

interface LojaContextType {
  carregarLoja: (alias: string) => boolean;
  loja: LojaType | null;
  categorias: CategoriaType[] | null;
  produtos: ProdutoType[] | null;
}

const LojaContext = createContext<LojaContextType | undefined>(undefined);

interface LojaProviderProps {
  children: ReactNode;
}

export function LojaProvider({ children }: LojaProviderProps) {
  const [loja, setLoja] = useState<LojaType | null>(null);
  const [categorias, setCategorias] = useState<CategoriaType[] | null>(null);
  const [produtos, setProdutos] = useState<ProdutoType[] | null>(null);

  const carregarLoja = (alias: string): boolean => {
    const _loja: LojaType = {
      nome: alias,
      abertaPedidosOnline: true,
    }
    setLoja(_loja)

    const _categorias: CategoriaType[] = [
      { nome: "Porções" },
      { nome: "Drinks da Casa" },
      { nome: "Cervejas Longnecks" },
    ]
    setCategorias(_categorias)

    const _produtos: ProdutoType[] = [
      { produtoID: "1", nome: "Bolinho de Piracui", preco: 25, categorias: [{ nome: "Porções" }] },
      { produtoID: "2", nome: "Batata Frita", preco: 20, categorias: [{ nome: "Porções" }] },
      { produtoID: "3", nome: "Caipirinha", preco: 14, categorias: [{ nome: "Drinks da Casa" }] },
    ]
    setProdutos(_produtos)

    return true;
  }

  return (
    <LojaContext.Provider value={{ carregarLoja, loja, categorias, produtos }}>
      {children}
    </LojaContext.Provider>
  );
}

export function useLoja() {
  const context = useContext(LojaContext);
  if (context === undefined) {
    throw new Error('useLoja deve ser usado dentro de um LojaProvider');
  }
  return context;
}
