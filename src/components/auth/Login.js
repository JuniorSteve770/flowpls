import React, {Component} from 'react';
// var firebase = 'firebase';
var uuid = 'uuid';

// var Config = {
//     apiKey: "AIzaSyBTa9deeSTxfJAobeinh1dNm7QwVPm1khE",
//     authDomain: "flowplus-77.firebaseapp.com",
//     databaseURL: "https://flowplus-77.firebaseio.com",
//     projectId: "flowplus-77",
//     storageBucket: "",
//     messagingSenderId: "864432949357",
//     appId: "1:864432949357:web:d6c31632af199be5"
//   };

//   firebase.initializeApp(Config);

class Login extends Component {
    constructor (props){
        super(props);

        this.state = {
            uid: uuid.v1(),
            studentName:'killerman',
            answer:{

                answer1:'',
                answer2:'',
                answer3:'',
            },
            isSubmitted: false
        }
        this.nameSubmit = this.nameSubmit.bind(this);
        this.answerSelected = this.answerSelected.bind(this);
    }

    render() {
        var studentName;
        var questions;

        if(this.state.studentName === '' && this.state.isSubmitted === false ){
            studentName = 
            <div>
                <h1>Hey please enter your Name:</h1>
                <form>
                    <input className="namy" type = "texte" placeholder = "Enter your Name" ref="name"/>
                </form>
            </div>
            questions=''
        }else if (this.state.studentName !== '' && this.state.isSubmitted === false){
            studentName = <h1>Welcome to You New Commer, {this.state.studentName}</h1>;
            questions = 
            <div>
               <h2> Here are some questions </h2>
               <form>
                <div className="card">
                    <label>What are the courses you like the Most</label>
                    <br>
                    </br>
                   <ul>
                    <input type="radio" name="answer1" value ="Technology" onChange = {this.answerSelected}/> 
                    Technology
                    <input type="radio" name="answer1" value ="TDesign" onChange = {this.answerSelected}/> 
                    Design
                    <input type="radio" name="answer1" value ="Marketing" onChange = {this.answerSelected}/> 
                    Marketing
                    </ul>
                </div>
                <input className ="feedback-button" type="submit" value ="submit"/>
               </form>
            </div>
        }
        return (
           <div>
               {studentName}
               ------------------------------
               {questions}
           </div> 
        );
    }
}export default Login;

