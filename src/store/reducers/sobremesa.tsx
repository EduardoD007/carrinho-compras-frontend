import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import InterfaceSobremesaState from "../../Interfaces/InterfaceSobremesaState";
import TypeProduto from '../../Types/TypeProduto';

const estadoInicial: InterfaceSobremesaState = {
  carrinho: [],
  quantidadeTotal: 0,
}

const sobremesaSlice = createSlice({
  name:'sobremesa' ,
  initialState: estadoInicial,
  reducers:{
    definirProduto: (state, action: PayloadAction<TypeProduto>) => {
     const produtoExiste = state.carrinho.find((produto) =>  produto.produto.id === action.payload.id)
     if(!produtoExiste) {
      state.carrinho.push({produto:action.payload, quantidade: 1})
     }
    },
    definirQuantidade: (state, action: PayloadAction<{ id: number, quantidade: number}>) => {
      console.log(action.payload.quantidade)
      const item = state.carrinho.find((produto) => produto.produto.id === action.payload.id)
      if(item) {
        item.quantidade = action.payload.quantidade;
      }
    },
    retiraProduto: (state, action: PayloadAction<{id:number}>) => {
       const produtoExiste = state.carrinho.findIndex((produto) =>  produto.produto.id === action.payload.id)
     if(produtoExiste !== -1) {
      state.carrinho.splice(produtoExiste,1)
     }
    },
    quantidadeCarrinho: (state) => {
      state.quantidadeTotal = 0;
      for (const produto of state.carrinho) {
        state.quantidadeTotal = state.quantidadeTotal + produto.quantidade;
      }
    },
    
  }
})

export const { definirProduto, definirQuantidade, retiraProduto, quantidadeCarrinho } = sobremesaSlice.actions;
export default sobremesaSlice.reducer;