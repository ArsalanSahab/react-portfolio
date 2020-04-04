import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-1/p320x320/77315329_1304093866437834_5439449726741118976_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeE5hcFNyKu8c6sDlHoy-6zOAy4e7soSCxYDLh7uyhILFrKffZFK_eTOw5Rij67H5Yq-3526YwxlU-OJjbJ6Y-HR&_nc_ohc=6WFfB1NOHAAAX8Dtokr&_nc_ht=scontent.fkhi10-1.fna&_nc_tp=6&oh=70d61bb4a30690850aca8a31c17bbf91&oe=5EAE9F60"
              alt="avatar"
              className="avatar-img"
              />
              <br></br>

            <div className="banner-text">
              <h1>Computer Scientist</h1>

            <hr/>

          <p>HTML/CSS | Python | Flask | Django | ReactJS | JavaScript</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/muhammad-arsalan-khurram-46185457/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/ArsalanSahab" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
