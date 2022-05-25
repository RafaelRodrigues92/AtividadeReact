import React from 'react';
import './Home.css';
import { Box } from '@material-ui/core';

function Home() {
    return (
        <Box>
            <h1 className='titulo'>Home</h1>
            <img className='img' src="https://i.imgur.com/XqRBhzo.jpg" title="source: imgur.com" />
        </Box>
    );
}

export default Home