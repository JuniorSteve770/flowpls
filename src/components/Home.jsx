import React, {Component} from 'react';
import { Card, Button} from 'react-bootstrap';
import ReactPlayer from 'react-player'
import Navbar from './Navbar';
import Footer from './foter';
//Image Imports starts Here
import zoro1 from './Imges/layout/0.png';
import zoro2 from './Imges/layout/1.png';
import zoro3 from './Imges/layout/2.png';
import zoro4 from './Imges/layout/3.png';
import zoro5 from './Imges/layout/4.png';
//Image Imports Ends Here
import zoro6 from './Imges/layout/6.png';
// card 8
import {Item} from 'semantic-ui-react'
import zoro7 from './Imges/layout/7.png';
import zoro8 from './Imges/layout/8.png';
import zoro9 from './Imges/layout/9.png';
import zoro10 from './Imges/layout/10.png';
import zoro11 from './Imges/layout/11.png';
import zoro12 from './Imges/layout/12.png';
import zoro13 from './Imges/layout/13.png';






class Home extends Component {
  
    render() {
        return (
           <div> <Navbar/>              
             
             <Card1/>
             <Video1/>
             <Card2/>
             <Card3/>
             <Card4/>
             <Card5/>
             <Card6/>
             <Card7/>
             <Card8/>
             <Card9/>
             <Card10/>
             <Card11/>
             <Card12/>
             <Card13/>

                                
             <Footer/>
            </div> 
        );
    }
}
export default Home;


//here is a class
const Card1 = () =>
    <div>
        <Card className="text-center">
            {/* <Card.Header><h2> Teamwork redefined.  </h2></Card.Header> */}
            <Card.Body>
                <Card.Title><h2> Teamwork redefined.  </h2></Card.Title>
                <Card.Text>
                All of your team's work, projects, and tasks in one collaborative workspace.
                </Card.Text>
                <Button variant="warning">Try Flow for 30 Days</Button>
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
   </div>


//Video playing  
const Video1 = () =>

    <div width="520" height="340">
        <span>    
          <ReactPlayer url='https://assets.getflow.com/assets/home/New-Flow-Homepage-video.mp4?mtime=20180224115956' playing />
          {/* <ReactPlayer url='https://assets.getflow.com/assets/home/New-Flow-Homepage-video.mp4?mtime=20180224115956' playing />  */}
       </span>
   </div>

const Card2 = () =>
<div>
    <Card className="text-center">
        {/* <Card.Header><h4> PROJECT MANAGEMENT</h4></Card.Header> */}
        <Card.Body>
         <br/>
       
               <img width={40} height={40} className="mr-3" src={zoro1} alt="Generic placeholder" /> 
             
               <img width={85} height={70} className="mr-3" src={zoro2} alt="Generic placeholder" />
             
               <img width={50} height={50} className="mr-3" src={zoro3} alt="Generic placeholder" />

               <img width={80} height={50} className="mr-3" src={zoro4} alt="Generic placeholder" />

               <img width={80} height={50}  className="mr-3" src={zoro5} alt="Generic placeholder" />              
                  
        <br/><br/>
        
            <Card.Title><h4>PROJECT MANAGEMENT</h4></Card.Title><br/>
            <Card.Title><h3>The powerful new way to manage any project.</h3></Card.Title>
            <Card.Text><br/>
            <p> Flow’s flexible team project management software is designed for 
            any project <br/>or workflow. Plan ahead, set priorities and track 
            projects from start to finish.<br/> From simple checklists to kanban
            boards, we’ve got you covered. </p>
            </Card.Text>
            {/* <Button variant="warning">Try Flow for 30 Days</Button> */}
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
</div>

const Card3 = () =>
<div>
    <Card className="text-center">
        <Card.Header>
        <img width={800} height={550}  className="mr-3" src={zoro6} alt="Generic placeholder" />              
        </Card.Header>
   </Card>
</div>

// react.semantic-ui.com
const Card4 = () =>
<div>
<Item.Group>
        <Item>
        {/* <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />    */}
        <Item.Image size='big' variant="left" src={zoro7} />

        <Item.Content verticalAlign='top'>
            <Item.Header> <br/><br/>PROJECT MANAGEMENT </Item.Header>            
            
            <Item.Description floated='right'>
            <h4>
             <strong> <br/>Get instant visibility into all of<br/> your team’s work. </strong>
            </h4>
                Take the 30,000 foot view and track the progress of 
                all <br/>your team or company's initiatives with Flow's Projects <br/> Dashboard.
            </Item.Description>
        </Item.Content>
        </Item>
    </Item.Group>
</div>

const Card5 = () =>
<div>
    <Item.Group>
        <Item>

            <Item.Description floated='left'>
                <h5>
                    <strong> <br/><br/><br/> PROJECT MANAGEMENT <br/></strong>
                </h5>
                <h4>
                    <strong>Plan every project in detail with task timelines.<br/></strong>
                </h4>

                Task Timelines help you create a project plan for any 
                kind of project. Visually map out tasks and deadlines,<br/>  
                share your plan with your team and easily update it as
                work progresses and things change.

            </Item.Description>
            <Item.Image size='big' variant="right" src={zoro8} />            
        </Item>
    </Item.Group>
</div>

const Card6 = () =>
<div>
    <Item.Group>
        <Item>
            
            <Item.Image size='big' variant="left" src={zoro9} />

            <Item.Content verticalAlign='top'>
                <Item.Header> <br/><br/><br/>PROJECT MANAGEMENT </Item.Header>            
                
                <Item.Description floated='right'>
                    <h4>
                        <strong> <br/>
                            Plan ahead with Beautiful <br/> project timelines
                            {/* Plan every project in detail with <br/>task timelines.  */}
                        </strong>
                    </h4> 

                    Task Timelines help you create a project plan for any <br/>kind of project. 
                    Visually map out tasks and deadlines,<br/> share your plan with your team and easily 
                    update it as work progresses and things change.

                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
</div>

const Card7 = () =>
<div>
    <Card className="text-center">
        {/* <Card.Header><h2> Teamwork redefined.  </h2></Card.Header> */}
        <Card.Body>
            <Card.Title><h2> Get it together for {new Date().getFullYear()} 2019. Switch to Flow. </h2></Card.Title>
            <Card.Text>
            Start your 30-day free trial. No credit card required.
            </Card.Text>
            <Button variant="warning">Try Flow for 30 Days</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
</div>

const Card8 = () =>
<div>
    <Card className="text-center">
        {/* <Card.Header><h4> PROJECT MANAGEMENT</h4></Card.Header> */}
        <Card.Body>       
        
            <Card.Title><h4>TEAM TASK TRACKING</h4></Card.Title><br/>
            <Card.Title><h3>View, organize, and prioritize all of your team’s tasks.</h3></Card.Title>
            <Card.Text><br/>
            <p> Manage work using task lists, visual cards, or on the calendar. Keep track of your own to-do list,<br/> 
            and stay on top of any teammate or report’s workload.</p>
            </Card.Text>
            {/* <Button variant="warning">Try Flow for 30 Days</Button> */}
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
    </Card>
</div>

const Card9 = () =>
<div>
    <Card className="text-center">
        <Card.Header>
        <img width={800} height={550}  className="mr-3" src={zoro10} alt="Generic placeholder" />              
        </Card.Header>
   </Card>
</div>



const Card10 = () =>
<div>
    <Item.Group>
        <Item>

            <Item.Description floated='left'>
                <h5>
                    <strong> <br/><br/><br/> PROJECT MANAGEMENT <br/></strong>
                </h5>
                <h4>
                    <strong>Easily balance workloads and manage resources.<br/></strong>
                </h4>

                See who’s busy, and who’s not, this week or next month. <br/> 
                Quickly re-assign tasks and rebalance workloads with drag and drop.

            </Item.Description>
            <Item.Image size='big' variant="right" src={zoro11} />            
        </Item>
    </Item.Group>
</div>

const Card11 = () =>
<div>
    <Item.Group>
        <Item>
            
            <Item.Image size='big' variant="left" src={zoro12} />

            <Item.Content verticalAlign='top'>
                <Item.Header> <br/><br/><br/>TEAM COLLABORATION</Item.Header>            
                
                <Item.Description floated='right'>
                    <h4>
                        <strong> <br/>
                        Drive accountability by keeping <br/> talk focused on tasks.
                        </strong>
                    </h4> 

                    Unlike team chat apps, Flow is designed to help your <br/> 
                    team stay focused by keeping messages <br/> relevant and actionable.

                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
</div>

const Card12 = () =>
<div>
    <Item.Group>
        <Item>
            
            <Item.Image size='big' variant="left" src={zoro13} />

            <Item.Content verticalAlign='top'>
                <Item.Header> <br/><br/><br/>TEAM COLLABORATION</Item.Header>            
                
                <Item.Description floated='right'>
                    <h4>
                        <strong> <br/>
                        Stay on top of everything <br/> happening in your team.
                        </strong>
                    </h4> 

                    Stay in control, and never miss a <br/> single notification, 
                    task or comment <br/> with Flow’s catch up feed.

                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
</div>

const Card13 = () =>
    <div>
        <Card className="text-center">
            {/* <Card.Header><h2> Teamwork redefined.  </h2></Card.Header> */}
            <Card.Body>
                <Card.Title><h2> Ready to start working smarter? </h2></Card.Title>
                <Card.Text>
                Join the 2,500+ companies relying on Flow.
                </Card.Text>
                <Button variant="warning">Try Flow for 30 Days</Button>
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
   </div>