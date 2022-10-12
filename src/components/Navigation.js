import React from "react";
import { Link } from "react-router-dom";
import { BiHomeCircle } from 'react-icons/bi';
import { GrAddCircle } from 'react-icons/gr';



function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li><Link to='/'><BiHomeCircle/></Link></li>
                <li><Link to='/notes/add'><GrAddCircle /></Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;