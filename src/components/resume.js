import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://scontent.fkhi10-1.fna.fbcdn.net/v/t1.0-1/p320x320/77315329_1304093866437834_5439449726741118976_n.jpg?_nc_cat=107&_nc_sid=dbb9e7&_nc_eui2=AeE5hcFNyKu8c6sDlHoy-6zOAy4e7soSCxYDLh7uyhILFrKffZFK_eTOw5Rij67H5Yq-3526YwxlU-OJjbJ6Y-HR&_nc_ohc=6WFfB1NOHAAAX8Dtokr&_nc_ht=scontent.fkhi10-1.fna&_nc_tp=6&oh=70d61bb4a30690850aca8a31c17bbf91&oe=5EAE9F60"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Arsalan</h2>
            <h4 style={{color: 'grey'}}>Programmer/Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2018}
              schoolName="A Levels"
              schoolDescription="Subjects : Mathematics, Computer Science,  Physics"
               />

               <Education
                 startYear={2018}
                 endYear={'OnGoing'}
                 schoolName="Institute of Business Administration Karachi"
                 schoolDescription="Bachelors of Science in Computer Science"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
