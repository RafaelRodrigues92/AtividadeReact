import React, { useState } from 'react'
import { AppBar, Box, Grid, Tab, Tabs, Typography } from '@material-ui/core'
import { TabContext, TabPanel } from '@material-ui/lab'

import ListaPostagem from '../listaPostagem/ListaPostagem'

import './TabPostagem.css';

function TabPostagem() {

    const [value, setValue] = useState('1')

    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue)
    }

    return (
        <>
            <TabContext value={ value }>

                <AppBar position="static" className='appbar'>
                    <Tabs centered indicatorColor="secondary" onChange={ handleChange }>
                        <Tab label="Todas as postagens" value="1"  />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>

                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>

                <TabPanel className='sobre' value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="tituloSobre">Sobre mim:</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Já atuei em diferentes áreas do mercado de trabalho, na grande maioria voltada ao atendimento ao cliente. Hoje sou Barbeiro, mas há um tempo venho estudando e me estruturando para ter uma nova colocação profissional como programador e desenvolvedor de software.
 Sempre entro de cabeça em qualquer que seja o desafio que me proponho a participar, busco melhorias sempre para o ambiente ao meu redor e acho de grande valia o desenvolvimento em grupo para um resultado mais rápido e eficiente. </Typography>
               <img src="https://i.imgur.com/CXQzy3I.jpg" alt="" width="250px" />
                </TabPanel>

            </TabContext>
        </>
    )
}

export default TabPostagem;