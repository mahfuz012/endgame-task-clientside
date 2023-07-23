import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContextPro } from "../FirebaseAuthentication/AuthProviderPro";
import Lottie from "lottie-react";
import spinnerpro from "../Sharefiles/Aniki Hamster.json"



const PrivaiteRoute = ({children}) => {
const compassing = useLocation()
const {userProfile,loader} = useContext(AuthContextPro)

if(userProfile){
  return children
}

if(userProfile && loader){
  return  <Lottie className='w-1/3 mx-auto' animationData={spinnerpro} loop={true} />;
}





return  <Navigate to={'/login'} state={{from:compassing}} replace ></Navigate>



}

export default PrivaiteRoute;



