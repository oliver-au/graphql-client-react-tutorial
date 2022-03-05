import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

const delay = setContext(
  request => new Promise((res) => {
    setTimeout(res, 800)
  })
)

const petsLink = new HttpLink({uri: 'http://localhost:4000/'});


const link = ApolloLink.from([
	delay,
	petsLink,
])

// const link = new HttpLink({uri: 'http://localhost:4000/'});
const cache = new InMemoryCache();

const client = new ApolloClient({
	link,
	cache
})

export default client;