import { useRouter } from "next/router"
import { useState } from "react"

export default function Usuario() {
  const router = useRouter();

  const handleConfirmar = () => {
    router.push("pagamento");
  }

  return (
    <main>
      <div className="p-2">
        <div className="text-2xl text-center font-bold">
          Endereço
        </div>
        <div className="p-4 text-center">
          Localização
        </div>
        <div className="fixed left-1 right-1 bottom-1">
          <button
            className="p-3 w-full text-lg text-white text-center rounded-md bg-blue-500"
            onClick={handleConfirmar}>
            <div>
              <span className="mr-3">Confirmar Pedido</span>
            </div>
          </button >
        </div >
      </div>
    </main>
  )
}