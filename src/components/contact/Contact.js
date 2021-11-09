import { Component } from "react";
import "./contact.css";
export class Contact extends Component{
    render(){
        return(
        
            <div className="container" >  
                <h1>Contact Me</h1> 
                <div className="title">
                    <h2>Let's connect</h2> 
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                        laudantium, totam rem aperiam, 
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta…
                    </p>
                </div>
                
                <div className="contact">
                    <h1>Send me a message</h1>
                    <form>
                        First & Last Name:
                        <br/>
                        <input type="text"></input>
                        <br/>
                        Phone Number:
                        <br/>
                        <input type="text"></input>
                        <br/>
                        Email Address:
                        <br/>
                        <input type="email"></input>
                        <br/>
                        Message:
                        <br/>
                        <input type="text"></input>
                        <br/>
                        <button>Send Message</button>
                    </form>
                </div>
               
            </div>
        );
    }
}