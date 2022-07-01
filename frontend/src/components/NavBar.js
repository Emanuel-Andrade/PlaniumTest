import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './NavBar.module.css'


const NavBar =()=>{

    return(
        <div className={style.navbar} > 
           <NavLink to='/'> <p> Our<span className='logo-span'>Plan</span></p> </NavLink>
            <ul className={style.link_list} > 
                <li><NavLink className={ ({isActive}) => isActive ? style.active :'' } to='/'> Home </NavLink></li>
                <li><NavLink className={ ({isActive}) => isActive ? style.active :'' } to='/register'> Simular Plano </NavLink></li>
                <li><NavLink className={ ({isActive}) => isActive ? style.active :'' } to='/consult'> Consultar Planos </NavLink></li>
            </ul>
        </div>
    )

}

export default NavBar