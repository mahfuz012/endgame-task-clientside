
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import blackcat from '../Sharefiles/lf20_kcsr6fcp.json'
import Lottie from "lottie-react";

const ErrorPage = () => {
    const navigation = useNavigate()
    function gohome(){
        navigation("/")
    }
    return (
        <>
        <div className='sm:flex mt-32'>

<Helmet>
<title>Error Page</title>
</Helmet>


         <div className='sm:w-6/12 flex  flex-col justify-center'>
   <p className='text-4xl font-bold text-center '>
Back To Home, Sweet Home
    </p>
    <button className='btn bg-[#F31559]  text-white font-bold mt-10 my-5 w-1/3 mx-auto' onClick={gohome}>Home</button>

          </div>




          <div className='sm:w-6/12'>
          <Lottie className='sm:w-3/4 ' animationData={blackcat} loop={true} />

          </div>






        </div>








   





        </>
    );
};

export default ErrorPage;