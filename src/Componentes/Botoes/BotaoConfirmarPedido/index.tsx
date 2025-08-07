import InterfaceBotaoConfirmarPedidoProps from '../../../Interfaces/InterfaceBotaoConfirmarPedidoProps';
import './BotaoConfirmarPedido.css';

const BotaoConfirmarPedido = ({ estadoModal }: InterfaceBotaoConfirmarPedidoProps) => {
  return(
  <div className='confirmar-container'>
    <button type='button' className='botao-confirmar' onClick={() => estadoModal(true)}>
      Confirmar Pedido
    </button>
  </div>
  )
 
}

export default BotaoConfirmarPedido;