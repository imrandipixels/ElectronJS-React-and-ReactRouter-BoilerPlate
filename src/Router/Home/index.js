import React from 'react'
import HOME from '../../Page/Home'
import PrivateRoute from '../PrivateRouter'
export default function PublicFunction() {
    return(
        <PrivateRoute>
            <HOME />
        </PrivateRoute>
    )
}