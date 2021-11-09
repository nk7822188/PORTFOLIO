import { Component } from "react";
import "./navbar.css";
export class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <div>
                    <h2>Neeraj Kumar</h2>
                </div>
                <div className="navcontent">

                    <a href='#App'>Home</a>
                    <a href='#About'>About</a>
                    <a href='#Portfolio'>Portfolio</a>
                    <a href='#Resume'>Resume</a>
                    <a href='#Contact'>Contact</a>
                </div>
            </div>
        )
    }
}