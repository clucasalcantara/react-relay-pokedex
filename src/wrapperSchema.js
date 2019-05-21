import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat
} from 'graphql'

import axios from 'axios'

const __BASE_URL__ = 'https://pokeapi.co/api/v2'

function getPokemonByName(name) {
  return axios.get(`${__BASE_URL__}/pokemon/${name}`).then(res => {
    console.log(res)
    return res.data
  })
}

const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  description: 'A pokemon',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: pokemon => pokemon.name
    },
    height: {
      type: GraphQLFloat,
      resolve: pokemon => pokemon.height / 10
    },
    weight: {
      type: GraphQLFloat,
      resolve: pokemon => pokemon.weight / 10
    },
    types: {
      type: new GraphQLList(GraphQLString),
      resolve: pokemon => pokemon.types.map(t => t.type.name)
    },
    image: {
      type: GraphQLString,
      resolve: pokemon => {
        const url = `https://img.pokemondb.net/artwork/${pokemon.name.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').replace(' ', '-')}.jpg`
        return url
      }
    },
    order: {
      type: GraphQLInt,
      resolve: pokemon => pokemon.order
    },
    description: {
      type: GraphQLString,
      resolve: pokemon => axios.get(pokemon.species.url).then(res => {
        return res.data.flavor_text_entries.filter(f => f.language.name === 'en')[0].flavor_text
      })
    },
    genus: {
      type: GraphQLString,
      resolve: pokemon => axios.get(pokemon.species.url).then(res => res.data.genera[2].genus)
    }
  })
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all evil',
  fields: () => ({
    pokemon: {
      type: PokemonType,
      args: {
        name: { type: GraphQLString }
      },
      resolve: (root, args) => getPokemonByName(args.name)
    }
  })
})

export default new GraphQLSchema({
  query: QueryType
})
