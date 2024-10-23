import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/LocalStorage";
import ReadBooksPage from "../ReadBooksPage/ReadBooksPage";
import { getWishlistBooks } from "../../Utility/LocalStorageWishlist";
import WishBookPage from "../WishBookPage/WishBookPage";

const ListedBooks = () => {
       const Books = useLoaderData();
       const [ReadBooks, setReadBooks] = useState([]);
       const [WishBooks, setWishBooks] = useState([]);
       useEffect(() => {
              const storedReadBook = getStoredBooks();
              if (Books.length > 0) {
                     const ReadBook = [];
                     for (const id of storedReadBook) {
                            const Book = Books.find(book => book.bookId === id);
                            if (Book) {
                                   ReadBook.push(Book)
                            }
                     }
                     setReadBooks(ReadBook)
              }
       }, [Books])
       useEffect(() => {
              const storedWishBook = getWishlistBooks();
              if (Books.length > 0) {
                     const WishBook = [];
                     for (const id of storedWishBook) {
                            const Book = Books.find(book => book.bookId === id);
                            if (Book) {
                                   WishBook.push(Book)
                            }
                     }
                     setWishBooks(WishBook)
              }
       }, [Books])
       console.log(ReadBooks)
       return (
              <div role="tablist" className="tabs tabs-lifted w-full">
                     <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                     <div role="tabpanel" className="tab-content rounded-box py-5">
                            {
                                   ReadBooks.map(read => <ReadBooksPage key={read.id} read={read}></ReadBooksPage>)
                            }
                     </div>

                     <input
                            type="radio"
                            name="my_tabs_2"
                            role="tab"
                            className="tab"
                            aria-label="Tab 2"
                            defaultChecked />
                     <div role="tabpanel" className="tab-content border-t-2 rounded-box py-5">
                            {
                                   WishBooks.map(wish => <WishBookPage key={wish.id} wish={wish}></WishBookPage>)
                            }
                     </div>
              </div>
       );
};

export default ListedBooks;