import ProdutoType from "./ProdutoType";

export default interface PedidoType {
  produtos: PedidoProdutoType[];
}

export interface PedidoProdutoType {
  produto: ProdutoType;
  quantidade: number;
}