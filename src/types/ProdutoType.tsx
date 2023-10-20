import CategoriaType from "./CategoriaType";

export default interface ProdutoType {
  produtoID?: string;
  nome: string;
  descricao?: string;
  preco?: number;
  urlImagemPequena?: string;
  categorias?: CategoriaType[]
}