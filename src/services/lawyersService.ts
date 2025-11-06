import axiosInstance from '../api/axiosInstance';


export const getAllLawyers = async ()=>{
    try{
       const response = await axiosInstance.get("lawyers");
      
       return response?.data;     
    }catch(err){
        console.log("err", err);
        throw err;
    }
}

export const getLawyerById = async (id:string)=>{
    
    try{
        console.log("id", id)
       const response = await axiosInstance.get(`lawyers/${id}`)
       return response?.data
    }catch(err){
        console.log("err", err);
        throw err;
    }
}