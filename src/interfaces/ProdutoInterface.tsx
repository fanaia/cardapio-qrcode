export default interface ProdutoInterface {
  produtoID: string;
  nome: string;
  descricao?: string;
  preco: number;
  urlImagemPequena?: string;
}