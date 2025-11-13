import { loadQuotes , deleteQuote,addQuote, editQuote} from "./quotemanagement";

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
    pAuthor.textContent = quote.author
    divEle.appendChild(pQuote)
    divEle.appendChild(pAuthor)

    const divActionsEle = document.createElement('div')
    divActionsEle.className = 'actions'
    const editButtonEld = document.createElement('button')
    editButtonEld.dataset.id = quote.id
    editButtonEld.textContent = 'Edit'
    editButtonEld.addEventListener
    divActionsEle.appendChild(editButtonEld)
    editButtonEld.addEventListener("click",handleedit)

    const deleteButtonEld = document.createElement('button')
    deleteButtonEld.dataset.id = quote.id
    deleteButtonEld.textContent = 'Delete'
    divActionsEle.appendChild(deleteButtonEld)
    deleteButtonEld.addEventListener("click",handleDelete)
    divEle.appendChild(divActionsEle)
    return divEle
}
async function handleDelete(e) {
  //e=event object
  console.log(e.target.dataset.id)
  const removeId = e.target.dataset.id
  const ans = confirm(`Do you want to delete quote: ${removeId} `)
  if (ans) {
    try {
      //1. delete quote in the backend
      const deletedId = await deleteQuote(removeId)
      console.log(deletedId)
      //2. find remove quote div element
      const removeQuoteDivEle = document.querySelector(
        `div[data-id="${deletedId}"]`
      )
      console.log(removeQuoteDivEle)
      const quoteListEle = document.querySelector("#quoteList")
      console.log(quoteListEle)
      //3. delete quote div element
      quoteListEle.removeChild(removeQuoteDivEle)
    } catch (e) {
      alert(`App: ${e.message}`)
    }
  }
}


async function handleedit(e) {
  const editId = e.target.dataset.id
  // console.log(editId)
  const editQuoteDivEle = document.querySelector(`div[data-id="${editId}"]`)
  const formEle = document.getElementById("quoteForm")
  formEle.quoteId.value = editId //store edit id for handle edit case
  formEle.content.value = editQuoteDivEle.children[0].textContent
  formEle.author.value = editQuoteDivEle.children[1].textContent
}

const formEle = document.getElementById("quoteForm")
formEle.addEventListener("submit", handleAddEdit)
async function handleAddEdit(event) {
  event.preventDefault()
  const quoteId = formEle.quoteId.value
  const newContent = formEle.content.value
  const newAuthor = formEle.author.value
  if(quoteId){try {
     const updateQuote = await editQuote({id:quoteId,content:newContent,author:newAuthor})
     const updateQuoteDivEle = document.querySelector(
        `div[data-id="${updateQuote.id}"]`
      )
      updateQuoteDivEle.children[0].textContent = updateQuote.content
      updateQuoteDivEle.children[1].textContent = updateQuote.author
  } catch (e) {
    alert(`App [edit]: ${e.message}`)
  }
  
} else {
    try {
    //1. add new Item in the backend
    const newQuote = await addQuote({ content: newContent, author: newAuthor }) //{content:content, author:author}
    //2. add new quote card
    const newQuoteDivEle = newQuoteCard(newQuote)
    const quoteListEle = document.getElementById("quoteList")
    quoteListEle.appendChild(newQuoteDivEle)
  } catch (e) {
    alert(`App [add]: ${e.message}`)
  }
  formEle.quoteId.value = ""
  formEle.content.value = ""
  formEle.author.value = ""
}


  }
 