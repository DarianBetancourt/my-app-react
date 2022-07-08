import React from 'react'

export const DetailCharacter = ({character}) => {
  return (
        <ul className="list-group list-group-flush mb-1">
            <li className="list-group-item"><span className='fw-bold'>id</span> : {character.id} </li>
            {/* <li className="list-group-item"><span className='fw-bold'>name</span> : {character.name} </li> */}
            <li className="list-group-item"><span className='fw-bold'>gender</span> : {character.gender}</li>
            <li className="list-group-item"><span className='fw-bold'>species</span> : {character.species}</li>
            {/* <li className="list-group-item"><span className='fw-bold'>created</span> : {character.created} </li> */}
        </ul>
  )
}
