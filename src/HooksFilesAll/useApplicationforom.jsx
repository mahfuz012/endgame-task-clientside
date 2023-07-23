import React from 'react';
import useMagicAxiosBoss from './useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';

const useApplicationforom = () => {

    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: applicationsform = [] } =
        useQuery(
        ['applicationsform'],
         async () => {
         const res = await axiosMagic.get(`/applicationdetails`)
                return res.data
            
        })
      
      
      
      return [applicationsform,refetch]









   
};

export default useApplicationforom;