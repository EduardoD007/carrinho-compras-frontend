import InterfaceBotaoMenos from '../../../Interfaces/InterfaceBotaoMenos';
import './BotaoMenos.css';
import { CiCircleMinus } from "react-icons/ci";
import { TiPlus } from "react-icons/ti";

const iconeProps = {
  size: 40
};

const BotaoMenos = ({contadorProdutos, numeroProdutos}:InterfaceBotaoMenos) => {

  const retiraProduto = () => {
    contadorProdutos('menos')
  }

  return (
    <button  type='button' onClick={retiraProduto}>
      <TiPlus className='menos'/>
    </button>
  )
}
export default BotaoMenos;