
import Lottie from "lottie-react";
import spinnerpro from "../../Sharefiles/animation_lkezoddrs.json"
import {BsArrowRight} from "react-icons/bs"
import { Link } from "react-router-dom";




const Headerbanner = () => {
    return (
        <div className='justify-center  sm:flex'>
       

<div className='sm:w-6/12 mt-5 mb-20 sm:my-0  px-5 sm:ps-20 p-5 '>
<h1 className='text-6xl sm:text-8xl text-gray-600'>Take the <span className='text-red-400'>𝖊𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓</span> </h1>
 <p className='text-6xl sm:text-8xl text-gray-600'>spread it among all</p>

 <Link to={'/Colleges'}><button className='btn mt-20 sm:mt-10 w-2/3 sm:w-80 bg-gray-800 text-red-400 text-xl rounded-e-full rounded-s-full'>See Our College  <BsArrowRight className='text-xl' /></button></Link>
</div>


<div className='sm:w-6/12 '>
<Lottie className='sm:w-4/5 mx-auto' animationData={spinnerpro} loop={true} />;
</div>










        </div>
    );
};

export default Headerbanner;