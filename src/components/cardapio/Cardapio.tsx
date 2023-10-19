import { useState } from "react";

import Categoria from "./Categoria";
import CategoriaInterface from "@/interfaces/CategoriaInterface";

const listaCategorias: CategoriaInterface[] = [
  {
    nome: "Porção",
    produtos: [
      {
        produtoID: "1",
        nome: "Bolinho de Piracui",
        preco: 25
      },
      {
        produtoID: "2",
        nome: "Batata Frita",
        preco: 20
      }
    ]
  },
  {
    nome: "Drinks da Casa",
    produtos: [
      {
        produtoID: "3",
        nome: "Caminho da Praia",
        preco: 22
      },
      {
        produtoID: "4",
        nome: "Beira de Rio",
        preco: 24,
        descricao: "Drink especial de Pepino com Gin Gordons"
      },
      {
        produtoID: "5",
        nome: "Sabor da Floresta",
        preco: 24,
        descricao: "Drink refrescante de Maracujá, Cachaça envelhecida no Carvalho e Hortelã"
      },
      {
        produtoID: "6",
        nome: "Jamburinha",
        preco: 24,
        descricao: "A Caipirinha do Pará feita com a famosa Cachaça de Jambu"
      }
    ]
  },
];

export default function Cardapio() {
  const [categorias] = useState(listaCategorias);

  return (
    <div className="pb-16">
      <div>
        {categorias.map((categoria, index) => (
          <Categoria key={index} categoria={categoria} />
        ))}
      </div>
    </div >
  )
}