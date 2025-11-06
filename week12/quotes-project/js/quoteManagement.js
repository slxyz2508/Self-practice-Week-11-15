//CRUD ON quotes
import {getItems} from './myLib/fetchUils'
async function loadQuotes(){
  try {
    const quotes = await getItems(`${import.meta.env.VITE_APP_URL}/quotes`)
    console.log(quotes);
    return quotes
  } catch (error) {
    throw new Error(error)
  } 
}
export {loadQuotes}