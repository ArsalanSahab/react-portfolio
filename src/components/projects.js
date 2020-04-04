import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://thumbs.dreamstime.com/b/python-icon-filled-python-icon-website-design-mobile-app-development-python-icon-filled-development-collection-155362649.jpg) center / cover'}} >Python #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://thumbs.dreamstime.com/b/python-icon-filled-python-icon-website-design-mobile-app-development-python-icon-filled-development-collection-155362649.jpg) center / cover'}} >Python #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://thumbs.dreamstime.com/b/python-icon-filled-python-icon-website-design-mobile-app-development-python-icon-filled-development-collection-155362649.jpg) center / cover'}} >Python #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      
        return(
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >Flask #1</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >Flask #2</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >Flask #3</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
  
  
        )
      
    } else if(this.state.activeTab === 2) {
      
        return(
          <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i7.pngguru.com/preview/18/497/108/react-javascript-responsive-web-design-github-angularjs-github.jpg) center / cover'}} >ReactJS #1</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i7.pngguru.com/preview/18/497/108/react-javascript-responsive-web-design-github-angularjs-github.jpg) center / cover'}} >ReactJS #2</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
  
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i7.pngguru.com/preview/18/497/108/react-javascript-responsive-web-design-github-angularjs-github.jpg) center / cover'}} >ReactJS #3</CardTitle>
              <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              </CardText>
              <CardActions border>
                <Button colored>GitHub</Button>
                
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
  
  
        )
      
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Python</Tab>
          <Tab>Flask</Tab>
          <Tab>ReactJS</Tab>
          
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
