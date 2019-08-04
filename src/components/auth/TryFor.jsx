import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import {Menu} from 'semantic-ui-react';


export default class TryFor extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        // <div>
        //   <Image src='/images/wireframe/square-image.png' avatar />
        //   <span>Username</span>
        // </div>

      <Menu className = 'left'>
        <Menu.Item>
         <Image src="icon.png" avatar />
         <span ><h3>Flow</h3></span>
        </Menu.Item>

        <Menu.Item
          name='features'
          active={activeItem === 'features'}
          onClick={this.handleItemClick}
        >
          Features
        </Menu.Item>

        <Menu.Item
          name='testimonials'
          active={activeItem === 'testimonials'}
          onClick={this.handleItemClick}
        >
          Testimonials
        </Menu.Item>

        <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={this.handleItemClick}>
          Sign-in
        </Menu.Item>
      </Menu>
      
    )
  }
}