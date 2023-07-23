import React from 'react';
import Headerbanner from '../Sharefiles/Headerbannner/Headerbanner';
import CollegeCardItems from '../Sharefiles/CollegeCardItems';
import Gallaryfire from './Gallaryfire';
import Researchpaper from './Researchpaper';



const HomeSection = () => {
    return (

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

<div className=' my-20'>
<Researchpaper />
</div>



</div>
    );
};

export default HomeSection;