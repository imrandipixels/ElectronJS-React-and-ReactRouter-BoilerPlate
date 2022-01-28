import React from 'react'
const INITIAL_STATE={
    user:false
}

export default function App(store=INITIAL_STATE, action){
    const {type, payload} = action
    console.log(type)
    switch(type){
        case 'USERLOGIN':
        return({
            ...store,
            ...payload
        })
        case 'USERLOGOUT':
        return({
            ...store,
            ...payload
        })
        default:
            return(store)
    }
    return store
}