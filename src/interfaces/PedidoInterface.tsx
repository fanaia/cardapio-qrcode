import ProdutoInterface from "./ProdutoInterface";

export default interface PedidoInterface {
  produtos: ProdutoPedidoInterface[];
}

export interface ProdutoPedidoInterface {
  produto: ProdutoInterface; // Dados do produto
  quantidade: number; // Quantidade do produto no pedido
}