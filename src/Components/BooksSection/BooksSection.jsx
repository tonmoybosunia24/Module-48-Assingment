import { useEffect, useState } from "react";
import Book from "../Book/Book";

const BooksSection = () => {
       const [Books, setBooks] = useState([])
       useEffect(()=>{
              fetch('Books.json')
              .then(res => res.json())
              .then(data => setBooks(data))
       },[])
       return (
              <div>
                     <h2 className="text-3xl font-semibold text-center mb-5">Books {Books.length}</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                            {
                                   Books.map(book => <Book key={book.bookId} book={book}></Book>)
                            }
                     </div>
              </div>
       );
};

export default BooksSection;