
import useMagicAxiosBoss from './useMagicAxiosBoss';
import { useQuery } from '@tanstack/react-query';

const useAllUserIdentity = () => {


    const [axiosMagic] = useMagicAxiosBoss()

    const { refetch, data: userdetails = [] } =
        useQuery(
        ['userdetails'],
         async () => {
         const res = await axiosMagic.get(`/useridentity`)
                return res.data
            
        })
      
      
      
      return [userdetails,refetch]


};

export default useAllUserIdentity;