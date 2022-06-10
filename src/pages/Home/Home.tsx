import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import ModalPostagens from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagens from '../../components/postagens/tabPostagem/TabPostagem';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import {toast} from 'react-toastify'

function Home() {
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: "undefined"
          })
          history("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid direction="row" justifyContent="center" alignItems="center" className='caixa caixa2'>
                <Grid alignItems="center" item xs={12} className='bemvindo' >   
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vinde!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagens/> 
                        </Box>
                        <Link className='text-decorator-none' to='/postagens'>
                        <Button variant="outlined" className='botao1'>Ver Postagens</Button>
                        </Link>
                    </Box>
                <Grid xs={12} className='postagens'>
                <TabPostagens />
                </Grid>
            </Grid>
        </Grid>    
        </>
    );
}

export default Home;