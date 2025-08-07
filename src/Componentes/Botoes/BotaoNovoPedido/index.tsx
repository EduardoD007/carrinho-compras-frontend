import InterfaceBotaoNovoPedido from '../../../Interfaces/InterfaceBotaoNovoPedidoProps';
import './BotaoNovoPedido.css';

const BotaoNovoPedido = ( { estadoModal} : InterfaceBotaoNovoPedido) => {
  return (
    <div className='novo-pedido-container'>
      <button type='button' className='botao-confirmar' onClick={() => {estadoModal(false); window.location.reload()}}>
        Fazer Novo Pedido
      </button>
    </div>
  )
}

export default BotaoNovoPedido;