import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import ModalPostagens from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagens from '../../components/postagens/tabPostagem/TabPostagem';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import useLocalStorage from 'react-use-localstorage';


import './Home.css';

function Home() {
    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={12} className='bemvindo' >   
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagens/> 
                        </Box>
                        <Link to='/postagens'>
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