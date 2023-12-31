import React from 'react';
import Headerbanner from '../Sharefiles/Headerbannner/Headerbanner';
import CollegeCardItems from '../Sharefiles/CollegeCardItems';
import Gallaryfire from './Gallaryfire';
import Researchpaper from './Researchpaper';
import Reviewfield from './Reviewfield';
import { Helmet } from 'react-helmet-async';



const HomeSection = () => {
    return (

<>
<Helmet>
        <title>Home</title>
        </Helmet>
<div className=''>

<div className=''>
<Headerbanner />
</div>


<div className=' '>
<CollegeCardItems />
</div>


<div className=' my-20'>
<Gallaryfire />
</div>

<div className=' mt-40 mb-32'>
<Researchpaper />
</div>


<div className=' my-20'>
<Reviewfield />
</div>



</div>


</>
    );
};

export default HomeSection;