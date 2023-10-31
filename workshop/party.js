//variables used
let parties = []

async function getParties (){
  let response = await fetch ('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2309-FTB-WEB-FT/events')
  let data = response.json
  return data
}