import React, {useState, useEffect, ChangeEvent} from 'react';
import { Grid, Box, Typography, TextField, Button  } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import { login } from '../../services/Service';
import './Login.css';
import {useDispatch} from 'react-redux'
import { addToken } from '../../store/tokens/actions'
import {toast} from 'react-toastify'

function Login(){

    let history = useNavigate()
    const dispatch = useDispatch();
    const [token, setToken] = useState('')
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: "",
        senha: "",
        token: ""
    })

    useEffect(() => {
        if(token !== ''){
            dispatch(addToken(token))
            history('/home')
        }
    }, [token])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value           
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            toast.success('Usuário logado com sucesso', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })

        } catch (error) {
            toast.error('Dados do usuário inconsistentes', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
        }
    }    
    return(
            <Grid container className='gridlogin'>
                <Grid xs={6} className='gridformlogin'>
                <Box className='boxform'>
                    <form onSubmit={onSubmit} className='formlogin'>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={ (e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth></TextField>
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth></TextField>
                        <Box textAlign='center'>
                            <Button type='submit' variant='contained' className='botao2'>
                            Logar
                            </Button>
                        </Box>
                    </form>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='naotemconta'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro' className='text-decoration-none'>
                        <Typography variant='subtitle2' gutterBottom align='center' className='cadastre'>Cadastre-se</Typography>
                        </Link>
                </Box>
                </Grid>
            </Grid>
    )
}

export default Login;