import useSWR from 'swr';
import fetcher from '../lib/fetcher';

const useBilboard=()=>{
    const{data,error,isLoading}=useSWR('/api/random',fetcher,{
        revalidateIfState:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false,
    })

    return {
        data,
        error,
        isLoading
    }
}

export default useBilboard;