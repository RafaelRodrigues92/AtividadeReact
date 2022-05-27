import React from 'react';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css'

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/RafaelRodrigues92" target="_blank">
                                <img className='redes' src="https://i.imgur.com/qQtYqr9.png?1" alt="Logo GitHub" />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                            <img className='redes' src="https://i.imgur.com/rQIBjvN.png" alt="Logo Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/rafaeldiasrodrigues92/" target="_blank">
                            <img className='redes' src="https://i.imgur.com/UGitOSA.png" alt="Logo LinkedIn" />
                            </a> 
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© Todos os Direitos Reservados Copyright:</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2" gutterBottom className='textos' align="center">Rafael Dias Rodrigues</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;
