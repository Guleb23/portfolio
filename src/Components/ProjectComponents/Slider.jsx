import { useEffect, useRef, useState } from 'react';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import gsap from 'gsap';

const Slider = ({ images = [], choosePhoto }) => {
    const [index, setIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedImages, setLoadedImages] = useState([]);
    const imgRef = useRef(null);
    const directionRef = useRef(1);


    useEffect(() => {
        if (images.length === 0) return;

        setIsLoading(true);

        const loadImages = async () => {
            const promises = images.map((src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => resolve(src);
                    img.onerror = (err) => reject(err);
                });
            });

            try {
                const loaded = await Promise.all(promises);
                setLoadedImages(loaded);
                setIsLoading(false);
            } catch (error) {
                console.error("Error loading images:", error);
                setIsLoading(false);
            }
        };

        loadImages();
    }, [images]);

    const animateImage = () => {
        if (isLoading) return;

        const direction = directionRef.current;
        gsap.fromTo(
            imgRef.current,
            { y: direction * -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
        );
    };

    useEffect(() => {
        animateImage();
    }, [index, isLoading]);

    const showNextImage = () => {
        if (isLoading) return;
        directionRef.current = 1;
        setIndex(prev => (prev === loadedImages.length - 1 ? 0 : prev + 1));
    };

    const showPrevImage = () => {
        if (isLoading) return;
        directionRef.current = -1;
        setIndex(prev => (prev === 0 ? loadedImages.length - 1 : prev - 1));
    };

    const showImageWithIndex = (currentIndex) => {
        if (isLoading) return;
        setIndex(currentIndex);
    }

    if (isLoading) {
        return (
            <div className='2xl:w-[93vw] xl:w-[90vw] lg:w-[90vw] md:w-[90vw] h-full max-h-screen flex items-center justify-center bg-gray-100 rounded-2xl'>
                <div className='text-xl font-medium'>Загрузка изображений...</div>
            </div>
        );
    }

    if (loadedImages.length === 0) {
        return (
            <div className='2xl:w-[93vw] xl:w-[90vw] lg:w-[90vw] md:w-[90vw] h-full max-h-screen flex items-center justify-center bg-gray-100 rounded-2xl'>
                <div className='text-xl font-medium'>Нет доступных изображений</div>
            </div>
        );
    }

    return (
        <div className='2xl:w-[93vw] xl:w-[90vw] lg:w-[90vw] md:w-[90vw] h-full max-h-screen relative hidden md:block'>
            <div className='w-full h-full overflow-hidden rounded-2xl' onClick={() => choosePhoto(loadedImages[index])}>
                <img
                    ref={imgRef}
                    key={loadedImages[index]}
                    className='object-cover h-full w-full'
                    src={loadedImages[index]}
                    alt='projPhoto'
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'placeholder-image-url'; // Запасное изображение
                    }}
                />
            </div>
            <div className='absolute left-3 top-1/2 -translate-y-1/2'>
                <div className='flex flex-col bg-white/30 p-3 rounded-2xl items-center justify-between gap-3'>
                    <div onClick={showPrevImage} className='cursor-pointer hover:scale-80 hover:text-white transition-all'>
                        <BsArrowUp size={40} />
                    </div>
                    <div className='flex flex-col gap-2'>
                        {loadedImages.map((img, curentIndex) => ((
                            <div
                                key={curentIndex}
                                onClick={() => showImageWithIndex(curentIndex)}
                                className={`rounded-full w-3 h-3 
                                ${curentIndex === index ? "bg-white" : "bg-black"}
                                cursor-pointer hover:scale-80 hover:bg-white/50 transition-all `}>
                            </div>
                        )))}
                    </div>
                    <div onClick={showNextImage} className='cursor-pointer hover:scale-80 hover:text-white transition-all'>
                        <BsArrowDown size={40} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;