import React, { useState } from 'react';
import useForm from './useForm'

import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Grid,
    Button,
    Checkbox,
    TextField,
    OutlinedInput,
    FormControl,
    InputLabel,
    InputAdornment,
    IconButton,
   
} from '@material-ui/core'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'
import SendIcon from '@material-ui/icons/Send';
import BlockIcon from '@material-ui/icons/Block';
import Visibility from './visibility.png'
import Invisibility from './invisible.png'

// const useStyles = makeStyles=({
//     mainContainer:{
//         display:'grid',
//         justifyContent:'center',
//         position:'relative',
//         zIndex:'5'
//     }
// })

const styles = {
    mainContainer:{
        display:'grid',
        justifyContent:'center',
        position:'relative',
        zIndex:'5'
    },
    FormContainer:{
        position:'relative',
        width:'28.123rem',
        height:'auto',
        padding:'2rem'
    },
    inputField:{
        width:'100%',
         marginBottom:'1rem'
    },
    btn:{
        width: '100%',
        height: '3rem',
        background: 'red',
        color:'#fff'
    },
    disabledBtn:{
        background: 'rgba(0,0,0, 0.38)',
        width:'100%',
        height: '3rem'
    },
    enabledBtn:{
        background: 'red',
        width:'100%',
        height: '3rem'
    }

}


function StepOne({activeStep, steps, handleNext}) {

    // DEFINE STATE SCHEMA
    const stateSchema = {
        firstname: {value: '', error: ''},
        lastname: {value: '', error: ''},
        emailname: {value: '', error: ''},
        password: {value: '', error: ''},
        confirmPassword: {value: '', error: ''}
    }

    const stateValidatorSchema = {
        firstname:{
            required: true,
            validator:{
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error:'first name must  be more than 1 character'
            }
        },

        lastname:{
            required: true,
            validator:{
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-])*/.test(value),
                error:'last name must  be more than 3 character'
            }
        },
        email:{
            required: true,
            validator:{
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error:'Invalid email format'
            }
        },
        password:{
            required: true,
            validator:{
                func: value => /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(value),
                error:'Minimum of aty least 6 characters and at least one special charcater e.g "@,#,%,%,&<9" '
            }
        }
    }



    const {values, errors, dirty, handleOnChange} = useForm(stateSchema, stateValidatorSchema)

    const {firstname, lastname, email, password, confirmPassword} = values;


    const [showPasswordValue, setshowPasswordValue] = useState({
        showPassword: false
    })

    const [showConfirmedPasswordValue, setshowConfirmedPasswordValue] = useState({
        showConfirmedPassword: false
    })

    const handleClickShowPassword = () => {
        setshowPasswordValue({
            showPassword: !showPasswordValue.showPassword
        })
    }

    const handleClickShowConfirmedPassword = () => {
        setshowConfirmedPasswordValue({
            showConfirmedPassword: !showConfirmedPasswordValue.showConfirmedPassword
        })
    }



    // const classes = useStyles()
    return (
        <div style={styles.mainContainer}>
            <Typography 
            variant='h5' 
            style={{color:'#999', textAlign:"center"}}>
                Sign up with email

            </Typography>
            <div style={styles.FormContainer}>
                <form>
                    <TextField 
                    style={styles.inputField}
                    label='First name'
                    variant='outlined'
                    value={firstname}
                    name='firstname'
                    onChange={handleOnChange}
                    />
                    {errors.firstname && dirty.firstname && (
                        <Typography
                         style={{marginTop:'0', color:'red', fontWeight:'200'}}
                        >
                            {errors.firstname}
                        </Typography>
                    )}
                    <TextField 
                    style={styles.inputField}
                    label='Last Name'
                    variant='outlined'
                    name='lastname'
                    value={lastname}
                    onChange={handleOnChange}
                    />
                    {errors.lastname && dirty.lastname && (
                        <Typography
                         style={{marginTop:'0', color:'red', fontWeight:'200'}}
                        >
                            {errors.lastname}
                        </Typography>
                    )}
                    
                    <IntlTelInput 
                    preferredCountries={['ru']}
                    />
                    <TextField 
                    style={styles.inputField}
                    label='Email'
                    variant='outlined'
                    name='email'
                    value={email}
                    onChange={handleOnChange}
                    />
                    {errors.email && dirty.email && (
                        <Typography
                         style={{marginTop:'0', color:'red', fontWeight:'200'}}
                        >
                            {errors.email}
                        </Typography>
                    )}
                    <FormControl 
                    variant='outlined'
                    style={styles.inputField}
                    >
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput
                        labelWidth={70}
                        value={password}
                        name="password"
                        onChange={handleOnChange}
                        type={showPasswordValue.showPassword ? 'text' : 'password'}
                        endAdornment ={
                            <InputAdornment position='end'>
                                <IconButton 
                                edge='end'
                                onClick={handleClickShowPassword}>
                                {showPasswordValue.showPassword ?
                                 <img src={Invisibility}  /> : <img  src={Visibility}  />}
                                    
                                </IconButton>
                            </InputAdornment>
                        }
                        
                        
                        />
                        {errors.password && dirty.password && (
                            <Typography
                             style={{marginTop:'0', color:'red', fontWeight:'200'}}
                            >
                                {errors.password}
                            </Typography>
                        )}
                    </FormControl>

                    <FormControl 
                    variant='outlined'
                    style={styles.inputField}
                    >
                        <InputLabel>Confirm  Password</InputLabel>
                        <OutlinedInput
                        labelWidth={135}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleOnChange}
                        type={showConfirmedPasswordValue.showConfirmedPassword ? 'text' : 'password'}
                        endAdornment ={
                            <InputAdornment position='end'>
                                <IconButton 
                                edge='end'
                                onClick={handleClickShowConfirmedPassword}>
                                {showConfirmedPasswordValue.showConfirmedPassword ?
                                 <img src={Invisibility}  /> : <img  src={Visibility}  />}
                                    
                                </IconButton>
                            </InputAdornment>
                        }
                        
                        
                        />
                        {confirmPassword !== password ? (
                            <Typography style={{color:'red'}}>
                                password does not match
                            </Typography>
                        ): ''}
                    </FormControl>
                    {
                        !firstname ||
                        !lastname ||
                        !email||
                        !password||
                        !confirmPassword || confirmPassword !== password
                        ?
                        (<Button
                            style={styles.disabledBtn}
                            varaint='contained'
                            disabled
                            type='submit'
                            endIcon={<BlockIcon />}
                            >
                                 {activeStep === 3? 'Finish' : 'SIGN UP'}
                            </Button>) : (
                                <Button
                                style={styles.enabledBtn}
                                varaint='contained'
                                onClick={handleNext}
                                type='submit'
                                endIcon={<SendIcon />}
                                >
                                    <Typography style={{color:'white'}}>
                                    {activeStep === 3? 'Finish' : 'SIGN UP'}
                                    </Typography>
                                    
                                </Button>
                            )
                    }
                    <>
                        
                    </>
                </form>
            </div>
            

        </div>
    )
}

export default StepOne
