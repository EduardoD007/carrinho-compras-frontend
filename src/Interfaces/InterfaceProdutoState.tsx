import TypeProduto from "../Types/TypeProduto";

interface InterfaceProdutoState {
  produtos: TypeProduto[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  erro: string | null;
}

export default InterfaceProdutoState;