import React,{Component} from 'react';
import {Media} from 'react-bootstrap';
import zoro from './Imges/zoro.TS';
import zoro1 from './Imges/11.mp4';

class media extends Component{

    render (){

        return(
            <Media>
   <img
    width={100}
    height={100}
    circle className ="profile-pic"
      src={zoro} alt="Generic placeholder"
    
  />
  <Media.Body>
    <h5>Media Heading</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>





    <Media>
      <img
        width={1000}
        height={1000}
        className="mr-3"
        src={zoro1}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>Media Heading</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
    </Media>
  </Media.Body>
</Media>



        ); 
    }

}export default media;







