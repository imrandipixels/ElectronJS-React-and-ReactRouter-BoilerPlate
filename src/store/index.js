import React from 'react'
import Reducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default createStore( Reducer, applyMiddleware(thunk))