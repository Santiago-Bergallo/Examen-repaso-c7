import React, { useEffect, useState } from 'react'
import { useGlobaStates } from '../Context/Context'

const Home = () => {
    const { data, state, loading, setLoading, dispatchFavs } = useGlobaStates()
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [state])

    const addFav = (imagen) => {
        dispatchFavs({type: 'ADD_FAV', payload: imagen})
    }

  return (
    <div className='card-section'>
        {console.log(data)}

        { loading ? 'Cargando...' :
            state.api === 'dog' ? 
                data?.message.map(imagen => <div key={imagen} className='card'>
                <img src={imagen} alt='' width={200}/>
                <button onClick={() => addFav(imagen)}>⭐</button>
                </div>) 
            :
                data.map(imagen => <div key={imagen} className='card'>
                    <img src={imagen.url} alt='' width={200}/>
                </div>)
        }
    </div>
  )
}

export default Home