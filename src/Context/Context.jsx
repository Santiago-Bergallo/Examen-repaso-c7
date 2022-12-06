import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
const GlobalStates = createContext()

const initialState = {
    url: 'https://dog.ceo/api/breed/hound/images/random/10',
    api: 'dog'
}

const Context = ({children}) => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios(state.url)
        .then(res => setData(res.data))
    },[state])

    return (
        <GlobalStates.Provider
            value={{data, state, dispatch, loading, setLoading}}
        >
            {children}
        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobaStates = () =>{
    return useContext(GlobalStates)
}