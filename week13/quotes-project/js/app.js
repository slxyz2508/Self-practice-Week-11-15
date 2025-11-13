import { loadQuotes } from "./quotemanagement";

document.addEventListener('DOMContentLoaded', async () =>{
   const quoteList = document.getElementById("quoteList")
   const quotes = await loadQuotes()
   console.log(quotes);
   quotes.forEach((quote) => {
    const quoteCardEle = newQuoteCard(quote)
    quoteList.appendChild(quoteCardEle)
   })
})
function newQuoteCard(quote) {
    const divEle = document.createElement('div')
    divEle.className = "quote-card"
    divEle.dataset.id = quote.id
    const pQuote =document.createElement('p')
    pQuote.textContent = quote.content
    const pAuthor = document.createElement('p')
    pAuthor.className = 'author'
    pAuthor.textContent = quote.pAuthor
    divEle.appendChild(pQuote)
    divEle.appendChild(pAuthor)

    const divActionsEle = document.createElement('div')
    divActionsEle.className = 'actions'
    const editButtonEld = document.createElement('button')
    editButtonEld.dataset.id = quote.id
    editButtonEld.textContent = 'Edit'
    divActionsEle.appendChild(editButtonEld)
    const deleteButtonEld = document.createElement('button')
    deleteButtonEld.dataset.id = quote.id
    deleteButtonEld.textContent = 'Delete'
    divActionsEle.appendChild(deleteButtonEld)
    divEle.appendChild(divActionsEle)
    return divEle
}
