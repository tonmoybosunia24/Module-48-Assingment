const getWishlistBooks = () =>{
       const storedWishlistBooks = localStorage.getItem('Books-Wishlist-Details');
       if(storedWishlistBooks){
              return JSON.parse(storedWishlistBooks)
       }
       return[]
}
const SaveWishlistBooks = id =>{
       const storedWishlistBooks = getWishlistBooks();
       const exist = storedWishlistBooks.find(Wishid => Wishid === id)
       if(!exist){
              storedWishlistBooks.push(id)
              localStorage.setItem('Books-Wishlist-Details', JSON.stringify(storedWishlistBooks))
       }
}
export {getWishlistBooks, SaveWishlistBooks}