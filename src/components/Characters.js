import React from 'react'
import Card from './Card';

const Characters = ({characters = [] }) => {
    return (
    <div className="row">
        {characters.map((character,index) => (
            <div key={character.id} className='col'>
                <Card character={character}/>
            </div>
        ))}
    </div>
  )
}

export default Characters