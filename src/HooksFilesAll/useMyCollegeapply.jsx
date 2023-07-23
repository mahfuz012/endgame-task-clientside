import React, { useContext } from 'react';
import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';
import useMagicAxiosBoss from './useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';

const useMyCollegeapply = () => {
  
const {userProfile} = useContext(AuthContextPro)
    const [axiosMagic] = useMagicAxiosBoss()



    const { refetch, data: applycolleges = [] } =
        useQuery(
        ['applycolleges'],
         async () => {
         const res = await axiosMagic.get(`/applycollegesdata/${userProfile?.email}`)
                return res.data
            
        })
      
      
      
      return [applycolleges,refetch]










};

export default useMyCollegeapply;