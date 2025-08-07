import { useDispatch, useSelector } from 'react-redux';
import './Modal.css';
import { RootState } from '../../store';
import { definirQuantidade, quantidadeCarrinho, retiraProduto } from '../../store/reducers/sobremesa';
import { mudaEstado } from '../../store/reducers/addCart';
import { useEffect } from 'react';
import BotaoNovoPedido from '../Botoes/BotaoNovoPedido';
import InterfaceModalProps from '../../Interfaces/InterfaceModalProps';

const Modal = ( { estadoModal} : InterfaceModalProps) => {

   const dispatch = useDispatch();
    const carrinho = useSelector((state: RootState) => state.sobremesa)
    const label = `Seu carrinho (${carrinho.quantidadeTotal})`;
 
  
    const retiraDoCarrinho = (id:number) => {
      dispatch(retiraProduto({id:id}))
      dispatch(mudaEstado({id:id}))
      dispatch(definirQuantidade({id:id, quantidade:0}))
    }
  
    useEffect(() => {
      dispatch(quantidadeCarrinho())
    }, [carrinho.carrinho])
  
  return(
    <div className='modal-container'>
      <div className='titulo'>
        Pedido Confirmado
      </div>
      <div className='subtitulo'>
        Tenha uma boa refeição !!
      </div>
      <div className='produtos-container-2'>
        <div>
        {carrinho.carrinho && carrinho.carrinho.map((produto) => (
                <div className='produto-container'  key={produto.produto.id}>
                  <div className='produto'>
                    <div>
                      <div className='nome'>{produto.produto.name}</div>
                      <div>
                       <span className='quantidade'>{produto.quantidade}x</span>
                       <span className='valor'>{produto.produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                      </div>
                    </div>
                  </div>
                   <div className='total'>{(produto.quantidade * produto.produto.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
                  <div className="linha-separacao"></div>
                </div>       
              ))}
              <div className='total-compra'>
                <div className='total-compra-label'>
                  Total Pedido
                </div>
                <div className='total-compra-valor'>
                   {carrinho.carrinho && carrinho.carrinho.reduce((acc,produto) => 
                  acc + produto.quantidade * produto.produto.price,0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </div>
          </div>
      </div>
    </div>
    <BotaoNovoPedido
      estadoModal={estadoModal}
    />
    </div>
  )
}

export default Modal;

