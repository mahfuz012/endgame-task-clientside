import React from 'react';
import useResearchpaper from '../HooksFilesAll/useResearchpaper';

const Researchpaper = () => {

const [researchpaper] =  useResearchpaper()

console.log(researchpaper);

    return (
        <div>
  <p className='text-4xl text-center font-semibold font-serif text-gray-700'>-- Here are research papers for college students -- </p>



<div className=' my-16 sm:flex gap-5 px-10'>
{
researchpaper?.map(p=><Researchpapers key={p._id} data={p}/>)

}
</div>




        </div>
    );
};


function Researchpapers({data}){
const {researchPaperName,websiteLink,collegeName,studentNames} = data 
return (<>

<div className='sm:w-4/12 border p-5 bg-purple-100'>
<p className='text-xl font-semibold text-black'>Research Paper Name : {researchPaperName}</p>
<p className='text-md my-1'>Website Link: <a className='text-blue-600 font-semibold underline' href={websiteLink} target="_blank" rel="noopener noreferrer">Research Paper</a></p>

<p className='text-md my-1'>Students Name : {studentNames?.map(p=><span>-{p}</span>)}</p>
<p className='text-md my-1'>College Name : {collegeName}</p>


</div>


</>)
}



export default Researchpaper;