import React, {Component} from 'react'
import {Item} from 'semantic-ui-react'
import zoro7 from './Imges/layout/7.png';

class Card5 extends Component {
    
    render() {
        return (

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


   
            
        );
    }
}

export default Card5;