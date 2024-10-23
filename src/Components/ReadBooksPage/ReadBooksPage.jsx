import { IoLocationOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { IoDocument } from "react-icons/io5";

const ReadBooksPage = ({read}) => {
       const { image, bookName, author, tags, yearOfPublishing, publisher, totalPages, category, rating, } = read;
       return (
              <div className="mb-5">
                     <div className="flex flex-col md:flex-row lg:flex-row gap-5 border-2 p-5 rounded-xl"> 
                            <div className="flex justify-center">
                                   <img src={image} alt="" className="w-[200px]" />
                            </div>
                            <div className="w-full space-y-[10px]">
                                   <h2 className="text-3xl font-semibold">{bookName}</h2>
                                   <p><span className="font-bold">By :</span> {author} </p>
                                   <div className="flex items-center">
                                          <span className="font-bold">Tag : </span>
                                          <span className="ml-3 px-5 py-2 bg-[#F4FCF3] text-[#23BE0A] font-semibold rounded-full">#{tags[0]}</span>
                                          <span className="px-5 py-2 bg-[#F4FCF3] text-[#23BE0A] font-semibold rounded-full mx-3 hidden lg:display">{tags[1]}</span>
                                          <span className="flex items-center gap-1 hidden lg:display"><IoLocationOutline className="text-xl" />Year Of Publishing : {yearOfPublishing}</span>
                                   </div>
                                   <div className="flex flex-col lg:flex-row gap-5"> 
                                          <p className="flex gap-1"><span className="flex items-center gap-2"> <BsPeople className="text-xl" /> Publisher :</span> { publisher}</p>
                                          <p className="flex gap-1"><span className="flex items-center gap-2"> <IoDocument className="text-xl" />Page :</span>{totalPages}</p>
                                   </div> <hr />
                                   <div>
                                          <p><span>Cetagory : </span>{category}</p>
                                          <p><span>Rating : </span>{rating}</p>
                                          <button>View Details</button>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default ReadBooksPage;