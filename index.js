import { ApolloServer, gql } from 'apollo-server'

const persons = [
    {
        name: "Paul Ventura",
        phone: "928884112",
        street: "España",
        city: "Arequipa",
        id: "1"
    },
    {
        name: "Fernando Almonte",
        phone: "955888712",
        street: "Amazonas",
        city: "Arequipa",
        id: "1"
    }
]

const typeDefinitions = gql`
    type Person {
        name: String!
        phone: String
        street: String!
        city: String!
        id: ID!
    }
    type Query {
        personCount: Int!
        allPersons: [Person]!
    }
`

const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: () => persons // Se puede tomar de una API, db, etc.
    }
}

const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Server is running at ${url}`)
})