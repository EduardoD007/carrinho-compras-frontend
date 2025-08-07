import { configureStore } from '@reduxjs/toolkit';
import produtosSlice from './reducers/produtos';
import sobremesaSlice from './reducers/sobremesa';
import botaoAddCartSlice from './reducers/addCart';

const store = configureStore({
  reducer: {
    produtos: produtosSlice,
    sobremesa: sobremesaSlice,
    botaoAddCart: botaoAddCartSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;