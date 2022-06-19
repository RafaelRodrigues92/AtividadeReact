import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from "react-toastify"

function ListaPostagem() {
  const [postagens, setPostagens] = useState<Postagem[]>([])
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

  async function getPostagem() {
    await busca("/postagens", setPostagens, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPostagem()

  }, [postagens.length])

  return (
    <>
      {
        postagens.map(postagem => (
          <Grid className='gridpostagem'>

          <Box m={2} className='boxpostagem' >
            <Card variant="outlined">
              <CardContent className="postagem">
                <Typography color="textSecondary" gutterBottom>
                  <img src="https://i.imgur.com/a5hDdnh.jpg" width={400} alt="" />
                </Typography>
                <Typography variant="h5" component="h2">
                  {postagem.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  {postagem.tema?.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${postagem.id}`} className="text-decorator-none" >
                    <Box mx={1} className='bntListPost' >
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${postagem.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
          </Grid>
        ))
      }
    </>
  )
}

export default ListaPostagem;

