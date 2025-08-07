import TypeProduto from "../Types/TypeProduto";
import TypeProdutoComQtd from "../Types/TypeProdutoComQtd";

interface InterfaceSobremesaState {
  carrinho: TypeProdutoComQtd[];
  quantidadeTotal: number;
}

export default InterfaceSobremesaState;