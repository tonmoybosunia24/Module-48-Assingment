import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveStoredBooks } from "../../Utility/LocalStorage";
import { SaveWishlistBooks } from "../../Utility/LocalStorageWishlist";

const BookDetails = () => {
       const Books = useLoaderData();
       const { id } = useParams();
       const idInt = parseInt(id)
       const Book = Books.find(Book => Book.bookId === idInt)
       const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = Book
       const [ReadbuttonCheck, setReadbuttonCheck] = useState(false)
       const [WishbuttonCheck, setWishbuttonCheck] = useState(false)
       const handleReadBtn = ()=>{
              SaveStoredBooks(idInt);
              setReadbuttonCheck(true)
              ReadbuttonCheck ? toast('Read Has Been Already Added') : toast("Read Has Been Added")
       }
       const handleWishlistBtn = ()=>{      
              setWishbuttonCheck(true)
              if(ReadbuttonCheck){
                     toast('Read')
              }
              else{
                     WishbuttonCheck ? toast('Wish Has Been Already Added') : toast("Wish Has Been Added")
                     SaveWishlistBooks(idInt)
              }
       }
       return (
              <div className="flex flex-col lg:flex-row gap-10 mb-10  pt-5 md:px-10 lg:px-28">
                     <div className="lg:w-1/2">
                            <img className="w-full" src={image} alt="" />
                     </div>
                     <div className="lg:w-1/2 space-y-2">
                            <h2 className="text-4xl font-bold">{bookName}</h2>
                            <p className="text-xl">By: {author}</p>
                            <p className="border-y-2 border-dotted py-2">{category}</p>
                            <p><span>Review:</span> {review} </p>
                            <div className="flex">
                                   <span> <span className="font-bold">Tag:</span> <span> {tags[0]},</span> <span>{tags[1]}</span> </span>
                            </div>
                            <hr />
                            <p><span>Number Of Pages:</span><span className="font-bold">{totalPages}</span></p>
                            <p><span>Publisher:</span><span className="font-bold">{publisher}</span></p>
                            <p><span>Year of Publishing:</span><span className="font-bold">{yearOfPublishing}</span></p>
                            <p><span>Rating:</span><span className="font-bold">{rating}</span></p>
                            <div className="flex gap-5">
                                   <button onClick={handleReadBtn} className="btn">Read</button>
                                   <button onClick={handleWishlistBtn} className="btn">Wishlist</button>
                                   <ToastContainer />
                            </div>
                     </div>
              </div>
       );
};

export default BookDetails;