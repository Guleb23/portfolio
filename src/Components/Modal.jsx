import { RxCross2 } from "react-icons/rx";

const Modal = ({ image, title = "Имя фото", isOpen = false, onClose }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div onClick={handleOverlayClick} className='w-screen h-screen bg-black/80 fixed z-[100] flex justify-center items-center'>
            <div className='min-h-1/3 min-w-1/3 rounded-2xl flex flex-col w-fit h-fit  max-w-[80%] bg-white'>
                <div className='min-h-14 rounded-tr-2xl rounded-tl-2xl  flex w-full items-center px-4'>
                    <p className='w-full'>{title}</p>
                    <div onClick={onClose} className='w-fit'>
                        <RxCross2 size={24} />
                    </div>
                </div>
                <div className="w-fit">
                    <img src={image} className="rounded-bl-2xl rounded-br-2xl  w-fit" />
                </div>
            </div>
        </div>
    )
}

export default Modal
