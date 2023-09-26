import { Link } from "react-router-dom";

const BlogList = () => {
    return (
        <div>
            <div className="container mx-auto my-16 p-9">
                <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Link key={""} to={""} className="card w-100 glass">
                        <figure><img src={""} alt="car!"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{""}</h2>
                            <p>{""}</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogList;