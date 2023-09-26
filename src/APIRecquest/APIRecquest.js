import axios from "axios";

const BaseURL = "https://basic-blog.teamrabbil.com/api";

export async function postCategories(){
    let res = await axios.get(BaseURL+"/post-categories");
    // console.log(res);
    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}

export async function postLatest(){
    let res = await axios.get(BaseURL+"/post-newest");
    // console.log(res);
    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}

export async function postByCategory(id){
    let res = await axios.get(BaseURL+"/post-list/"+id);
    // console.log(res);
    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}

export async function postDetails(id){
    let res = await axios.get(BaseURL+"/post-details/"+id);
    // console.log(res);
    if(res.status===200){
        return res.data;
    }else{
        return [];
    }
}