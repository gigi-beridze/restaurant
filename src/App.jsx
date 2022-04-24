import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/Search';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import React, { useState, useEffect } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Loader from './components/Loader';

function App() {
  function gigi(){
    console.log('gigi')
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to="/">home</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
        <div style={{ display: 'flex', padding: 50, justifyContent:'center' }}>
          <Pagination  onClick={gigi} count={10} />
        </div>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size:1.5rem;
  font-weight: 400;
  font-family: 'Lopster Two',cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
    svg{
      font-size:2rem;
    }
`;

export default App;
