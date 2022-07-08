import { useState } from "react"
import { DetailCharacter } from './DetailCharacter'

const Card = ({character}) => { 

    const [showDetail,setShowDetail] = useState(false);

    const handleToggleClick = () => {
        setShowDetail(!showDetail);
    }

    return (
        <div className="card mb-3 shadow mx-auto">
            <img src={character.image} className="card-img-top" alt={character.name} />
            <div className="card-body">
                <h5 className="card-title">{character.name}</h5>
                {showDetail ?<DetailCharacter character={character}/>: <></>}
                <button className="btn btn-dark bg-gradient" onClick={handleToggleClick}>Details</button>
            </div>
        </div>
    )
}

export default Card