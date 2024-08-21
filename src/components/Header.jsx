import React from 'react';
import { useFetchData } from '../hooks/useEffect';

const Header = () => {
  const { data, loading, error } = useFetchData('http://localhost:3000/user');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className=''>
      {Array.isArray(data) && data.length > 0 && data.map((item, index) => (
        <div key={index} className='profile'>
          <h1 className='text-4xl font-normal mt-10'>{item.profile.name}</h1>
          <ul className='flex flex-row space-x-4 text-[0.8rem]'>
            <li>Phone: {item.profile.phone}</li>
            <li>
              Email: <a href={`mailto:${item.profile.email}`} className='underline'>{item.profile.email}</a>
            </li>
            <li>
              GitHub: <a href={`https://github.com/meedikshya/${item.profile.github}`} className='underline' target='_blank' rel='noopener noreferrer'>{item.profile.github}</a>
            </li>
            <li>
              LinkedIn: <a href={`https://www.linkedin.com/in/dikshyasharma0405/${item.profile.linkedin}`} className='underline' target='_blank' rel='noopener noreferrer'>{item.profile.linkedin}</a>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Header;
