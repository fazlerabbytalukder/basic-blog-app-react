import { useEffect, useState } from "react";
import BlogList from "../Components/BlogList";
import { Layout } from "../Layout/Layout";
import { postLatest } from "../APIRecquest/APIRecquest";
import Loader from "../Components/Loader";

const HomePage = () => {
    const [list, setList] = useState(null);

    // console.log(categories);

    useEffect(() =>{
        (async()=>{
            let res = await postLatest();
            setList(res);
        })()
    },[]);

    return (
        <Layout>
            {list===null?<Loader/>:<BlogList list={list}/>}
        </Layout>
    );
};

export default HomePage;