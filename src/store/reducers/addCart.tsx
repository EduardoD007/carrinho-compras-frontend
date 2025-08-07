import InterfaceBotaoAddCartState from "../../Interfaces/InterfaceBotaoAddCartState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const estadoInicial: InterfaceBotaoAddCartState = {
botao: []
}

const botaoAddCartSlice = createSlice({
  name:'botaoAddCart',
  initialState: estadoInicial,
  reducers: {
    mudaEstado(state, action: PayloadAction<{id:number}>) {
      const botaoExiste = state.botao.findIndex((bt) => action.payload.id === bt.id)
      if(botaoExiste !== -1) {
       
        if(state.botao[botaoExiste].estado === false ) {
          state.botao[botaoExiste].estado = true;
        }else {
           state.botao[botaoExiste].estado = false;
        }
      }
    },

    adicionaBotao(state, action: PayloadAction<{id:number, estado: boolean}>) {
      state.botao.push({ id: action.payload.id, estado: action.payload.estado })
    }
  },
    
})


export const { adicionaBotao, mudaEstado} = botaoAddCartSlice.actions;
export default botaoAddCartSlice.reducer;