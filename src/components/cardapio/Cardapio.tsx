import { useState } from "react";

import Categoria from "./Categoria";
import { useLoja } from "@/contexts/LojaContext";

export default function Cardapio() {
  const { categorias } = useLoja();

  return (
    <div className="pb-16">
      <div>
        {categorias?.map((categoria, index) => (
          <Categoria key={index} categoria={categoria} />
        ))}
      </div>
    </div >
  )
}