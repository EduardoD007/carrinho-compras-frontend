import { useCallback, useEffect, useState } from 'react';
import InterfaceBotaoAddCartProps from '../../../Interfaces/InterfaceBotaoAddCartProps';
import './BotaoAddCart.css';
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/index';
import { adicionaBotao, mudaEstado } from '../../../store/reducers/addCart';

const iconeProps = {
  size: 25,
};

const BotaoAddCart = ({ id,contadorProdutos, numeroProdutos, acionado}:InterfaceBotaoAddCartProps) => {
  const dispatch = useDispatch();
  const botaoState = useSelector((state:RootState) => state.botaoAddCart);
  const botaoIndex =  botaoState.botao.findIndex((bt) => id === bt.id );

  const botao = botaoState.botao[botaoIndex];
 

  const aoAcionadoBt = () => {
    dispatch(mudaEstado({id:id}))
    acionado()
  }

  const retiraProduto = () => {
    contadorProdutos('menos')
  }

  const adicionaProduto = () => {
    contadorProdutos('mais')
  }


  if(!botao || botao.estado === false) {
    return (
    <div className='botao-container'>
      <button type='button' className='botao-add-cart' onClick={aoAcionadoBt}>
        <div>
          <img src='\assets\images\icon-add-to-cart.svg' alt='icon-add-to-cart' className='icone-carrinho'></img>
        </div>
        <div>
           Add to Cart
        </div>
      </button>
    </div>
  )
  }
  return (
    <div className='botao-container'>
      <div className='botao-add-cart-2'>
        <button  className='menos' type='button' onClick={retiraProduto}>
          <CiCircleMinus {...iconeProps} />
        </button>
        <div >
          {numeroProdutos}
        </div>
         <button  className='menos' type='button' onClick={adicionaProduto}>
          <CiCirclePlus {...iconeProps} />
        </button>
      </div>
    </div>
  )
  
}

export default BotaoAddCart;