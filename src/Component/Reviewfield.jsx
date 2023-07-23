import React, { useContext } from 'react';
import useFeedback from '../HooksFilesAll/useFeedback';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';




const Reviewfield = () => {
const {userProfile} = useContext(AuthContextPro)
   const [feedback] =  useFeedback()
console.log(feedback);







    return (
        <>
        <div>
            <p className='text-center bg-red-100 p-5 font-bold text-4xl font-serif'>Here is feedback from college students</p>
        </div>
      
<div className='overflow-hidden border my-10 mx-auto p-5 w-9/12'>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {
 feedback?.map(p=><SwiperSlide  key={p._id}><Reviewback userProfile={userProfile} key={p._id} data={p}/> </SwiperSlide>)
       }
      
      </Swiper>


      </div>






        </>
    );
};


function Reviewback({data,userProfile}){
const {email,feedback,title,name,rating} = data 
return(<>

<div className='border p-3'>
    <img src={userProfile?.photoURL}  className='w-[5rem] h-[5rem] rounded-full mx-auto mt-2 mb-5'/>

    <p className='text-gray-600 font-semibold text-xl text-center'>{name}</p>
    <p className='font-semibold text-blue-500 text-center'>{title}</p>
    <p>{rating}</p>
<p className='px-2 text-md'>{feedback}</p>

</div>







</>)
}

export default Reviewfield;