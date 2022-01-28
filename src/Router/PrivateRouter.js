import React from 'react';
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

// function PrivateRoute({ children, ...rest }) {
//   return (
//     <Route {...rest} render={({ location }) => {
//       return rest.uid === true
//         ? children
//         : <Redirect to={{
//             pathname: '/login',
//             state: { from: location }
//           }}
//  />
//     }} />
//   )
// }

function PrivateRoute ({ children, ...rest }) {
  return (
    <Route {...rest} render={() => {
      return rest.uid === true
        ? children
        : <Redirect to='/login' />
    }} />
  )
}

const mapStateToProps = (state) => ({
  uid : state.user.user
})
export default connect(mapStateToProps, null)(PrivateRoute)