import {addCard, setNewLocation, deleteCard, addMarket} from 'actions.js' ; 
import { ADD_CARD } from './actiontypes';
import render from 'index.js'





const initialState = { 
  marketList = [], 
  location: " ",   
  totalCards: 0, 
  totalMarkets: 0, 
  marketId: '', 
  percentOfTotal: 0, 
}


export const marketReducer = (state  = initialState, action) => {
  const market; 

  switch (action.type) { 
    case types.ADD_CARD:
      return market = {
        MarketID: ' ',
        Location: ' ',
        percentOfTotals: 0,
      }
    }
  }




