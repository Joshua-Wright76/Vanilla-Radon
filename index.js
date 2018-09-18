


//template for market card
const template = document.querySelector("#marketcard-temp")
const locationTemplate = document.importNode(template.content, true);

//Button to add new location, creates new card and updates. On click the event is dispatched to a reducer. 
const createNewLocation = () => document.getElementById("market-list").appendChild(locationTemplate);

const addMarketCard = () => console.log('Here from addMarket')

const deleteMarketCard = () => console.log("Hi From Delete Market card")



