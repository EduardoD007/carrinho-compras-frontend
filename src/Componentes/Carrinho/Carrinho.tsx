import { useDispatch, useSelector } from 'react-redux';
import './Carrinho.css';
import sobremesaSlice, { definirQuantidade, quantidadeCarrinho, retiraProduto } from '../../store/reducers/sobremesa';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';
import { CiCircleMinus, CiCircleRemove } from "react-icons/ci";
import { mudaEstado } from '../../store/reducers/addCart';
import BotaoConfirmarPedido from '../Botoes/BotaoConfirmarPedido';
import InterfaceCarrinhoProps from '../../Interfaces/InterfaceCarrinhoProps';

const iconeProps = {
  size: 25
};

const Carrinho = ({ estadoModal} : InterfaceCarrinhoProps) => {
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


  if (carrinho.carrinho.length === 0) {
    return (
      <div className='carrinho'>
        <div className='label-container'>
          {label}
        </div>
        <div className='imagem-container'>
          <img className='img' src='./assets/images/illustration-empty-cart.svg' alt='illustration-empty-cart'></img>
        </div>
        <div className='label-imagem'>
          Seus itens adicionados aparecerão aqui
        </div>
      </div>
    )
  }
  return (
    <div className='carrinho-cheio'>
      <div className='label-container'>
        {label}
      </div>
        {carrinho.carrinho && carrinho.carrinho.map((produto) => (
        <div className='produto-container'  key={produto.produto.id}>
          <div className='produto'>
            <div>
            <div className='nome'>{produto.produto.name}</div>
            <div>
              <span className='quantidade'>{produto.quantidade}x</span>
              <span className='valor'>{produto.produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              <span className='total'>{(produto.quantidade * produto.produto.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            </div>
            </div>
          </div>
          <button type='button' className='remove' onClick={() => retiraDoCarrinho(produto.produto.id)}>
            <CiCircleRemove {...iconeProps}/>
          </button>
          <div className="linha-separacao"></div>
        </div>       
      ))}
      <div className='total-compra'>
        <div className='total-compra-label'>
          Total
        </div>
        <div className='total-compra-valor'>
           {carrinho.carrinho && carrinho.carrinho.reduce((acc,produto) => 
          acc + produto.quantidade * produto.produto.price,0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </div>
      </div>
        <BotaoConfirmarPedido
          estadoModal={estadoModal}
        />
    </div>
  )
}

export default Carrinho;