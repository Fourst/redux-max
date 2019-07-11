import {applyMiddleware, createStore} from 'redux'
import { rootReducer } from '../reducers'
//Добавить усилитель
import { ping } from '../enhancers/ping'
import logger from 'redux-logger'

export const store = createStore(rootReducer,applyMiddleware(logger))