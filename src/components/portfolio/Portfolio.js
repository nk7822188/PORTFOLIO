import { Component } from "react";
import "./portfolio.css"
import imageee1 from "./backtract.JPG";
import imageee2 from "./clock.JPG";
import imageee3 from "./todojs.JPG";
import imageee4 from "./todonor.JPG";
export class Portfolio extends Component{
    render(){
        return(
            <div className="portfolio1">
               <div><h1>Portfolio</h1></div> 
               <div className="portfolio">
                   <a href="https://nk7822188.github.io/neeraj/"><img src={imageee1} className="img1" alt="img"></img></a>
                   <a href="https://nk7822188.github.io/todolistr/"><img src={imageee4} className="img2" alt="img"></img></a>
                   <a href="https://nk7822188.github.io/Digiital-Clock/"><img src={imageee2} className="img3" alt="img"></img></a>
                   <a href="https://nk7822188.github.io/Todoapp/"><img src={imageee3} className="img" alt="img4"></img></a>
               </div>
            </div>
            
        )
    }
}