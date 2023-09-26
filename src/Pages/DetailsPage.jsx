import { useParams } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { useEffect, useState } from "react";
import { postDetails } from "../APIRecquest/APIRecquest";
import Loader from "../Components/Loader";
import BlogDetails from "../Components/BlogDetails";

const DetailsPage = () => {
    let {postID} = useParams();
    // alert(categoryID);
    const [list, setList] = useState(null);

    console.log(list);

    useEffect(() =>{
        (async()=>{
            let res = await postDetails(postID);
            setList(res);
        })()
    },[postID]);


    return (
        <Layout>
            {list===null?<Loader/>:<BlogDetails list={list}/>}
        </Layout>
    );
};

export default DetailsPage;