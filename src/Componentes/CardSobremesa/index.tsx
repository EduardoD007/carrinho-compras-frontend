import { useDispatch, useSelector } from 'react-redux';
import InterfaceCardSobremesaProps from '../../Interfaces/InterfaceCardSobremesaProps';
import BotaoAddCart from '../Botoes/BotaoAddCart';
import './CardSobremesa.css';
import { use, useEffect, useState } from 'react';
import { RootState } from '../../store';
import TypeProduto from '../../Types/TypeProduto';
import { definirProduto, definirQuantidade } from '../../store/reducers/sobremesa';
import { adicionaBotao, mudaEstado } from '../../store/reducers/addCart';
import Carrinho from '../Carrinho/Carrinho';



const CardSobremesa = ( { id, categoria, imagem, nome, preco }: InterfaceCardSobremesaProps) => {

  const dispatch = useDispatch();
  const [numeroProdutos, setNumeroProdutos] = useState<number>(1);
  const carrinho = useSelector((state:RootState) => state.sobremesa);

  const zeraQuantidade = () => {
      const idExiste = carrinho.carrinho.find((produto) => id === produto.produto.id);

      if(!idExiste) {
        setNumeroProdutos(1)
      }
  }

  const novoProduto: TypeProduto = {
    id: id,
    image: { src: imagem },
    category: categoria,
    name: nome,
    price: preco
  }
  const adicionarCarrinho = () => {
     dispatch(definirProduto(novoProduto));
  }
  
  const contadorProdutos = (conta:string) => {
    let novoNumero;
    if(conta === 'menos') {
      if(numeroProdutos > 0) {
        novoNumero = numeroProdutos - 1;
        return setNumeroProdutos(novoNumero)
      }else {
        return setNumeroProdutos(0);
      }
    }
    novoNumero = numeroProdutos + 1;
    return setNumeroProdutos(novoNumero)
  }

  useEffect(() => {
    dispatch(definirQuantidade({id:id, quantidade:numeroProdutos}));
  }, [numeroProdutos])

  useEffect(() => {
    zeraQuantidade();
  }, [carrinho.carrinho])


  return (
    <div className='card-sobremesa' >
      <div className='container'>
        <img src={imagem} alt='image-waffle-desktop'></img>
        <BotaoAddCart
          id={id}
          numeroProdutos={numeroProdutos}
          contadorProdutos={contadorProdutos as (conta: string) => void}
          acionado={adicionarCarrinho}
        />
      </div>
      <div className='categoria'>{categoria}</div>
      <div className='produto'>{nome}</div>
      <div className='valor'>{preco}</div>
    </div>
  )
}

export default CardSobremesa;