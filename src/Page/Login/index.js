import React, {useState} from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import {LoginUser} from '../../store/action' 

const useStyles = makeStyles((theme) => ({
    container:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'gray',
        height:'770px'

    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'column',
        backgroundColor:'white',
        padding:'5%'
      },
      margin: {
        margin: theme.spacing(1),
      },
      withoutLabel: {
        marginTop: theme.spacing(5),
      },
      textField: {
        width: '39ch',
        marginBottom:'5%'
      },
      passField: {
        width: '42ch',
      },
      heading:{
          display:'flex',
          marginBottom:'15%',
          fontSize:'30px',
          width:'100%',
          justifyContent:'center',
          alignItems:'center'
      },
      emailicon:{
          padding:'500px',
          backgroundColor:'red'
      }
}));
function Login(props) {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {uid, action_login} = props
    if (uid === true) {
        return <Redirect to='/' />
    }
    const FormCall = () => {
        const user = {
            user:true,
            email,
            password
        }
        action_login(user)
    }
    return (
        <div className={classes.container}>
            <form className={classes.root} noValidate autoComplete="off">
                <span className={classes.heading}>LOGIN</span>
                <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                            <TextField  className={classes.textField} value={email} onChange={(e) => setEmail(e.target.value)} id="input-with-icon-grid" label="Email.." />
                            <AccountCircle />
                        </Grid>
                        
                    </Grid>
                </div>
                <FormControl className={clsx(classes.margin, classes.passField)}>
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    onMouseDown={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button variant="contained" onClick={FormCall} className={classes.withoutLabel}>Login</Button>
            </form>

        </div>
    )
}


const mapStateToProps = (state) => ({
    uid: state.user.user
})
const mapDispatchToProps = (dispatch) => ({
    action_login : (data) => dispatch(LoginUser(data))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)