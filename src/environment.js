import {
  Environment,
  RecordSource,
  Store
} from 'relay-runtime'
import { Network } from 'relay-local-schema'
import schema from './wrapperSchema'

const store = new Store(new RecordSource())

const network = Network.create({ schema })

const environment = new Environment({
  network,
  store
})

export default environment
