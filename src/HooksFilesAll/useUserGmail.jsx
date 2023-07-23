// import  { useContext } from 'react';
// import useMagicAxiosBoss from './useMagicAxiosBoss';
// import { useQuery } from '@tanstack/react-query';
// import { AuthContextPro } from '../FirebaseAuthentication/AuthProviderPro';

// const useUserGmail = () => {

// const {userProfile} = useContext(AuthContextPro)
//     const [axiosMagic] = useMagicAxiosBoss()

//     const { refetch, data: findgmaildetails = [] } =
//         useQuery(
//         ['findgmaildetails'],
//          async () => {
//          const res = await axiosMagic.get(`/findgmaildetails?email=${userProfile.email}`)
//                 return res.data
            
//         })
      
      
      
//       return [findgmaildetails,refetch]



   
// };

// export default useUserGmail;