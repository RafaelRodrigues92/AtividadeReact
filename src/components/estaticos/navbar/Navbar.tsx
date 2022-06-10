import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import './Navbar.css'
import { addToken } from '../../../store/tokens/actions';
import {toast} from 'react-toastify'

function Navbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens);

  function goLogout() {
    dispatch(addToken(''))
    toast.info('Usuário deslogado!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: "undefined"
    })
    navigate('/login')
  }

  var navbarComponent;

  if(token !== ""){
    navbarComponent = 
    <AppBar position="static" className='navbar'>
        <Toolbar variant="dense">
          <Box className='cursor'>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                  home
                </Typography>
              </Box>
            </Link>
            <Link to="/postagens" className="text-decorator-none">
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                  postagens
                </Typography>
              </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                  temas
                </Typography>
              </Box>
            </Link>
            <Link to="/formularioTema" className="text-decorator-none">
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                  cadastrar tema
                </Typography>
              </Box>
            </Link>
            <Link to="/formularioPostagem" className="text-decorator-none">
              <Box mx={1} className='cursor'>
                <Typography variant="h6" color="inherit">
                  cadastrar postagem
                </Typography>
              </Box>
            </Link>
            <Box mx={1} className='cursor' onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>

          </Box>

        </Toolbar>
      </AppBar>
  }

  return (
    <>
    {navbarComponent}
    </>
  )
}

export default Navbar;

