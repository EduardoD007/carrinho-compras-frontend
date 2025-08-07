import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '../../api/api';
import InterfaceProdutoState from '../../Interfaces/InterfaceProdutoState';
import TypeProduto from '../../../../backend/src/Types/TypeProduto';

export const buscarProdutos = createAsyncThunk(
  'produtos/buscarProdutos',
  async () => {
    const response = await api.buscaProdutos()
    return response;
  }
)

const estadoInicialProdutos: InterfaceProdutoState = {
  produtos: [],
  status: 'idle',
  erro: null,
};

const produtosSlice = createSlice({
  name: 'produtos',
  initialState:estadoInicialProdutos,
  reducers:{},
  extraReducers: (builder) => {
    builder
      .addCase(buscarProdutos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(buscarProdutos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.produtos = action.payload ?? []; // <- Isso deve salvar os dados
      })
      .addCase(buscarProdutos.rejected, (state, action) => {
        state.status = 'failed';
        state.erro = action.error.message ?? 'Erro';
      });
  },
  
});

export default produtosSlice.reducer;