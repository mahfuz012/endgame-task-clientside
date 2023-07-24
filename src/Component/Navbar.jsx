import { useContext, useEffect, useRef, useState } from 'react';

import { Link,  useNavigate,  } from 'react-router-dom';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';
import useAllUserIdentity from '../HooksFilesAll/useAllUserIdentity';
import useCollegeDetails from '../HooksFilesAll/useCollegeDetails';



const Navbar = () => {
    const {userProfile, logoutProfile} = useContext(AuthContextPro)

const [userdetails] = useAllUserIdentity()
const [collgedetais] = useCollegeDetails()
const findata = userdetails?.find(p=>p.email === userProfile?.email)


  
    const navigation = useNavigate()
function logoutprofiles(){

    logoutProfile()
    navigation("/")

}

const dataref = useRef()

const [datafind,setdata] = useState()
const [open,setTrue] = useState(false)
function openmodal(){
    setTrue(true)
    const searchvalue= dataref.current.value
const findata = collgedetais?.find((p) => p.name === searchvalue);
setdata(findata)
}

console.log(datafind);

const divRef = useRef();
useEffect(() => {
  const handleOutsideClick = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setTrue(false);
    }
  };

  document.addEventListener('mousedown', handleOutsideClick);
  return () => {
    document.removeEventListener('mousedown', handleOutsideClick);
  };
}, []);


    const navbarlink = 
    <>
 


        <Link to={'/'}><li><a>Home</a></li></Link>
        <Link to={"/Colleges"}><li><a>Colleges</a></li></Link> 
        <Link to={'/admissioncollege'}><li><a>Admission</a></li></Link>
        <Link to={'/mycolleges'}><li><a>My College</a></li></Link>
 

    <div style={{alignItems:"center"}} className='flex  relative'>
        <input ref={dataref} type='text' className='border font-serif text-gray-600 p-1 border-success '/>


        <button onClick={openmodal} className='btn btn-success btn-sm mx-1 '>Search</button>

<div ref={divRef} style={{alignItems:"center"}} className={`bg-white-300 border-2 border-success ${open?"block":"hidden"} bg-white flex flex-col rounded p-8 z-10 w-full absolute top-[2.5rem]`}>

{
   datafind?<><img src={datafind.College_image}  className='w-2/3 mx-auto'/>
    <p className='text-center font-bold my-2'>{datafind.name}</p>
    <Link to={`/details/${datafind._id}`}><button className='btn  bg-gray-800  text-white'>Details</button></Link>
    </>:<><p className='text-xl font-bold text-center'>No Data Found</p></>
}
        
</div>

    </div>



    </>






    return (
        <div>
            <div className="navbar  bg-base-100  px-5">
                <div className="navbar-start">

                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navbarlink}
                        </ul>
                    </div>
                    <a className="font-bold normal-case text-xl">𝒞𝑜𝓁𝓁𝑒𝑔𝑒 𝐹𝒾𝓃𝒹𝑒𝓇 
               
                    </a>
                </div>
                <div className="navbar-center  hidden lg:flex ">
                    <ul className="menu font-semibold text-gray-800 font-serif  menu-horizontal px-1 text-[1rem] ">
                        {navbarlink}
                    </ul>
                </div>
                <div className="navbar-end ">


               {
                userProfile? <>
                
                <Link to={`/profilepage/${findata?._id}`} className=" tooltip  tooltip-bottom tooltip-success" data-tip={userProfile?.displayName}>

<img className='w-12 h-12  rounded-full mx-2 border-purple-700 border-2 p-1 ' src={userProfile?.photoURL} />
</Link>
                
                
                
                <Link onClick={logoutprofiles} className="btn bg-red-400  ">Logout</Link>
       
                </>: <> <Link to={'/login'} className="btn bg-red-400">Login</Link></>
               }


                   



                </div>
            </div>
        </div>
    );
};

export default Navbar;