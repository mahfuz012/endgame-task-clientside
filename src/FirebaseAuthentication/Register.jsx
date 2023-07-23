import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { AuthContextPro } from './AuthProviderPro';
import swal from 'sweetalert';
import { updateProfile } from 'firebase/auth';
import useMagicAxiosBoss from '../HooksFilesAll/useMagicAxiosBoss';



const Register = () => {

  const { createRegister,registerWithFacebook, userProfile, registerWithGoogle } = useContext(AuthContextPro)
 const { reset, register, handleSubmit, watch, formState: { errors } } = useForm();

const [axiosMagic] = useMagicAxiosBoss()


function googleregister(){
  registerWithGoogle()
  .then(res=>{
    const dataAll = res.user
     
    const url = dataAll.photoURL
    const displayName = dataAll.displayName
    const email = dataAll.email
    const googleDataProvider = { email, url, displayName }

    axiosMagic.post('/userdetailsadd', googleDataProvider)
      .then(res => {
        console.log(res.data);

        swal({
          text: `Hi ${userProfile?.displayName}, Successfully completed Registration`,
          icon: "success",
            });

      })
      .catch(error => {
        console.error(error);
        swal({
          text: `Bro you are Using Same Gmail ,Try Another.`,
          icon: "error",
        });
      });
  })



  .catch((error)=>console.log(error))
}




function facebookregister(){
  registerWithFacebook()
  .then(res=>console.log(res))
  .catch((error)=>console.log(error))
}



function submitFunction(data) {
  const displayName = data.text
  const email = data.email
  const url = data.url
  const password = data.password

  createRegister(email, password, url, displayName)
    .then((credentialUser) => {
    updateProfile(credentialUser.user, {
        displayName: displayName,
        photoURL: String(url)
    }).then(() => {
        console.log("Profile updated successfully.");
      }).catch((error) => {
        console.log("Error updating profile: ", error);
      });



      swal({
        text: `Hi ${userProfile?.displayName}, Successfully completed Registration`,
        icon: "success",
      });

      axiosMagic.post('/userdetailsadd', { email, url, displayName })

 reset()

    }).catch((error) => {
      const errorNotice = error.message;
      console.log(errorNotice);
      if (errorNotice) {

        swal("You are Using same email!", "Try Another gmail");
      }
    })
}



// ---------------------------------------------------------------------------

const validatePassword = (value) => {

  if (value.length < 6) {
    return 'Password should be at least 6 characters long';
  }

  if (!/[A-Z]/.test(value)) {
    return 'Password should contain at least one capital letter';
  }


  if (!/[!@#$%^&*]/.test(value)) {
    return 'Password should contain at least one special character (!@#$%^&*)';
  }


  return null;
}

const password = watch('password');


// ------------------------------------------------------------------------------------------------






    return (
        <div className='mb-20'>

        <div className='sm:flex  sm:justify-center '>
        <div style={{alignItems:"center"}} className='sm:w-6/12  px-10 sm:px-0 sm:flex '>
        
        
        <form onSubmit={handleSubmit(submitFunction)} className='my-5 py-5 sm:text-center'>
                    <h1 className='text-gray-600 pb-5 text-3xl font-bold mb-2'>Registration</h1>
                    <div style={{ alignItems: 'center' }} className='flex  flex-col'>
        
        
        
                      <input {...register('text', { required: true })}
                        className='border border-blue-300 w-full sm:w-80 my-2 p-2 '
                        type='text'
                        placeholder='Type your Name'
                        name='text'
                      />
                      {errors.text && <span className='text-sm text-red-700 '>Please fill this field</span>  }
        
        
        
        
        
                      <input
                        {...register('email', { required: true })}
                        className='border border-blue-300  w-full sm:w-80 my-2 p-2 '
                        type='email'
                        placeholder='Type your Email'
                        name='email'
                      />
                      {errors.email && <span className='text-sm text-red-700 '>Please fill this field</span>}
        
                      <input
                        {...register('url')}
                        className='border border-blue-300 w-full sm:w-80 my-2 p-2 '
                        type='url'
                        placeholder='Type your Profile URL'
                        name='url'
                      />
                      {errors.url && <span className='text-sm text-red-700 '>Please fill this field</span>}
        
              <input {...register('password', {
                          required: true,
                          validate: validatePassword,
                        })}
                        className=' border-blue-300 w-full sm:w-80 border my-2 p-2'
                        type='password'
                        placeholder='Type your password'
                        name='password'
                      />
                      {errors.password && <span className='text-sm text-red-700 '>{errors.password.message}</span>}
        
                      <input
                        {...register('confirm', {
                          required: true, validate: (value) => value === password || "Passwords don't match",
                        })}
                        className=' border-blue-300 w-full sm:w-80 border my-2 p-2'
                        type='password'
                        placeholder='Confirm your password'
                        name='confirm'
                      />
                      {errors.confirm && <span className='text-sm text-red-700 '>{errors.confirm.message}</span>}
        
                      <input
                        value='Register'
                        className='w-52  my-2 p-2  bg-blue-600 text-white'
                        type='submit'
                      />
                    </div>
        
                    <p className='mt-2 mb-3 px-12 sm:px-5'>
                      if you have registered account before, click
                      <Link to={'/login'} className='font-bold text-xl mx-1 text-blue-700'>
                        Login
                      </Link>
                    </p>
        
        
                  </form>
        
        
                  <div style={{alignItems:"center"}} className=' flex  flex-col gap-y-4  '>
                    <p className='text-xl my-5 text-gray-600 font-semibold'>Connect by Social Platform</p>
                    <button onClick={googleregister} className='btn bg-base-100 border-black  my-2 sm:my-0 w-2/3 text-black '>
        
                      <FcGoogle className='text-xl ' />
                      Google</button>


                    <button onClick={facebookregister} className='btn bg-base-100 border-black  my-2 sm:my-0 w-2/3   text-black '>
        
                      <BiLogoFacebookCircle className='text-xl text-blue-700' />
                      Facebook</button>



                  </div>
        
        
        
        
        
        
        
                </div>
        
        
                
              </div>
        
        

            </div>
    )
}

export default Register;