// Base Imports

import React from 'react';
import './App.css';

// React Material Design Imports

import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';


function App() {
  return (

// React MDL : NAVBAR

    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>

// NAVBAR END

  );
}

export default App;
