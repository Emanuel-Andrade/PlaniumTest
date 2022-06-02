import {useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {registerStatesContext} from '../../contexts/RegisterStates'
import style from './SimulationResult.module.css'

const SimulationResult = () => {
    const navigate = useNavigate() 
    const {plan, } =useContext(registerStatesContext)
    const {users,} =useContext(registerStatesContext)
    const {lifesQntd} =useContext(registerStatesContext)
    const {planValue} =useContext(registerStatesContext)
    
    useEffect(()=>{
      if(!plan) navigate('/register')
    },[plan, navigate])

  return (
    <div className={style.container}> 
        <h1 className={style.title}> Plano Escolhido: <span> {plan} </span> </h1>
        {users && users.map((user,i) =>(
          <div  className={style.card} key={Math.random()}>
            <h3> Beneficiário {i + 1} </h3>
            <p> {user.name} | {user.age} </p>
            <p> Valor Individual: R${user.value} </p>
          </div>
        ))}

        <div>
          <h2 > Beneficiários: <span>{lifesQntd}</span> </h2>
          <h1 className={style.resulte}> Valor Total: <span>R${planValue}</span> </h1>
        </div>

    </div>
  )
}

export default SimulationResult