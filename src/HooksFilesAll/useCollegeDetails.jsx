import React from 'react';
import useMagicAxiosBoss from './useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';

const useCollegeDetails = () => {
   
    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: collgedetais = [] } =
        useQuery(
        ['collgedetais'],
         async () => {
         const res = await axiosMagic.get(`/collegedetails`)
                return res.data
            
        })
      
      
      
      return [collgedetais,refetch]




};



export default useCollegeDetails;