//variables used
const COHORT = '2309-FTB-ET-WEB-FT'
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`

const state = {
  parties: [],
}
console.log(state)

const partyList = document.querySelector('#parties')

const addPartyForm = document.querySelector('#addParty')
addPartyForm.addEventListener('submit', addParty)


async function getParties (){
    try {
      let response = await fetch(API_URL)
      let json = await response.json()
  
      console.log('json.data:', json.data)

      state.artists = json.data
    } catch (err) {
      console.error(error)
    }
  }

  function renderParties() {
    if (!state.events.length) {
      partyList.innerHTML = '<li>No Parties.</li>'
      return
    }
  
    const partyCards = state.artists.map((party) => {
      const li = document.createElement('li')
      li.innerHTML = `
        <h2>${events.name}</h2>
        <img src="${events.imageUrl}" alt="${events.name}" />
        <p>${events.description}</p>
        `
     /* Add a delete button to each list item (used the guided practice as a reference)*/

     const deleteBtn = document.createElement('button')
     deleteBtn.innerText = 'DELETE'
     deleteBtn.addEventListener('click', () => {
       deleteArtist(events.id)
     })
 
     li.appendChild(deleteBtn)
 
     return li
   })
  }