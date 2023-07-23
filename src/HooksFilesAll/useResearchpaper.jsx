import React from 'react';
import useMagicAxiosBoss from './useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';




const useResearchpaper = () => {
    
    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: researchpaper = [] } =
        useQuery(
        ['researchpaper'],
         async () => {
         const res = await axiosMagic.get(`/reserachpapers`)
                return res.data
            
        })
      
      
      
      return [researchpaper,refetch]



};

export default useResearchpaper;