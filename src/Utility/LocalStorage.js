const getStoredBooks = () =>{
       const storedBooks = localStorage.getItem('Books-Read-Details')
       if(storedBooks){
              return JSON.parse(storedBooks)
       }
       return[]
}
const SaveStoredBooks = id =>{
       const storedBooks = getStoredBooks();
       const exist = storedBooks.find(booksid => booksid === id)
       if(!exist){
              storedBooks.push(id)
              localStorage.setItem('Books-Read-Details', JSON.stringify(storedBooks))
       }
}
export {getStoredBooks, SaveStoredBooks}