import React,{Component} from 'react'
import ReactPlayer from 'react-player'


 
export default class Video extends Component {
  render () {
    return (
    <div width="320" height="240">
    <span>    
        <ReactPlayer url='https://assets.getflow.com/assets/home/New-Flow-Homepage-video.mp4?mtime=20180224115956' playing />
        <ReactPlayer url='https://assets.getflow.com/assets/home/New-Flow-Homepage-video.mp4?mtime=20180224115956' playing /> 
    
    </span>
    </div>
    )    
 }
}