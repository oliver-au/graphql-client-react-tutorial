import React from 'react'

import NewPet from './newPet'

const NewPetModal = ({onSubmit, onCancel}) => {
  return (
    <div className="row center-xs">
      <div className="col-xs-8">
        <NewPet onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </div>
  )
}

export default NewPetModal
