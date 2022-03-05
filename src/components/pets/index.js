import React, {useState} from 'react'
import PetsList from './petsList'
import NewPetModal from './newPetModal'
import './styles.css'
import { usePets } from './hooks'

const Pets = () => {
  const [modal, setModal] = useState(false)

  const { data, loading, error, createNewPet, newPet } = usePets();

  const onSubmit = input => {
    setModal(false)
    createNewPet({
      variables: {
        newPet: input
      },
      optimisticResponse: {
        __typename: 'Mutation',
        addPet: {
          __typename: 'Pet',
          id: Math.floor(Math.random() * 10000) + '',
          name: input.name,
          type: input.type,
          img: 'https://via.placeholder.com/300'
        }
      }
    })
  }
  
  if (modal) {
    return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
  }

  if (loading) return <p>Loading...</p>;
  if (error || newPet.error) return <p>Errors</p>

  return (
    <div className="page pets-page">
      <section>
        <div className="row betwee-xs middle-xs">
          <div className="col-xs-10">
            <h1>Pets</h1>
          </div>

          <div className="col-xs-2">
            <button onClick={() => setModal(true)}>new pet</button>
          </div>
        </div>
      </section>
      <section>
        <PetsList pets={data.pets}/>
      </section>
    </div>
  )
}

export default Pets