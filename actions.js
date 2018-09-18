import * as types from './actionTypes'; 

export const addCard = (marketId) => ({
    type: types.ADD_CARD,
    payload: marketId,
});

export const setNewLocation = (newLocation) => ({
  type: types.SET_NEW_LOCATION, 
  payload: newLocation,
}); 
  
export const deleteCard = (location) => ({
  type: types.DELETE_CARD,
  payload: " ",
}); 

export const addMarket = (newMarket) => ({
  type: types.ADD_MARKET,
  payload: newMarket 
}); 