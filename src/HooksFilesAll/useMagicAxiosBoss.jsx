import { useContext, useEffect } from "react";
import { AuthContextPro } from "../FirebaseAuthentication/AuthProviderPro";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const useMagicAxiosBoss = () => {
 const {logoutProfile} = useContext(AuthContextPro)   
 const compassing  = useNavigate()  
   


const axiosMagic = axios.create({
       baseURL:"https://myapp-psi-khaki.vercel.app"
   })
   
   

useEffect(()=>{
   axiosMagic.interceptors.request.use((config)=>{
       const token = localStorage.getItem(`JWT-token`)
       if(token){
 config.headers.Authorization=`Bearer ${token}`

} 
       return config
       
   })
},[axiosMagic,logoutProfile,compassing]);




axiosMagic.interceptors.response.use((response)=>response,



async(error)=>{
   if(error.response && (error.response.status === 401 || error.response.status === 403)) {
       await logoutProfile();
       compassing('/login')
   }
   
   return Promise.reject(error);
}
)





   return [axiosMagic]
};

export default useMagicAxiosBoss;


























