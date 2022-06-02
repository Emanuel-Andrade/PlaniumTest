import { useEffect,useState } from 'react'
import axios from 'axios'
import style from './Plans.module.css'

const Plans =  () => {
  const [plans, setPlans] = useState('')
  const [prices, setPrices] = useState('')
  const urlPlans = 'http://localhost:4007/plans'
  const urlPrices = 'http://localhost:4007/prices'

  useEffect(()=>{
    async function plans(){
      const dataPlans = await axios.get(urlPlans)
      const dataPrices = await axios.get(urlPrices)
      setPlans(dataPlans.data)
      setPrices(dataPrices.data)
    }
    plans()
  },[])
  return (
    <div className={style.container}>
        <h1> Planos diversos para você e sua família </h1>
      <ul className={style.card}>
        <li> 
          <h3> { plans && plans[0].nome} </h3> 
          <p> Idade de 0 à 17 anos: <span> R${prices && prices[0].faixa1} </span> </p>
          <p> Idade de 18 à 40 anos: <span>R${prices && prices[0].faixa2}</span> </p>
          <p> Acima de 40 anos: <span> R${prices && prices[0].faixa3} </span> </p>
        </li>
        <li className={style.divergent}> 
          <h3> { plans && plans[0].nome} </h3>
          <p> Idade de 0 à 17 anos: <span> R${prices && prices[1].faixa1} </span> </p>
          <p> Idade de 18 à 40 anos: <span>R${prices && prices[1].faixa2}</span> </p>
          <p> Acima de 40 anos: <span> R${prices && prices[1].faixa3} </span> </p>
          <span className={style.obs} > * A partir de 4 beneficiários </span> 
        </li>
        <li> 
          <h3> { plans && plans[1].nome} </h3> 
          <p> Idade de 0 à 17 anos: <span> R${prices && prices[2].faixa1} </span> </p>
          <p> Idade de 18 à 40 anos: <span>R${prices && prices[2].faixa2}</span> </p>
          <p> Acima de 40 anos: <span> R${prices && prices[2].faixa3} </span> </p>
        </li>
        <li> 
          <h3> { plans && plans[2].nome} </h3> 
          <p> Idade de 0 à 17 anos: <span> R${prices && prices[3].faixa1} </span> </p>
          <p> Idade de 18 à 40 anos: <span>R${prices && prices[3].faixa2}</span> </p>
          <p> Acima de 40 anos: <span> R${prices && prices[3].faixa3} </span> </p>
        </li>
        <li> 
          <h3> { plans && plans[3].nome} </h3> 
          <p> Idade de 0 à 17 anos: <span> R${prices && prices[4].faixa1} </span> </p>
          <p> Idade de 18 à 40 anos: <span>R${prices && prices[4].faixa2}</span> </p>
          <p> Acima de 40 anos: <span> R${prices && prices[4].faixa3} </span> </p>
        </li>
        <li> 
          <h3> { plans && plans[4].nome} </h3> 
          <p> Idade de 0 à 17 anos: <span> R${prices && prices[5].faixa1} </span> </p>
          <p> Idade de 18 à 40 anos: <span>R${prices && prices[5].faixa2}</span> </p>
          <p> Acima de 40 anos: <span> R${prices && prices[5].faixa3} </span> </p>
        </li>
        <li> 
          <h3> { plans && plans[5].nome} </h3> 
          <p> Idade de 0 à 17 anos: <span> R${prices && prices[6].faixa1} </span> </p>
          <p> Idade de 18 à 40 anos: <span>R${prices && prices[6].faixa2}</span> </p>
          <p> Acima de 40 anos: <span> R${prices && prices[6].faixa3} </span> </p>
        </li>
        <li> 
          <h3> { plans && plans[5].nome} </h3> 
          <p> Idade de 0 à 17 anos: <span> R${prices && prices[7].faixa1} </span> </p>
          <p> Idade de 18 à 40 anos: <span>R${prices && prices[7].faixa2}</span> </p>
          <p> Acima de 40 anos: <span> R${prices && prices[7].faixa3} </span> </p>
          <span className={style.obs} > * A partir de 2 beneficiários </span> 
        </li>
        

      </ul>
    </div>
  )
}

export default Plans