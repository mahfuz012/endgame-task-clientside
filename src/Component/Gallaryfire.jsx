import React, { useContext } from 'react';
import useCollegeDetails from '../HooksFilesAll/useCollegeDetails';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';

const Gallaryfire = () => {

    const [collgedetais] = useCollegeDetails()
    const {userProfile} = useContext(AuthContextPro)



    return (
        <>
        <div className='bg-red-950'>
        <div className='text-center bg-red-100 p-5 font-bold text-4xl font-serif'>
            <p> -- Celebrate our Graduation with Memories -- </p>
        </div>
        <div className='  p-5 sm:grid grid-cols-3 gap-2'>
     
    {
        collgedetais?.map(p=><GallaryWorld key={p._id} data={p}/>)
    }




        </div>

        </div>
        </>
    );
};


function GallaryWorld({data}){
const {graduation_image,name} = data 
return (<>

<div>
    <img src ={graduation_image} className='rounded-lg hover:scale-105 transition-all duration-[0.2s] ease-linear w-full h-[300px]' />
</div>


</>)
}



export default Gallaryfire;