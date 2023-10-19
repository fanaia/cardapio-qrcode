import ProdutoInterface from "./ProdutoInterface";

export default interface CategoriaInterface {
  nome: string;
  produtos: ProdutoInterface[];
}