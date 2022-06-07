import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import CadastroUsuarios from './pages/cadastroUsuarios/CadastroUsuarios';
import Home from './pages/Home/Home'
import Login from './pages/login/Login';
import ListaTema from './components/temas/listaTema/ListaTema'
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem'
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import './App.css';


function App() {
  return(
    <Router>
    <Navbar />
    <div style={{ minHeight: '100vh' }}>
    <Routes> // Antigo Switch
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/home" element={<Home />} />
    <Route path="/cadastro" element={<CadastroUsuarios />} />
    <Route path="/temas" element={<ListaTema />} />
    <Route path="/postagens" element={<ListaPostagem />} />
    <Route path="/formularioPostagem" element={<CadastroPostagem />} />
    <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
    <Route path="/formularioTema/" element={<CadastroTema />} />
    <Route path="/formularioTema/:id" element={<CadastroTema />} />
    <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
    <Route path="/deletarTema/:id" element={<DeletarTema />} />

    </Routes>
    </div>
    <Footer />
    </Router>
    )
    
}

export default App;
