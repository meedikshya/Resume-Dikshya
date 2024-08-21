import React from 'react'
import { useFetchData } from '../hooks/useEffect'; 

const Profile = () => {
    const { data, loading, error } = useFetchData('http://localhost:3000/user');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

  return (
     <div className=''>
      {Array.isArray(data) && data.length > 0 && data.map((item, index) => (
        <div key={index} className='profile'>
        <h1 className='font-bold'>Profile</h1>
        <hr className='border-black mb-1' /> 
          <p className='text-[0.9rem] text-justify font-normal'>{item.profile.summary}</p>
        
        </div>
      ))}
    </div>
  )
}

export default Profile;
