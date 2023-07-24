import  { useContext, useState } from 'react';
import useFeedback from '../HooksFilesAll/useFeedback';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactStars from 'react-rating-star-with-type'

import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination,Navigation } from 'swiper/modules';




const Reviewfield = () => {
const {userProfile} = useContext(AuthContextPro)
   const [feedback] =  useFeedback()
console.log(feedback);







    return (
        <>
        <div>
            <p className='text-center  p-5 font-bold text-4xl font-serif'>Here is feedback from college students</p>
        </div>
      
<div className='overflow-hidden border my-10 mx-auto p-5 w-9/12'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
   
        className="mySwiper"
       
     
      >
       {
 feedback?.map(p=><SwiperSlide  key={p._id}><Reviewback  userProfile={userProfile} key={p._id} data={p}/> </SwiperSlide>)
       }
      
      </Swiper>


      </div>






        </>
    );
};


function Reviewback({data,userProfile}){
const {email,feedback,title,name,rating,userpicture} = data 


return(<>

<div className='border rounded-2xl  p-3 h-[19rem] flex flex-col justify-between'>
    <div>
        <img src={userpicture} className='w-[5rem] h-[5rem] rounded-full mx-auto border p-1 border-red-500 mt-2 mb-2'/>

        <p className='text-gray-600 font-semibold text-xl text-center'>{name}</p>
        <p className='font-semibold text-blue-500 text-center'>{title}</p>
        
        <div className='flex justify-center my-1'>
            <ReactStars 
                size="1rem"
                value={rating}  
                activeColor='#F31559'  
            />
        </div>

        <p className='px-2 text-sm mt-3 text-center font-serif  text-gray-700'>{feedback.length<107?feedback:feedback.slice(0,107)}</p>
    </div>

    <p style={{color:"#F31559"}} className='font-semibold text-center mt-2'>{email}</p>
</div>








</>)
}

export default Reviewfield;