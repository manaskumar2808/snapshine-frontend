import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import reducerMap from './reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers(reducerMap);

const makeStore = () => configureStore({ reducer }, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore);