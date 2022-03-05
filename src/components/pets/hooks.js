import { gql, useMutation, useQuery } from "@apollo/client"

const PETS_FIELDS = gql`
  fragment PetsFields on Pet {
    id
    name
    type
    img
  }
`;

const GET_PETS = gql`
  ${PETS_FIELDS}
	query AllPets {
    pets {
      ...PetsFields
    }
  }
`;

const CREATE_NEW_PET = gql`
  ${PETS_FIELDS}
  mutation CreateNewPet($newPet: NewPetInput!) {
    addPet(input: $newPet) {
      ...PetsFields
    }
  }
`

export const usePets = () => {
  const { data, error, loading } = useQuery(GET_PETS);
  const [createNewPet, newPet]  = useMutation(CREATE_NEW_PET, {
    update(cache, { data: { addPet }}) {
      const data = cache.readQuery({ query: GET_PETS });
      console.log(13, data, addPet)
      cache.writeQuery({
        query: GET_PETS,
        data: { pets: [
          addPet,
          ...data.pets,
        ]}
      })
    }
  });

  return {
    data,
    error,
    loading,
    createNewPet,
    newPet,
  }
}