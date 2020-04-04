// Base Imports

import React from 'react';
import './App.css';

// React Material Design Imports

import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Link } from 'react-router-dom';

// Custom Imports

import Main from './components/main';


function App() {
  return (

// React MDL : NAVBAR

    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Portfolio" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/my_projects">My Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Portfolio">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/my_projects">My Projects</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main></Main>
        </Content>
    </Layout>
</div>

// NAVBAR

  );
}

export default App;
