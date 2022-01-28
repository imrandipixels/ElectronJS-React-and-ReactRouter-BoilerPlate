import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {Logout} from '../../store/action'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function Home(props){
    const {email, logout} = props
    console.log(email)
    return(
    <div>
        <Grid xs={12} sm={12}>

        </Grid>
        <h2>This is Home</h2>
        <Button variant="contained" onClick={logout} color="secondary">
        Logout
      </Button>
    </div>
    )
}
const mapStateToProps = (state) => ({
    email : state.user.email
})
const mapDispatchToProps = (dispatch) =>({
    logout : () => dispatch(Logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)