interface InterfaceBotaoAddCartProps {
  id: number;
  numeroProdutos: number;
  contadorProdutos(conta:string): void;
  acionado:  () => void;

}

export default InterfaceBotaoAddCartProps;