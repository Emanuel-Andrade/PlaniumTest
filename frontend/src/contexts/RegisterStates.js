import { createContext, useState } from "react";

export const registerStatesContext = createContext()

export const UseRegisterStatesProvider = ( {children} ) =>{

    const [ name,setName ] =useState('')
    const [ age,setAge ] =useState('')
    const [ users,setUsers ] =useState([])
    const [ plan,setPlan ] =useState('')
    const [ planValue, setPlanValue ] =useState(0)
    const [ lifesQntd,setLifesQntd ] =useState('')


        return(

            <registerStatesContext.Provider value={ {
                    name, 
                    age, 
                    users,
                    plan, 
                    planValue,
                    lifesQntd, 
                    setName, 
                    setAge, 
                    setLifesQntd, 
                    setPlan, 
                    setPlanValue, setUsers } } >
                {children}
            </registerStatesContext.Provider>

        )


}

