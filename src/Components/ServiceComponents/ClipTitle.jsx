
const ClipTitle = ({ title, fontColor, bgColor, rotation }) => {
    return (
        <div className="w-fit border-[.5vw] border-[#e5e5e0] animated-title contact-text-responsive" style={{ clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)", rotate: rotation }} >
            <div className="pb-5 md:px-14 px-3  md:pt-0 pt-3" style={{ backgroundColor: bgColor }}>
                <h2 className="uppercase" style={{ color: fontColor }}>{title}</h2>
            </div>
        </div>
    )
}

export default ClipTitle
