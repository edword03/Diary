import {createStore} from 'redux'
import reduce from './reducer/reducer'

const store = createStore(reduce)

export default store;