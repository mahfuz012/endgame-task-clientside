import React from 'react';
import useMagicAxiosBoss from './useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';

const useFeedback = () => {
    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: feedback = [] } =
        useQuery(
        ['feedback'],
         async () => {
         const res = await axiosMagic.get(`/feedbackapply`)
                return res.data
            
        })
      
      
      
      return [feedback,refetch]
};

export default useFeedback;