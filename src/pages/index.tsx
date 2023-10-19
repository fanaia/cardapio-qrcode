import Link from "next/link";

export default function home() {
  return (
    <main>
      <div>
        <Link href={"loja/boteco-da-peh"}>Boteco da Peh</Link>
      </div>
      <div>
        <Link href={"loja/hajime-limao"}>Hajime Limao</Link>
      </div>
    </main >
  )
}
