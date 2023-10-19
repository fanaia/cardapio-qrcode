import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Loja() {
  const router = useRouter();
  const { nomeDaLoja } = router.query;

  useEffect(() => {
    if (nomeDaLoja) {
      router.push(`/pedido/cardapio?loja=${nomeDaLoja}`);
    }
  }, [router, nomeDaLoja]);

  return <></>
}