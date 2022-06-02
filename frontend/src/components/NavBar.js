import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'


const NavBar =()=>{

    return(
        <div className={style.navbar} > 
           <NavLink to='/'> <img  className={style.image} src="https://demo.test.planium.io/custom/demo/web/common/images/logo_header.png" alt="logo" /> </NavLink>
            <ul className={style.link_list} > 
                <li><NavLink className={ ({isActive}) => isActive ? style.active :'' } to='/'> Home </NavLink></li>
                <li><NavLink className={ ({isActive}) => isActive ? style.active :'' } to='/register'> Simular Plano </NavLink></li>
                <li><NavLink className={ ({isActive}) => isActive ? style.active :'' } to='/consult'> Consultar Planos </NavLink></li>
            </ul>
        </div>
    )

}

export default NavBar