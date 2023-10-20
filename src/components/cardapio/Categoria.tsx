import React, { useState } from "react";
import CategoriaType from "@/types/CategoriaType"
import Produto from "./Produto";
import { useLoja } from "@/contexts/LojaContext";
import ProdutoType from "@/types/ProdutoType";

interface CategoriaProps {
  categoria: CategoriaType;
}

export default function Categoria({ categoria }: CategoriaProps) {
  const { produtos } = useLoja();
  const [exibirProdutos, setExibirProdutos] = useState(false)

  const handleCategoria = () => {
    setExibirProdutos(!exibirProdutos);
  }

  const produtosCategoria = (): ProdutoType[] | null => {
    const _produtos = produtos?.filter((p) => {
      return p.categorias?.some((c) => c.nome === categoria.nome)
    })

    return _produtos || null;
  }

  return (
    <div>
      <div onClick={handleCategoria} className="border rounded-lg p-2 text-center">
        {categoria.nome}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-2">
        {exibirProdutos ? (
          produtosCategoria()?.map((produto, index) => {
            return <Produto key={index} produto={produto} />;
          })
        ) : null}
      </div>
    </div>
  )
}