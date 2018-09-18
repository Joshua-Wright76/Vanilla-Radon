// import { connect } from 'react-redux'



const template = document.querySelector("#marketcard-temp")

const marketCardTemplate = document.importNode(template.content, true);
//going to append this template onto the a <li>,  child of markets-display. 
console.log(marketCardTemplate)


//Button to add new location, creates new card and updates. On click the event is dispatched to a reducer. 
const createNewLocation = (template) => { 

let addThis = document.getElementById("markets-display").appendChild(marketCardTemplate)
return addThis;  
}


//Render function
const render = (template, node) => {
  if (!node) throw new Error('need template plix pl0x'); 
  let view = node.innerHTML = template; 
  return view; 
}; 

 


// export default { render }