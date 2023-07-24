import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Component/Main.jsx'
import AuthProviderPro from './FirebaseAuthentication/AuthProviderPro'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderPro>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>


      
    <div className='max-w-screen-2xl'>
<RouterProvider router={router} />
 </div>

 </HelmetProvider>
  </QueryClientProvider>










  
  </AuthProviderPro>
  </React.StrictMode>,
)
