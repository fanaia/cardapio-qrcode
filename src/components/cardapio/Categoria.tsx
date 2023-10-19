import React, { useState } from "react";
import CategoriaInterface from "@/interfaces/CategoriaInterface"
import Produto from "./Produto";

interface CategoriaProps {
  categoria: CategoriaInterface;
}

export default function Categoria({ categoria }: CategoriaProps) {
  const [exibirProdutos, setExibirProdutos] = useState(false)

  const ExibirProdutos = () => {
    setExibirProdutos(!exibirProdutos);
  }

  return (
    <div>
      <div onClick={ExibirProdutos} className="border rounded-lg p-2 text-center">
        {categoria.nome}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-2">
        {exibirProdutos ? (
          categoria.produtos.map((produto, index) => {
            return <Produto key={index} produto={produto} />;
          })
        ) : null}
      </div>
    </div>
  )
}