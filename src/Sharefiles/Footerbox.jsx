import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';




const Footerbox = () => {










    return (
        <div>
      <footer className=" text-center text-neutral-600 dark:bg-neutral-600   dark:text-neutral-200 lg:text-left">
      <div className="flex    border-b-2 border-pink-200 p-6 dark:border-neutral-500 lg:justify-between">
       
   
        <div className="flex  justify-center mx-auto">
          <a href="#!" className="mr-6 dark:text-neutral-200">
            <FiFacebook className="h-4 w-4" />
          </a>
          <a href="#!" className="mr-6 dark:text-neutral-200">
            <FiTwitter className="h-4 w-4" />
          </a>
          <a href="#!" className="mr-6 dark:text-neutral-200">
            <FiInstagram className="h-5 w-5" />
          </a>
          <a href="#!" className="mr-6 dark:text-neutral-200">
            <FiLinkedin className="h-4 w-4" />
          </a>
          <a href="#!" className="dark:text-neutral-200">
            <FiMail className="h-4 w-4" />
          </a>
        </div>
      </div>


      <div  className="mx-6 p-5 bg-[#FFF0F5] text-[#7A0BC0] px-10 border  py-10 text-center md:text-left">
        <div className="sm:flex justify-center     ">
        
          <div className='sm:w-3/12'>
            <h6 className="mb-4 flex items-center justify-center font-bold text-2xl md:justify-start">
            
              College Finder
            </h6>
            <p>
              Welcome to College Finder, your one-stop destination for college information, applications, and resources.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        
          <div className=' text-center sm:w-3/12'>
            <h6 className="mb-4 font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="#!" className=" dark:text-neutral-200">
                About Us
              </a>
            
            </p>
            <p className="mb-4">
              <a href="#!" className="dark:text-neutral-200">
                Contact Us
              </a>
            </p>
    
          </div>
      
          <div style={{alignItems:"center"}} className=' flex flex-col  sm:w-3/12'>
            <h6 className="mb-4  font-semibold  ">
              Contact
            </h6>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FiMail className="mr-3 h-5 w-5" />
              New York, NY 10012, US
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FiMail className="mr-3 h-5 w-5" />
              info@collegefinder.com
            </p>
            <p className="mb-4 flex items-center justify-center md:justify-start">
              <FiMail className="mr-3 h-5 w-5" />
              +1 234 567 88
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <FiMail className="mr-3 h-5 w-5" />
              +1 234 567 89
            </p>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-black text-white p-6 text-center dark:bg-neutral-700">
        <span>
        © 2023 Copyright: College Finder
        </span>
      </div>
    </footer>
        </div>
    );
};

export default Footerbox;