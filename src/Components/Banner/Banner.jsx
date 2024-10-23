import { Link } from "react-router-dom";

const Banner = () => {
       return (
              <div>
                     <div className="hero bg-base-200 py-10 mb-5 rounded-2xl">
                            <div className="hero-content flex-col lg:flex-row-reverse lg:px-20">
                                   <img
                                          src="/pngwing 1.png"
                                          className="max-w-sm rounded-lg" />
                                   <div>
                                          <h1 className="text-6xl font-bold mb-5">Books to freshen up your bookshelf</h1>
                                          <Link to='/listedBooks'><button className="btn btn-primary">Get Started</button></Link>
                                   </div>
                            </div>
                     </div>
              </div>
       );
};

export default Banner;