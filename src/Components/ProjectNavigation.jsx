import React from 'react'
import { BiSolidLeftArrow } from 'react-icons/bi'
import { useNavigate, useLocation } from 'react-router-dom'

const ProjectNavigation = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const canGoBack = location.key !== 'default';

    const handleGoBack = () => {
        if (canGoBack) {
            navigate(-1);
        }
    }

    return (
        <div id='projNav' className='fixed top-4 md:px-10 px-3 z-50 flex w-full '>
            {canGoBack && (
                <div
                    onClick={handleGoBack}
                    className='h-16 w-16 rounded-full bg-black flex justify-center items-center cursor-pointer hover:bg-gray-800 transition-colors'
                >
                    <BiSolidLeftArrow color='white' size={20} />
                </div>
            )}


        </div>
    )
}

export default ProjectNavigation