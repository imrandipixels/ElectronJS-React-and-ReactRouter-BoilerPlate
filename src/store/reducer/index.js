import React from 'react'
import {combineReducers} from 'redux'
import userReducer from './user_reducer'

export default combineReducers({
    user : userReducer
})