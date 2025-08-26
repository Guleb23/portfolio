import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProjectNavigation from '../Components/ProjectNavigation';
import { projects } from '../Constants';
import AboutProjInfo from '../Components/ProjectComponents/AboutProjInfo';
import Slider from '../Components/ProjectComponents/Slider';
import { MdPlayArrow } from 'react-icons/md';
import { GrGithub } from 'react-icons/gr';
import { BiPlay } from 'react-icons/bi';
import Modal from '../Components/Modal';

const AboutProject = () => {
    const { id } = useParams();
    const [currentProject, setCurrentProject] = useState(null);
    const [error, setError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(null);
    const [currentPhoto, setCurrentPhoto] = useState(null);

    useEffect(() => {
        const proj = projects.find(x => x.id === Number(id));

        if (proj) {
            setCurrentProject(proj);
        } else {
            setError(true);

        }
    }, [id]);

    if (error) {
        return (
            <div className='min-h-dvh min-w-dvw p-10 overflow-hidden'>
                <h1>Похоже, вы зашли не туда</h1>
                <p>Проект с ID {id} не найден</p>
            </div>
        );
    }

    if (!currentProject) {
        return <div>Загрузка...</div>;
    }

    function openInNewTab(url) {

        url ? window.open(url, '_blank', 'noopener,noreferrer') : alert('К сожалению этого проекта нету на хостинге');
    }

    const choosePhoto = (image) => {
        setCurrentPhoto(image);
        setIsModalOpen(true);
    }

    return (
        <div className="h-dvh w-full flex flex-col justify-center items-center relative">
            <ProjectNavigation />
            <AboutProjInfo
                title={currentProject.name}
                description={currentProject.description}
                frameworks={currentProject.frameworks}
                img={currentProject.image}
            />
            <div className='fixed -translate-x-1/2 left-1/2 bottom-4 w-46 h-16 bg-black z-[100] rounded-4xl'>
                <div className=' w-full h-full flex justify-center items-center relative' >
                    <div onClick={() => openInNewTab(currentProject.git)} className='text-white w-full h-full  flex justify-center items-center rounded-l-4xl hover:bg-white hover:text-black transition-all duration-500'>
                        <GrGithub size={40} />
                    </div>
                    <div onClick={() => openInNewTab(currentProject.href)} className='text-white w-full h-full flex justify-center items-center rounded-r-4xl hover:bg-white hover:text-black transition-all duration-500'>
                        <BiPlay size={50} />
                    </div>
                </div>
            </div>


            <div className='p-2 md:p-16 overflow-hidden  '>
                <Slider choosePhoto={choosePhoto} images={currentProject.images} />
            </div>
            <Modal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} image={currentPhoto} />
        </div>
    );
}

export default AboutProject;