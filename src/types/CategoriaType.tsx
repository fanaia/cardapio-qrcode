import ProdutoType from "./ProdutoType";

export default interface CategoriaType {
  nome: string;
  produtos?: ProdutoType[];
}