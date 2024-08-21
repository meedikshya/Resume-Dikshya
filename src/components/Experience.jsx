import React from 'react';
import { useFetchData } from '../hooks/useEffect'; 

const Experience = () => {
    const { data, loading, error } = useFetchData('http://localhost:3000/user');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className=''>
            {Array.isArray(data) && data.length > 0 && data.map((item, index) => (
                <div key={index} className=''>
            <h1 className='font-bold'>Experience</h1>
            <hr className='border-black mb-1' /> 
                    {Array.isArray(item.experience) && item.experience.length > 0 && item.experience.map((exp, expIndex) => (
                        <div key={expIndex} className=' text-justify'>
                        <ul className='flex justify-between items-center'>
                                <li className='flex-1'>
                                    <h2 className='text-base font-semibold'>{exp.title}</h2>
                                </li>
                                <li className='flex-none'>
                                    <p className='text-base font-semibold'>{exp.date}</p>
                                </li>
                            </ul>
                            <p className='text-sm '>{exp.organization}</p>
                            <p className='text-sm'>{exp.location}</p>
                          
                            {Array.isArray(exp.responsibilities) && exp.responsibilities.length > 0 && (
                                <ul className='list-disc pl-5'>
                                    {exp.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex} className='text-sm'>{resp}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Experience;
