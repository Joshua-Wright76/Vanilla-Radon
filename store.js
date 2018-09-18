import { createStore } from 'redux'; 
import reducers from './reducers'; 
import {addCard, setNewLocation, deleteCard, addMarket} from 'actions.js' ; 

const store = createStore(reducers)

export default store;