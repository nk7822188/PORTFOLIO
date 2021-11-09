import React,{Component} from 'react';
import "./about.css";
import imagee from './download.png';
export class About extends Component{
    render(){
        return(
            <div className="about">
                <div className="picture">
                    <img src={imagee} alt=""></img>
                </div>
                <div className="para">
                <h1>About Me</h1>
        
                <p>I'm a web designer & front-end developer with 7 years of professional 
                    experience .I'm interested in all kinds of visual communication,but my major focus is on designing
                    web,mobile & tablet interfaces.I also have skills in other fields like branding ,icon design
                    or web development.
                </p>
                <p>I enjoy turning complex problems into simple, beautiful and intuitive designs.
                    When I'm not pushing pixels,you'll find me cooking ,gardening or working out in the park
                </p>
                </div>
            </div>
        )
    }
}
