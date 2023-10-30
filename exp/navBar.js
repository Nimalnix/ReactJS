import React from 'react'
import {Component} from "react"

class  NavBar extends Component {
    state ={clicked:false}
    render(){
    return (
        <nav>
            <div >
                <ul className='navBar'>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT US</a></li>
                    <li><a href="/contact">OUR WORK</a></li>
                    <li><a href="/about">CONTACT US</a></li>
                </ul>
            </div>
            <div id="mobile">
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
        </nav>
    )
}
}


export default NavBar;