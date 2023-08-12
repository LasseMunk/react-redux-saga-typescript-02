import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { productSaga } from './saga/products-saga';
import { productsReducer } from './slices/products-slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(productSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
