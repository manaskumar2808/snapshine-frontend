import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import ImageReducer from './reducers/image';

const reducer = combineReducers({
    img: ImageReducer
});

const makeStore = () => configureStore({ reducer });

export const wrapper = createWrapper(makeStore);