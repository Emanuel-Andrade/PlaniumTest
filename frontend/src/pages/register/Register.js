import { useState, useContext}  from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import style from './Register.module.css' 
import {registerStatesContext} from '../../contexts/RegisterStates'

const Register = () => {
  const navigate = useNavigate() 
  const {name, setName} =useContext(registerStatesContext)
  const {age, setAge} =useContext(registerStatesContext)
  const {plan, setPlan} =useContext(registerStatesContext)
  const { setUsers} =useContext(registerStatesContext)
  const {lifesQntd, setLifesQntd} =useContext(registerStatesContext)
  const { setPlanValue} =useContext(registerStatesContext)
  const [ beneficiaries,setbeneficiaries ] =useState([])
  const [ error,setError ] =useState(false)
  const [ registersleft,setRegistersLeft ] =useState(0)
  const [stage, setStage ] = useState(1)
  const [code, setCode ] = useState(1)
  const url = 'http://localhost:4007/plan/'
  let id;

  
  
  const handleChange =async (e)=>{
    e.preventDefault()
    const select = document.getElementById("plans");
    id =select.value
    

    if(isNaN(lifesQntd)) return setError('Quantidade de beneficiários necessita ser um número')
    if(lifesQntd === '0' ) return setError('É necessário ter no mínimo um beneficiário')
    setError(false)
    
    setCode(id)
    const res = await axios.get(url+id);
    setPlan(res.data[0].nome)
    setStage(2)
  }
  
  const handleAdd = (e)=>{
    e.preventDefault()
    
    // Validation
    if(!name || name === ' ') return setError('Campo "Nome" não preenchido')
    if(!age || age === ' ') return setError('Campo "Idade" não preenchido')
    if(isNaN(age)) return setError('Campo "idade" necessita ser um número')
    setError('')
    
    setRegistersLeft( registersleft +1)
    const newRecipient = { name, age, code, lifesQntd }
    setbeneficiaries([...beneficiaries, newRecipient])
    setAge('')
    setName('')
  }  
  
  
  
  const handleFinish = async (e)=>{
    e.preventDefault()
    const usersArray = []
    let sum =0 

     beneficiaries.map( async recipient => {
       const lifes = Number(recipient.lifesQntd)
       const codePlan = Number(recipient.code)
    axios({
    method: 'post',
    url,
    data: { 
          code : codePlan,
          lifesQntd: lifes,
          age: recipient.age,
          name : recipient.name
        }
      }).then( eachUser => {
        const data = eachUser.data
        usersArray.push(data)
        setUsers([...usersArray])
        sum +=eachUser.data.value
        setPlanValue(sum)
        
      }).catch(e => {return e})
      return usersArray
      
    })
    setStage(1)
    navigate('/response')
}
  return (
    <div>
      <h1>Faça seu orçamento</h1>
      {
        stage === 1 &&       
        <>
          <p> Escolha o melhor plano para sua família </p>
        <form onSubmit={ handleChange  } className={style.stage1}>
        {error && <p className='error'> {error} </p> }
        <label >
          <span> Escolha o plano: </span>
          <select  id='plans' >
            <option value="1"> Bitix Customer Plano 1 </option>
            <option value="2"> Bitix Customer Plano 2 </option>
            <option value="3"> Bitix Customer Plano 3 </option>
            <option value="4"> Bitix Customer Plano 4 </option>
            <option value="5"> Bitix Customer Plano 5 </option>
            <option value="6"> Bitix Customer Plano 6 </option>
          </select>
        </label>
        <label >
          <span> Quantidade de Beneficiários: </span>
          <input type="text" 
                name="name" 
                required 
                placeholder='Exemplo: 3' 
                value={lifesQntd}
                onChange={e=> setLifesQntd(e.target.value) 
                }/>

        </label>
        
         <button className='btn btn-dark'> Avançar </button> 
      </form>
        </>
      }
      {
        stage === 2 && registersleft < lifesQntd && <form className={style.stage2}  >
        {error && <p className='error'> {error} </p> } 
        <p> Plano escolhido:  <b> {plan} </b> </p>      
        <p > Beneficiários:  <b> {lifesQntd} </b> </p>      
        <p className={style.above_card} > Membros já Cadastros:  <b> {registersleft} </b> </p>      
        <label >
          <span> Nome: </span>
          <input type="text" 
                name="name" 
                placeholder='Exemplo: João Silva' 
                required 
                value={name}
                onChange={e=> setName(e.target.value) }/>
        </label>
        <label >
          <span> Idade: </span>
          <input type="text" 
                name="age"
                autoComplete='on' 
                placeholder='Exemplo: 25'
                required 
                value={age}
                onChange={e=> setAge(e.target.value) }/>
        </label>
         <button  onClick={handleAdd} className='btn btn-dark'> Adicionar </button>
      </form>
      }
      {
        stage === 2&& registersleft >= lifesQntd && 
        <button onClick={handleFinish} className='btn btn-outline' > Calcular Plano </button>
      }
    </div>
  )
}

export default Register