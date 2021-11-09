import { Component } from "react";
import './home.css';
import image from "./DSC_3007.JPG";
import Resume from "./Neeraj's Resume_NSEC.pdf";
export class Home extends Component{
    render(){
        return(
            <div className="home">
               <div> 
                   <h2>Hi , I'm Neeraj Kumar
                    <br/>
                    <span>A Front-end Developer</span>
                </h2>
                <p>Get ready to turn ideas into reality</p>
                 
                <button className="btn1"><a href="#Contact">Hire Me</a></button>
                <button className="btn2"><a href={Resume}>Get Resume</a></button>
                </div>
                <div className="Pic">
                    <img src={image} alt=""></img>
                </div>
            </div>
        )
    }
}