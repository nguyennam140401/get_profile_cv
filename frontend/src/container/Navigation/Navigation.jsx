import React from 'react'
import { Style } from './NavigationStyle'
import { AiFillHome, AiFillProject } from 'react-icons/ai'
import { BsFillPersonFill, BsBookFill } from 'react-icons/bs'
import { RiContactsFill } from 'react-icons/ri'
import { MdSchool } from 'react-icons/md'
const Navigation = () => {
    return (
        <Style>
            <div className="nav">
                <div className="nav_list">
                    <ul>
                        <li>
                            <a className="active" href="#home">
                                <AiFillHome />
                                <p>Home</p>
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                <BsFillPersonFill></BsFillPersonFill>
                                <p>About</p>
                            </a>
                        </li>
                        <li>
                            <a href="#education">
                                <MdSchool></MdSchool>
                                <p>Education</p>
                            </a>
                        </li>
                        <li>
                            <a href="#skill">
                                <BsBookFill></BsBookFill>
                                <p>Skills</p>
                            </a>
                        </li>
                        <li>
                            <a href="#project">
                                <AiFillProject></AiFillProject>
                                <p>Projects</p>
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                <RiContactsFill></RiContactsFill>
                                <p>Contact</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Style>
    )
}

export default Navigation
