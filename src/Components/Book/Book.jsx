import { Link } from "react-router-dom";
import Tags from "../Tags/Tags";
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
       const { bookId, image, tags, bookName, author, category, rating } = book
       return (
              <Link to={`book/${bookId}`}>
                     <div className="card bg-base-100 shadow-xl border-2">
                            <figure className="px-5 pt-5">
                                   <img
                                          src={image}
                                          alt="Shoes"
                                          className="rounded-xl w-full h-60" />
                            </figure>
                            <div className="card-body px-5 pt-5">
                                   <div className="flex gap-2">
                                          {
                                                 tags.map(tag => <Tags tag={tag}></Tags>)
                                          }
                                   </div>
                                   <h2 className="font-bold">{bookName}</h2>
                                   <p>By: {author}</p> <hr className="border-[1px] border-dotted" />
                                   <div className="flex items-center">
                                          <p>{category}</p>
                                          <p className="text-end">{rating} </p><CiStar />
                                   </div>
                            </div>
                     </div>
              </Link>
       );
};

export default Book;