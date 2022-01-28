import React from 'react'
export function LoginUser(data){
    return (dispatch)=>{
        dispatch({
            type:'USERLOGIN',
            payload: data
        })
    }
}

export function Logout(){
    const data={
        user: false
    }
    return (dispatch)=>{
        dispatch({
            type:'USERLOGOUT',
            payload: data
        })
    }
}