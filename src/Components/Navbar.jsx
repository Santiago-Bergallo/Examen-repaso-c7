import React from 'react'
import { useGlobaStates } from '../Context/Context'

const Navbar = () => {
    const {state,dispatch, setLoading} = useGlobaStates()
  return (
    <div>
        { state.api === 'dog' ? 
        <button onClick={() => {
            setLoading(true)
            dispatch({type: 'SWITCH_CAT', payload: 'https://api.thecatapi.com/v1/images/search?limit=10'})
        }}>Switch to cat</button>
        :
        <button onClick={() => {
            setLoading(true)
            dispatch({type: 'SWITCH_DOG', payload: 'https://dog.ceo/api/breed/hound/images/random/10'})
        }}>Switch to dog</button>
    }
    </div>
  )
}

export default Navbar