// React MDL Imports

import React from 'react';
import { Switch, Route } from 'react-router-dom';


// Routing Imports

import LandingPage from './landingpage';
import About from './about';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects'

const Main = () => (

    <Switch>


<Route exact path="/" component={LandingPage}/>
<Route path="/aboutme" component={About}/>
<Route path="/my_projects" component={Projects}/>
<Route path="/resume" component={Resume}/>
<Route path="/contact" component={Contact}/>

    </Switch>


);


export default Main;