import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { logger } from 'redux-logger';
import { todoReducer } from "./todo/todoReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage  from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, todoReducer);
export const store = createStore(persistedReducer, applyMiddleware(logger))

export const persistor = persistStore(store);