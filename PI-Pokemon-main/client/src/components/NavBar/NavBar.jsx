import React from 'react';
import {Link} from 'react-router-dom';
import style from "./NavBar.module.css";
import SearchBar from '../SearchBar/SearchBar';

const NavBar = () => {
    return (
        
    <div className={style.navContainer}> 
            <div className={style.navImgCont}>
                <img src="" alt="" />
            </div>
        <div className={style.linkContainer}>
            <Link className={style.linkHome} to="/home">HOME</Link>
            <Link className={style.linkCrear} to="/create">CREATE</Link>
        </div>
        <SearchBar />
    </div>
    )
}

export default NavBar