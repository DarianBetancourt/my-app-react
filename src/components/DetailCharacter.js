import React from 'react'

export const DetailCharacter = ({character}) => {
  return (
        <ul>
            <li>id : {character.id} </li>
            <li>name : {character.name} </li>
            <li>gender : {character.gender}</li>
            <li>species : {character.species}</li>
            <li>created : {character.created} </li>
        </ul>
  )
}
