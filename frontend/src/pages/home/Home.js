import { Link } from 'react-router-dom'
import style from './Home.module.css'
const Home = () => {
  return (
    <div className={style.container}>
      <h1> Seu plano de saúde totalmente conectado com você. </h1>
      <p className={style.p1}> Modernizamos o relacionamento das operadoras com seus clientes. Ofertas personalizadas em um processo intuitivo e completamente digital. </p>
      <div className={style.buttons}>
           <div className={style.btn1}> <Link  to='/register' className='btn btn-home'> Faça agora uma simulação </Link> </div> 
           <p className={style.p2} > Cobertura onde você precisa. <span> Planos Locais, Estaduais e Nacionais que que cobrem todo território nacional.</span> </p>
           <div className={style.btn2}> <Link to='/consult' className='btn btn-home'> Conheça nossos planos de perto </Link>  </div>
      </div>
    </div>
  )
}

export default Home