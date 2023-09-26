import { useParams } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { useEffect, useState } from "react";
import { postByCategory } from "../APIRecquest/APIRecquest";
import Loader from "../Components/Loader";
import BlogList from "../Components/BlogList";

const ByCategoryPage = () => {
    let {categoryID} = useParams();
    // alert(categoryID);
    const [list, setList] = useState(null);

    console.log(list);

    useEffect(() =>{
        (async()=>{
            let res = await postByCategory(categoryID);
            setList(res);
        })()
    },[categoryID]);


    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    );
};

export default ByCategoryPage;