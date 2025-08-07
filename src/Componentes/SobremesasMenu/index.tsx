import { useCallback, useEffect, useState } from 'react';
import TypeProduto from '../../Types/TypeProduto';
import CardSobremesa from '../CardSobremesa';
import './SobremesasMenu.css';
import api from '../../api/api'
import Carrinho from '../Carrinho/Carrinho';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store'; // Adjust the path if your store file is elsewhere
import { buscarProdutos } from '../../store/reducers/produtos';
import { adicionaBotao } from '../../store/reducers/addCart';
import Modal from '../Modal';


const SobremesasMenu = () => {

const dispatch = useDispatch();
const {produtos, status, erro} = useSelector((state: RootState) => state.produtos);
const [estadoModal, setEstadoModal] = useState(false);

const adicionaBtState = useCallback(
  async () => {
  const response: TypeProduto[] = (await api.buscaProdutos()) ?? [];

  for(const produto of response) {
    dispatch(adicionaBotao({id: produto.id, estado:false}))
  }
}, [dispatch]) 



useEffect(() => {
  dispatch(buscarProdutos() as any);
}, [dispatch])

useEffect(() => {
  adicionaBtState();
}, [adicionaBtState])

if (status === 'loading') return <p>Carregando...</p>;
if (status === 'failed') return <p>Erro: {erro}</p>;


  return (
    <div className='home-container'>
      <div className='sobremesas-container' >
        <div className='sobremesa-titulo'>
          Sobremesas
        </div>
        <div className='lista-produtos'>
          {produtos.map((produto) => {
          return (
            <div key={produto.id}>
              <CardSobremesa
              id = {produto.id}
              imagem = {produto.image.desktop}
              nome = {produto.name}
              categoria= {produto.category}
              preco = {produto.price}
            />
            </div> 
           )})}
        </div>
          {estadoModal && (
            <Modal
            estadoModal={(estado:boolean) => setEstadoModal(estado)}
            />
          )}
       
      </div>
        
      <div className='carrinho-container'>
        <Carrinho
          estadoModal = {(estado: boolean) => setEstadoModal(estado)}
        />
      </div>
    </div>
    
  )
}

export default SobremesasMenu;