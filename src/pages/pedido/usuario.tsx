import { useState } from "react"

export default function Usuario() {
  const [apelido, setApelido] = useState("");
  const [telefone, setTelefone] = useState("");

  return (
    <main>
      <div className="p-2">
        <div className="text-2xl text-center font-bold">
          Falta pouco para <br />finalizar seu pedido
        </div>
        <div className="p-4 text-center">
          <div className="mb-5">
            <span className="text-xl">Nome ou Apelido</span>
            <input
              type="text"
              className="font-black p-1"
              id="apelido"
              name="apelido"
              value={apelido}
              onChange={(event) => setApelido(event.target.value)}
            />
          </div>
          <div>
            <span className="text-xl">Qual seu Whatsapp?</span>
            <input
              type="tel"
              className="font-black p-1"
              id="telefone"
              name="telefone"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
          </div>
        </div>
        <div className="fixed left-1 right-1 bottom-1">
          <button
            className="p-3 w-full text-lg text-white text-center rounded-md bg-blue-500">
            <div>
              <span className="mr-3">Confirmar Pedido</span>
            </div>
          </button >
        </div >
      </div>
    </main>
  )
}