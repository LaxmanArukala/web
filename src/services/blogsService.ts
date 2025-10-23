import axiosInstance from '../api/axiosInstance';


export const getAllBlogs = async ()=>{
    try{
       const response = await axiosInstance.get("blogs")
       return response?.data
    }catch(err){
        console.log("err", err);
        throw err;
    }
}

export const getBlogById = async (id:number)=>{
    try{
       const response = await axiosInstance.get(`blogs/${id}`)
       return response?.data
    }catch(err){
        console.log("err", err);
        throw err;
    }
}