import React from 'react'
import PetBox from './petBox'

const PetsList = ({pets}) => {
  return (
    <ul className="pets-list">
      {pets.map(pet => (
        <PetBox pet={pet} key={pet.id}/>
      ))}
    </ul>
  )
}

PetsList.defaultProps = {
  pets: []
}

export default PetsList