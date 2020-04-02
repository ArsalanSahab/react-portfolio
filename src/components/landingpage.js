// Base imports

import React, { Component } from 'react';
import Contact from './contact';


// React MDL Imports

import { Grid, Cell } from 'react-mdl';


class LandingPage extends Component {

    render() {

        return(



            <div style={{width:'100%', margin:'auto'}}>

            <Grid className="landing-grid">
                <Cell col={12}>

                    <img src="data:image/png;base64,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"
                        alt="avatar"
                        className="avatar-img"
                    />
                    <div className="banner-text">
                    
                    <h1>Computer Scientist</h1>

                    <hr/>

                    <p>HTML/CSS | Python | Flask | Django | Javascript | React | SQL</p>

                    <div className="social-links">


                        <a href="http://google.com"  rel="noopener noreferrer" target="_blank">

                            <i className="fa fa-linkedin-square" aria-hidden="true"/>

                        </a>

                        <a href="http://google.com"  rel="noopener noreferrer" target="_blank">

                            <i className="fa fa-github-square" aria-hidden="true"/>

                        </a>




                    </div>


                    </div>

                </Cell>
            </Grid>
            </div>




        )



    }






};

export default LandingPage;