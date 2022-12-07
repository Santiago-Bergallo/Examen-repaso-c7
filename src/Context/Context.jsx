import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";
const GlobalStates = createContext()

const initialState = {
    url: 'https://dog.ceo/api/breed/hound/images/random/10',
    api: 'dog'
}
const initialFavState = []

const favsReducer = (state, action) => {
    switch(action.type){
        case 'ADD_FAV':
            return [...state, action.payload]
    }
}

const Context = ({children}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [state, dispatch] = useReducer(reducer, initialState)
    const [stateFavs, dispatchFavs] = useReducer(favsReducer, initialFavState, initFav)

    function initFav(initialFavState) {
        return localStorage.getItem("favs")
          ? JSON.parse(localStorage.getItem("favs"))
          : initialFavState;
      }
    
    useEffect(() => {
        axios(state.url)
        .then(res => setData(res.data))
    },[state])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(stateFavs))
    }, [stateFavs])
    return (
        <GlobalStates.Provider
            value={{
                data, 
                state, 
                dispatch, 
                loading, 
                setLoading,
                stateFavs,
                dispatchFavs
            }}
        >
            {children}
        </GlobalStates.Provider>
    )
}

export default Context

export const useGlobaStates = () =>{
    return useContext(GlobalStates)
}