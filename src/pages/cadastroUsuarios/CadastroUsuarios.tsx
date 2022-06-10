import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Box, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { cadastro } from '../../services/Service';
import User from '../../models/User';
import { toast } from 'react-toastify';

import './CadastroUsuarios.css'

function CadastroUsuarios() {

    let history = useNavigate();

    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })
    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })
    useEffect(() => {
        if (userResult.id !== 0) {
            history('/login')
        }
    }, [userResult])
    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha && user.senha.length >= 8) {

            try {
                await cadastro(`/usuarios/cadastrar`, user, setUserResult)
                toast.success('Usuario cadastrado com sucesso!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: "undefined"
                  });                   
            } catch (error) {
                console.log(`Error: ${error}`)
                toast.error('Usuario já existente!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false,
                    theme: "colored",
                    progress: "undefined"
                  });
                }

        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' >
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box padding={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='nome' variant='outlined' name='nome' margin='normal' fullWidth required/>
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth required/>
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth required/>
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmar senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth required/>
                        <TextField id='foto' label='foto' variant='outlined' name='foto' margin='normal' fullWidth></TextField>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decoration-none'>
                                <Button variant='contained' className='btnCancelar' color='secondary' >
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' className='btnCadast' variant='contained' >
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuarios;