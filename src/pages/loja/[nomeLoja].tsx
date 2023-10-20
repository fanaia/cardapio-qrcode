import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLoja } from '@/contexts/LojaContext';

export default function Loja() {
  const router = useRouter();
  const { nomeLoja } = router.query;
  const { carregarLoja, loja } = useLoja();

  useEffect(() => {
    if (nomeLoja && !loja) {
      const _nomeLoja: string = Array.isArray(nomeLoja) ? nomeLoja[0] : nomeLoja; // Escolhe o primeiro elemento se for um array
      const lojaCarregada: boolean = carregarLoja(_nomeLoja);

      if (lojaCarregada) {
        router.push('/pedido/cardapio');
      }
    }
  }, [router, nomeLoja, loja, carregarLoja]);

  return <></>
}